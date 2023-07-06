import {
  CheckoutContainer,
  FormInfo,
  Address,
  Payment,
  Summary,
} from './styles'

import React, { useContext, useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'

import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
} from '@phosphor-icons/react'

import { CoffeeContext } from '../../contexts/CoffeeContext'
import { OrderContext } from '../../contexts/OrderContext'

import { OrderPayload } from '../../reducers/orders/reducer'

import { formatToCurrencyWithoutSymbol } from '../../utils/formatters'

import { Success } from './components/Success'
import { Input } from './components/Input'
import { Select } from './components/Select'
import { CoffeeCard } from './components/CoffeeCard'

const newOrderFormValidationSchema = zod.object({
  address: zod.object({
    cep: zod
      .string()
      .nonempty({ message: 'Este campo é obrigatório' })
      .max(8, { message: 'CEP inválido' }),
    street: zod.string().nonempty({ message: 'Este campo é obrigatório' }),
    number: zod.string().nonempty({ message: 'Este campo é obrigatório' }),
    complement: zod.string(),
    neighborhood: zod
      .string()
      .nonempty({ message: 'Este campo é obrigatório' }),
    city: zod.string().nonempty({ message: 'Este campo é obrigatório' }),
    state: zod
      .string()
      .nonempty({ message: 'Este campo é obrigatório' })
      .max(2, { message: 'Apenas a sigla do estado' }),
  }),
  paymentMethod: zod.enum(['credit-card', 'debit-card', 'money'], {
    errorMap: (_issue, _ctx) => ({
      message: 'Forma de pagamento é obrigatória',
    }),
  }),
})

type NewOrderFormData = zod.infer<typeof newOrderFormValidationSchema>

export function Checkout() {
  const { coffeeList } = useContext(CoffeeContext)
  const { order, finishOrder } = useContext(OrderContext)

  const [success, setSuccess] = useState(false)

  const newOrderForm = useForm<NewOrderFormData>({
    resolver: zodResolver(newOrderFormValidationSchema),
  })

  const { handleSubmit, reset } = newOrderForm

  const selectedCoffees = order.coffees.map((coffee) => {
    const foundCoffee = coffeeList.find(
      (coffeeItem) => coffeeItem.id === coffee.id,
    )

    if (!foundCoffee) return undefined

    return {
      ...foundCoffee,
      quantity: coffee.quantity,
    }
  })

  const totalPrice = selectedCoffees.reduce(
    (total, coffee) =>
      coffee ? total + coffee.price * coffee.quantity : total,
    0,
  )
  const roundedTotalPrice = Math.round(totalPrice * 100) / 100

  const deliveryCost = 3.5

  const totalPriceWithDelivery = roundedTotalPrice + deliveryCost

  function handleCreateNewOrder(data: NewOrderFormData) {
    if (selectedCoffees.length) {
      const orderPayload: OrderPayload = {
        ...data,
        ...order,
        totalPrice,
        deliveryCost,
        totalPriceWithDelivery,
      }
      reset()

      finishOrder(orderPayload)
      setSuccess(true)
    }
  }

  return success ? (
    <Success />
  ) : (
    <CheckoutContainer>
      <form onSubmit={handleSubmit(handleCreateNewOrder)}>
        <FormProvider {...newOrderForm}>
          <section>
            <h2>Complete seu pedido</h2>

            <Address>
              <FormInfo $iconColor="yellow-dark">
                <MapPinLine size={22} />
                <div>
                  <h3>Endereço de Entrega</h3>
                  <p>Informe o endereço onde deseja receber seu pedido</p>
                </div>
              </FormInfo>

              <div className="address-inputs">
                <Input
                  type="text"
                  placeholder="CEP"
                  maxLength={8}
                  $width={200}
                  name="address.cep"
                />
                <Input type="text" placeholder="Rua" name="address.street" />

                <div className="input-group">
                  <Input
                    type="text"
                    placeholder="Número"
                    $width={200}
                    name="address.number"
                  />
                  <Input
                    type="text"
                    placeholder="Complemento"
                    name="address.complement"
                    optional
                  />
                </div>

                <div className="input-group">
                  <Input
                    type="text"
                    placeholder="Bairro"
                    $width={200}
                    name="address.neighborhood"
                  />
                  <Input type="text" placeholder="Cidade" name="address.city" />
                  <Input
                    type="text"
                    placeholder="UF"
                    maxLength={2}
                    $width={60}
                    name="address.state"
                  />
                </div>
              </div>
            </Address>

            <Payment>
              <FormInfo $iconColor="purple">
                <CurrencyDollar size={22} />
                <div>
                  <h3>Pagamento</h3>
                  <p>
                    O pagamento é feito na entrega. Escolha a forma que deseja
                    pagar
                  </p>
                </div>
              </FormInfo>

              <div className="payment-options">
                <Select
                  icon={CreditCard}
                  name="paymentMethod"
                  value="credit-card"
                  selectText="CARTÃO DE CRÉDITO"
                />

                <Select
                  icon={Bank}
                  name="paymentMethod"
                  value="debit-card"
                  selectText="CARTÃO DE DÉBITO"
                />

                <Select
                  icon={Money}
                  name="paymentMethod"
                  value="money"
                  selectText="DINHEIRO"
                />
              </div>
            </Payment>
          </section>

          <section>
            <h2>Cafés selecionados</h2>

            <Summary>
              <ul>
                {selectedCoffees.map(
                  (coffee, index) =>
                    coffee && (
                      <React.Fragment key={coffee.id}>
                        <CoffeeCard coffee={coffee} />
                        {selectedCoffees.length !== index + 1 && <hr />}
                      </React.Fragment>
                    ),
                )}
              </ul>

              <hr />

              <div>
                <p>
                  Total de itens{' '}
                  <span>R$ {formatToCurrencyWithoutSymbol(totalPrice)}</span>
                </p>
                <p>
                  Entrega{' '}
                  <span>R$ {formatToCurrencyWithoutSymbol(deliveryCost)}</span>
                </p>
                <strong>
                  Total{' '}
                  <span>
                    R$ {formatToCurrencyWithoutSymbol(totalPriceWithDelivery)}
                  </span>
                </strong>
              </div>

              <button type="submit" disabled={!(selectedCoffees.length > 0)}>
                CONFIRMAR PEDIDO
              </button>
            </Summary>
          </section>
        </FormProvider>
      </form>
    </CheckoutContainer>
  )
}
