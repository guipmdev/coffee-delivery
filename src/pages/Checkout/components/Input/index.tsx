import { InputContainer } from './styles'

import { InputHTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  $width?: number
  group: string
  name: string
  optional?: boolean
}

export function Input({ $width, group, name, optional, ...rest }: InputProps) {
  const { register, getFieldState, formState } = useFormContext()

  const fieldName = group ? `${group}.${name}` : name

  const { error } = getFieldState(fieldName, formState)
  const isErrored = !!error

  return (
    <InputContainer $width={$width} $invalid={isErrored}>
      <div>
        <input {...register(fieldName)} {...rest} />
        {optional && <span className="optional-label">Opcional</span>}
      </div>

      {!!error && (
        <span className="error-message" title={String(error.message)}>
          {String(error.message)}
        </span>
      )}
    </InputContainer>
  )
}
