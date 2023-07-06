import { CoffeeCardContainer, Info } from './styles'

import { useContext } from 'react'

import { Trash } from '@phosphor-icons/react'

import { Coffee } from '../../../../contexts/CoffeeContext'
import { OrderContext } from '../../../../contexts/OrderContext'

import { formatToCurrencyWithoutSymbol } from '../../../../utils/formatters'

import { QuantitySelector } from '../../../../components/QuantitySelector'

interface CoffeeInfo extends Coffee {
  quantity: number
}

interface CoffeeCardProps {
  coffee: CoffeeInfo
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const { removeCoffeeFromOrder } = useContext(OrderContext)

  function handleRemoveCoffeeFromOrder() {
    removeCoffeeFromOrder(coffee.id)
  }

  const imgUrl = new URL(
    `../../../../assets/coffees/${coffee.imageURL}`,
    import.meta.url,
  ).href

  return (
    <CoffeeCardContainer>
      <img src={imgUrl} alt="" />

      <Info>
        <span>{coffee.name}</span>

        <div>
          <QuantitySelector
            name={`quantitySelectorForCoffee${coffee.id}`}
            coffeeId={coffee.id}
            quantity={coffee.quantity}
          />

          <button onClick={handleRemoveCoffeeFromOrder}>
            <Trash size={16} />
            REMOVER
          </button>
        </div>
      </Info>

      <strong>R$ {formatToCurrencyWithoutSymbol(coffee.price)}</strong>
    </CoffeeCardContainer>
  )
}
