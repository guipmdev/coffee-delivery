import { useState } from 'react'
import { QuantitySelectorContainer } from './styles'

import { Plus, Minus } from '@phosphor-icons/react'

interface QuantitySelectorProps {
  currentQuantity?: number
}

export function QuantitySelector({ currentQuantity }: QuantitySelectorProps) {
  const [quantity, setQuantity] = useState(currentQuantity || 1)

  return (
    <QuantitySelectorContainer>
      <button title="Aumentar quantidade desejada">
        <Minus size={14} weight="bold" />
      </button>

      <span>{quantity}</span>

      <button title="Diminuir quantidade desejada">
        <Plus size={14} weight="bold" />
      </button>
    </QuantitySelectorContainer>
  )
}
