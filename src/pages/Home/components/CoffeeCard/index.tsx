import { CoffeeCardContainer, Buy } from './styles'

import { ShoppingCart } from '@phosphor-icons/react'

import { QuantitySelector } from '../../../../components/QuantitySelector'
import { formatToCurrencyWithoutSymbol } from '../../../../utils/formatters'
import { Coffee, CoffeeContext } from '../../../../contexts/CoffeeContext'
import { useContext } from 'react'

interface CoffeeCardProps {
  coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const { coffeeTags } = useContext(CoffeeContext)

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
