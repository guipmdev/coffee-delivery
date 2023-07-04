import { QuantitySelectorContainer } from './styles'

import { Plus, Minus } from '@phosphor-icons/react'

import { useFormContext } from 'react-hook-form'

interface QuantitySelectorProps {
  name: string
}

export function QuantitySelector({ name }: QuantitySelectorProps) {
  const { register, setValue, getValues } = useFormContext()

  function handleQuantityChange(action: string) {
    switch (action) {
      case 'increase':
        setValue(name, getValues(name) + 1)
        break
      case 'decrease':
        if (getValues(name) > 1) {
          setValue(name, getValues(name) - 1)
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
        defaultValue={1}
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
