import { styled } from 'styled-components'

export const CheckoutContainer = styled.main`
  display: grid;
  grid-template-columns: minmax(auto, 640px) 1fr;
  gap: 2rem;

  padding: 5.875rem 2rem 6.75rem;
  margin: 0 auto;

  max-width: ${(props) => props.theme['max-width']};

  h2 {
    font: ${(props) => props.theme['title-xs']};
    color: ${(props) => props.theme['base-subtitle']};
  }

  section {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  @media (max-width: 968px) {
    display: flex;
    flex-direction: column-reverse;
  }
`
const BaseDiv = styled.div`
  padding: 2.5rem;
  border-radius: 6px;

  background: ${(props) => props.theme['base-card']};
`

interface FormInfoProps {
  iconColor?: string
}

export const FormInfo = styled.div<FormInfoProps>`
  display: flex;
  gap: 0.5rem;

  margin-bottom: 2rem;

  h3 {
    font: ${(props) => props.theme['text-m']};
    color: ${(props) => props.theme['base-subtitle']};
  }

  p {
    font: ${(props) => props.theme['text-s']};
    color: ${(props) => props.theme['base-text']};
  }

  svg {
    color: ${(props) => props.iconColor && props.theme[props.iconColor]};
  }
`

export const Address = styled(BaseDiv)`
  form {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;

    div {
      display: flex;
      gap: 0.75rem;

      width: 100%;
    }
  }
`

interface InputProps {
  width?: number
}

export const Input = styled.input<InputProps>`
  padding: 0.75rem;
  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 4px;

  background: ${(props) => props.theme['base-input']};
  width: 100%;
  max-width: ${(props) => props.width}px;

  font: ${(props) => props.theme['text-s']};

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }

  &:focus {
    border: 1px solid ${(props) => props.theme['yellow-dark']};
  }
`

export const Payment = styled(BaseDiv)`
  .payment-options {
    display: flex;
    gap: 12px;
  }
`

export const Select = styled.div`
  display: flex;

  width: 100%;

  input {
    visibility: hidden;
    max-width: 0;
    max-height: 0;
  }

  input:checked ~ label {
    border: 1px solid ${(props) => props.theme.purple};

    background: ${(props) => props.theme['purple-light']};
  }

  label {
    display: flex;
    align-items: center;

    padding: 1rem;
    border: 1px solid transparent;
    border-radius: 6px;

    background: ${(props) => props.theme['base-button']};
    width: 100%;

    font: ${(props) => props.theme['button-m']};
    line-height: initial;

    svg {
      margin-right: 0.75rem;

      color: ${(props) => props.theme.purple};
      line-height: 0;
    }
  }
`

export const Summary = styled(BaseDiv)`
  height: 100%;

  border-radius: 6px, 44px;
`
