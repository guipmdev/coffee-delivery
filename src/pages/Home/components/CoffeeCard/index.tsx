import { CoffeeCardContainer, Buy } from './styles'

import { ShoppingCart } from '@phosphor-icons/react'

import { CoffeeType, coffeeTags } from '../..'
import { QuantitySelector } from '../../../../components/QuantitySelector'
import { formatToCurrencyWithoutSymbol } from '../../../../utils/formatters'

interface CoffeeCardProps {
  coffee: CoffeeType
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const foundCoffeeTags = coffee.tags.map((tag) =>
    coffeeTags.find((coffeeTag) => coffeeTag.id === tag),
  )

  return (
    <CoffeeCardContainer>
      <img src={coffee.imageURL} alt="" />

      <div className="tags">
        {foundCoffeeTags.map(
          (tag) => tag && <span key={tag.id}>{tag.name}</span>,
        )}
      </div>

      <div className="coffee-infos">
        <strong>{coffee.name}</strong>
        <p>{coffee.description}</p>
      </div>

      <Buy>
        <span>
          R$ <strong>{formatToCurrencyWithoutSymbol(coffee.price)}</strong>
        </span>

        <div className="buy-actions">
          <QuantitySelector />

          <button title="Adicionar ao carrinho">
            <ShoppingCart size={22} weight="fill" />
          </button>
        </div>
      </Buy>
    </CoffeeCardContainer>
  )
}
