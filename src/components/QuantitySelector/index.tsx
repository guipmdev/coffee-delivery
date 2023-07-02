import { QuantitySelectorContainer } from './styles'

import { Plus, Minus } from '@phosphor-icons/react'

interface QuantitySelectorProps {
  currentQuantity?: number
}

export function QuantitySelector({ currentQuantity }: QuantitySelectorProps) {
  return (
    <QuantitySelectorContainer>
      <button title="Aumentar quantidade desejada">
        <Minus size={14} weight="bold" />
      </button>
      <span>{currentQuantity || 1}</span>
      <button title="Diminuir quantidade desejada">
        <Plus size={14} weight="bold" />
      </button>
    </QuantitySelectorContainer>
  )
}
