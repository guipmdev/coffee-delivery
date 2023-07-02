import { CoffeeCardContainer } from './styles'

import { Trash } from '@phosphor-icons/react'

import { CoffeeType } from '../../../Home'
import { QuantitySelector } from '../../../../components/QuantitySelector'
import { formatToCurrencyWithoutSymbol } from '../../../../utils/formatters'

interface CoffeeCardType extends CoffeeType {
  quantity: number
}

interface CoffeeCardProps {
  coffee: CoffeeCardType
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  return (
    <CoffeeCardContainer>
      <img src={coffee.imageURL} alt="" />

      <div className="info">
        <span>{coffee.name}</span>

        <div>
          <QuantitySelector currentQuantity={coffee.quantity} />

          <button>
            <Trash size={16} />
            REMOVER
          </button>
        </div>
      </div>

      <strong>R$ {formatToCurrencyWithoutSymbol(coffee.price)}</strong>
    </CoffeeCardContainer>
  )
}
