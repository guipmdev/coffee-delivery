import { CoffeeCardContainer, Buy, QuantitySelector } from './styles'

import { ShoppingCart, Plus, Minus } from '@phosphor-icons/react'

import Expresso from '../../../../assets/expresso.svg'

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
          <QuantitySelector>
            <button title="Aumentar quantidade desejada">
              <Minus size={14} weight="bold" />
            </button>
            <span>1</span>
            <button title="Diminuir quantidade desejada">
              <Plus size={14} weight="bold" />
            </button>
          </QuantitySelector>

          <button title="Adicionar ao carrinho">
            <ShoppingCart size={22} weight="fill" />
          </button>
        </div>
      </Buy>
    </CoffeeCardContainer>
  )
}
