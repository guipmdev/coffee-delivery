import { QuantitySelectorContainer } from './styles'

import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'

import { Minus, Plus } from '@phosphor-icons/react'

import { OrderContext } from '../../contexts/OrderContext'
import { ModifyAction } from '../../reducers/orders/actions'

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

  const defaultCounterValue = quantity || 1

  function handleQuantityChange(modifyAction: ModifyAction) {
    const currentCounterValue = getValues(name)

    if (currentCounterValue === 1) return

    const counterModifier = modifyAction === 'increase' ? 1 : -1

    setValue(name, currentCounterValue + counterModifier)

    if (coffeeId) modifyCoffeeQuantityInOrder(coffeeId, modifyAction)
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
        defaultValue={defaultCounterValue}
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
