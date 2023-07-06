import { InputContainer } from './styles'

import { InputHTMLAttributes } from 'react'
import { useFormContext } from 'react-hook-form'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  $width?: number
  name: string
  optional?: boolean
}

export function Input({ $width, name, optional, ...rest }: InputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  const fieldErrors = errors[name]
  const isErrored = !!fieldErrors

  return (
    <InputContainer $width={$width} $invalid={isErrored}>
      <div>
        <input {...register(name)} {...rest} />
        {optional && <span className="optional-label">Opcional</span>}
      </div>

      {isErrored && (
        <span className="error-message" title={String(fieldErrors.message)}>
          {String(fieldErrors.message)}
        </span>
      )}
    </InputContainer>
  )
}
