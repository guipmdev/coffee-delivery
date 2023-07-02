import {
  CheckoutContainer,
  Address,
  Payment,
  Summary,
  Input,
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

import React from 'react'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { formatToCurrencyWithoutSymbol } from '../../utils/formatters'

import { CoffeeCard } from './components/CoffeeCard'
import { coffeeList, order } from '../Home'

const newOrderFormValidationSchema = zod.object({
  address: zod.object({
    cep: zod.string(),
    street: zod.string(),
    number: zod.string(),
    complement: zod.string(),
    neighborhood: zod.string(),
    city: zod.string(),
    state: zod.string(),
  }),
  paymentMethod: zod.string(),
})

type NewOrderFormData = zod.infer<typeof newOrderFormValidationSchema>

export function Checkout() {
  const foundCoffees = order.coffees.map((coffee) => ({
    ...coffeeList.find((coffeeItem) => coffeeItem.id === coffee.id)!,
    quantity: coffee.quantity,
  }))

  let totalPrice = 0
  const deliveryCost = 3.5
  let totalPriceWithDelivery = 0

  if (foundCoffees.length) {
    totalPrice = foundCoffees.reduce((acc, current) => {
      return acc + current.price * current.quantity
    }, 0)
    totalPriceWithDelivery = totalPrice + deliveryCost
  }

  const newOrderForm = useForm<NewOrderFormData>({
    resolver: zodResolver(newOrderFormValidationSchema),
  })

  const { handleSubmit, reset, register } = newOrderForm

  function handleCreateNewOrder(data: NewOrderFormData) {
    console.log(data)
    reset()
  }

  return (
    <CheckoutContainer>
      <form onSubmit={handleSubmit(handleCreateNewOrder)}>
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
                $width={200}
                {...register('address.cep')}
              />
              <Input
                type="text"
                placeholder="Rua"
                {...register('address.street')}
              />

              <div>
                <Input
                  type="text"
                  placeholder="Número"
                  $width={200}
                  {...register('address.number')}
                />
                <Input
                  type="text"
                  placeholder="Complemento"
                  {...register('address.complement')}
                />
              </div>

              <div>
                <Input
                  type="text"
                  placeholder="Bairro"
                  $width={200}
                  {...register('address.neighborhood')}
                />
                <Input
                  type="text"
                  placeholder="Cidade"
                  {...register('address.city')}
                />
                <Input
                  type="text"
                  placeholder="UF"
                  $width={60}
                  {...register('address.state')}
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
              <Select>
                <input type="radio" id="credit-card" value="credit-card" />
                <label htmlFor="credit-card">
                  <CreditCard size={16} /> CARTÃO DE CRÉDITO
                </label>
              </Select>

              <Select>
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

              <Select>
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
              {foundCoffees.map(
                (coffee, index) =>
                  coffee && (
                    <React.Fragment key={coffee.id}>
                      <CoffeeCard coffee={coffee} />
                      {foundCoffees.length !== index + 1 && <hr />}
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
      </form>
    </CheckoutContainer>
  )
}
