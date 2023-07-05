import {
  CheckoutContainer,
  Address,
  Payment,
  Summary,
  FormInfo,
  Select,
} from './styles'

import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
} from '@phosphor-icons/react'

import React, { useContext } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { formatToCurrencyWithoutSymbol } from '../../utils/formatters'

import { CoffeeCard } from './components/CoffeeCard'
import { Input } from './components/Input'
import { CoffeeContext } from '../../contexts/CoffeeContext'
import { OrderContext } from '../../contexts/OrderContext'

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
  paymentMethod: zod.string({
    invalid_type_error: 'Forma de pagamento é obrigatória',
  }),
})

type NewOrderFormData = zod.infer<typeof newOrderFormValidationSchema>

export function Checkout() {
  const { coffeeList } = useContext(CoffeeContext)
  const { order } = useContext(OrderContext)

  const selectedCoffees = order.coffees.map((coffee) => ({
    ...coffeeList.find((coffeeItem) => coffeeItem.id === coffee.id)!,
    quantity: coffee.quantity,
  }))

  const totalPrice =
    Math.round(
      selectedCoffees.reduce(
        (total, coffee) => total + coffee.price * coffee.quantity,
        0,
      ) * 100,
    ) / 100

  const deliveryCost = 3.5
  const totalPriceWithDelivery = totalPrice + deliveryCost

  const newOrderForm = useForm<NewOrderFormData>({
    resolver: zodResolver(newOrderFormValidationSchema),
  })

  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = newOrderForm

  function handleCreateNewOrder(data: NewOrderFormData) {
    const orderPayload = {
      ...data,
      ...order,
      totalPrice,
      deliveryCost,
      totalPriceWithDelivery,
    }

    console.log({ orderPayload })

    reset()
  }

  return (
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

              <div className="address-forms">
                <Input
                  type="text"
                  placeholder="CEP"
                  maxLength={8}
                  $width={200}
                  errors={errors.address?.cep}
                  name="address.cep"
                />
                <Input
                  type="text"
                  placeholder="Rua"
                  errors={errors.address?.street}
                  name="address.street"
                />

                <div className="input-group">
                  <Input
                    type="text"
                    placeholder="Número"
                    $width={200}
                    errors={errors.address?.number}
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
                    errors={errors.address?.neighborhood}
                    name="address.neighborhood"
                  />
                  <Input
                    type="text"
                    placeholder="Cidade"
                    errors={errors.address?.city}
                    name="address.city"
                  />
                  <Input
                    type="text"
                    placeholder="UF"
                    maxLength={2}
                    $width={60}
                    errors={errors.address?.state}
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
                <Select $invalid={!!errors.paymentMethod}>
                  <input
                    type="radio"
                    id="credit-card"
                    value="credit-card"
                    {...register('paymentMethod')}
                  />
                  <label htmlFor="credit-card">
                    <CreditCard size={16} /> CARTÃO DE CRÉDITO
                  </label>
                </Select>

                <Select $invalid={!!errors.paymentMethod}>
                  <input
                    type="radio"
                    id="debit-card"
                    value="debit-card"
                    {...register('paymentMethod')}
                  />
                  <label htmlFor="debit-card">
                    <Bank size={16} /> CARTÃO DE DÉBITO
                  </label>
                </Select>

                <Select $invalid={!!errors.paymentMethod}>
                  <input
                    type="radio"
                    id="money"
                    value="money"
                    {...register('paymentMethod')}
                  />
                  <label htmlFor="money">
                    <Money size={16} /> DINHEIRO
                  </label>
                </Select>
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

              <button type="submit">CONFIRMAR PEDIDO</button>
            </Summary>
          </section>
        </FormProvider>
      </form>
    </CheckoutContainer>
  )
}
