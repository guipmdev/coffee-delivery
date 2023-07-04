import { CoffeeCardContainer } from './styles'

import { Trash } from '@phosphor-icons/react'

import { QuantitySelector } from '../../../../components/QuantitySelector'
import { formatToCurrencyWithoutSymbol } from '../../../../utils/formatters'
import { useContext } from 'react'
import { OrderContext } from '../../../../contexts/OrderContext'
import { Coffee } from '../../../../contexts/CoffeeContext'

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

  return (
    <CoffeeCardContainer>
      <img src={coffee.imageURL} alt="" />

      <div className="info">
        <span>{coffee.name}</span>

        <div>
          {/* <QuantitySelector currentQuantity={coffee.quantity} /> */}

          <button onClick={handleRemoveCoffeeFromOrder}>
            <Trash size={16} />
            REMOVER
          </button>
        </div>
      </div>

      <strong>R$ {formatToCurrencyWithoutSymbol(coffee.price)}</strong>
    </CoffeeCardContainer>
  )
}
