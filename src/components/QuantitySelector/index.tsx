import { QuantitySelectorContainer } from './styles'

import { Plus, Minus } from '@phosphor-icons/react'

import { useFormContext } from 'react-hook-form'
import { OrderContext } from '../../contexts/OrderContext'
import { useContext } from 'react'

interface QuantitySelectorProps {
  name: string
  coffeeId?: string
  quantity?: number
}

export function QuantitySelector({
  name,
  coffeeId,
  quantity,
}: QuantitySelectorProps) {
  const { register, setValue, getValues } = useFormContext()

  const { modifyCoffeeQuantityInOrder } = useContext(OrderContext)

  const defaultValue = quantity || 1

  function handleQuantityChange(action: 'increase' | 'decrease') {
    switch (action) {
      case 'increase':
        setValue(name, getValues(name) + 1)

        if (coffeeId) {
          modifyCoffeeQuantityInOrder(coffeeId, 'increase')
        }
        break
      case 'decrease':
        if (getValues(name) > 1) {
          setValue(name, getValues(name) - 1)

          if (coffeeId) {
            modifyCoffeeQuantityInOrder(coffeeId, 'decrease')
          }
        }

        break
    }
  }

  return (
    <QuantitySelectorContainer>
      <button
        type="button"
        title="Aumentar quantidade desejada"
        onClick={() => handleQuantityChange('decrease')}
      >
        <Minus size={14} weight="bold" />
      </button>

      <input
        type="number"
        defaultValue={defaultValue}
        readOnly
        {...register(name, {
          valueAsNumber: true,
        })}
      />

      <button
        type="button"
        title="Diminuir quantidade desejada"
        onClick={() => handleQuantityChange('increase')}
      >
        <Plus size={14} weight="bold" />
      </button>
    </QuantitySelectorContainer>
  )
}
