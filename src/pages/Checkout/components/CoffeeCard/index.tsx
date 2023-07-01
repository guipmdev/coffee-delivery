import { CoffeeCardContainer } from './styles'

import { Trash } from '@phosphor-icons/react'

import { QuantitySelector } from '../../../../components/QuantitySelector'

import Expresso from '../../../../assets/expresso.svg'

export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <img src={Expresso} alt="" />

      <div className="info">
        <span>Expresso Tradicional</span>

        <div>
          <QuantitySelector />

          <button>
            <Trash size={16} />
            REMOVER
          </button>
        </div>
      </div>

      <strong>R$ 9,90</strong>
    </CoffeeCardContainer>
  )
}
