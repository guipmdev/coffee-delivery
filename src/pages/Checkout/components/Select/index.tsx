import { SelectContainer } from './styles'

import { useFormContext } from 'react-hook-form'

import { Icon } from '@phosphor-icons/react'

interface SelectProps {
  icon: Icon
  name: string
  value: string
  selectText: string
}

export function Select({
  icon: CustomIcon,
  value,
  name,
  selectText,
}: SelectProps) {
  const { register, getFieldState, formState } = useFormContext()

  const { error } = getFieldState(name, formState)
  const isErrored = !!error

  return (
    <SelectContainer $invalid={isErrored}>
      <input type="radio" id={value} value={value} {...register(name)} />

      <label htmlFor={value}>
        <CustomIcon size={16} /> {selectText}
      </label>
    </SelectContainer>
  )
}
