import { CoffeeCardContainer, Buy } from './styles'

import { ShoppingCart } from '@phosphor-icons/react'

import { QuantitySelector } from '../../../../components/QuantitySelector'

import Expresso from '../../../../assets/coffees/expresso.png'

export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <img src={Expresso} alt="" />

      <div className="tags">
        <span>TRADICIONAL</span>
      </div>

      <div className="coffee-infos">
        <strong>Expresso Tradicional</strong>
        <p>O tradicional café feito com água quente e grãos moídos</p>
      </div>

      <Buy>
        <span>
          R$ <strong>9,90</strong>
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
