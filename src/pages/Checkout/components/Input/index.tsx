import { InputContainer } from './styles'

import { InputHTMLAttributes } from 'react'
import { useFormContext, FieldError } from 'react-hook-form'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  $width?: number
  errors?: FieldError
  name: string
  optional?: boolean
}

export function Input({
  $width,
  errors,
  name,
  optional,
  ...props
}: InputProps) {
  const { register } = useFormContext()

  return (
    <InputContainer $width={$width} $invalid={!!errors}>
      <div>
        <input {...register(name)} {...props} />
        {optional && <span className="optional-label">Opcional</span>}
      </div>

      {!!errors && (
        <span className="error-message" title={errors.message}>
          {errors.message}
        </span>
      )}
    </InputContainer>
  )
}
