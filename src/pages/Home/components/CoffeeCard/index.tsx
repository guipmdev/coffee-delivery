import { CoffeeCardContainer, Buy } from './styles'

import { ShoppingCart } from '@phosphor-icons/react'

import { CoffeeType, coffeeTags } from '../..'
import { QuantitySelector } from '../../../../components/QuantitySelector'

interface CoffeeCardProps {
  coffee: CoffeeType
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const foundCoffeeTags = coffee.tags.map((coffeeTag) =>
    coffeeTags.find((tag) => coffeeTag === tag.id),
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
          R${' '}
          <strong>
            {coffee.price.toLocaleString('pt-BR', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </strong>
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
