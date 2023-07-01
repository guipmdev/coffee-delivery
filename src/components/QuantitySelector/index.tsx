import { QuantitySelectorContainer } from './styles'

import { Plus, Minus } from '@phosphor-icons/react'

export function QuantitySelector() {
  return (
    <QuantitySelectorContainer>
      <button title="Aumentar quantidade desejada">
        <Minus size={14} weight="bold" />
      </button>
      <span>1</span>
      <button title="Diminuir quantidade desejada">
        <Plus size={14} weight="bold" />
      </button>
    </QuantitySelectorContainer>
  )
}
