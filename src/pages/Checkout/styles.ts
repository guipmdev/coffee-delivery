import { styled } from 'styled-components'

export const CheckoutContainer = styled.main`
  display: grid;
  grid-template-columns: minmax(auto, 640px) 1fr;
  gap: 2rem;

  max-width: ${(props) => props.theme['max-width']};

  padding: 5.875rem 2rem 6.75rem;
  margin: 0 auto;

  h2 {
    color: ${(props) => props.theme['base-subtitle']};
    font: ${(props) => props.theme['title-xs']};
  }

  section {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  @media (max-width: 968px) {
    display: flex;
    flex-direction: column;
  }
`
const BaseDiv = styled.div`
  background: ${(props) => props.theme['base-card']};

  padding: 2.5rem;
  border-radius: 6px;
`

interface FormInfoProps {
  iconColor?: string
}

export const FormInfo = styled.div<FormInfoProps>`
  display: flex;
  gap: 0.5rem;

  margin-bottom: 2rem;

  h3 {
    color: ${(props) => props.theme['base-subtitle']};
    font: ${(props) => props.theme['text-m']};
  }

  p {
    color: ${(props) => props.theme['base-text']};
    font: ${(props) => props.theme['text-s']};
  }

  svg {
    color: ${(props) => props.iconColor && props.theme[props.iconColor]};

    min-width: fit-content;
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

  @media (max-width: 525px) {
    form div {
      flex-direction: column;
    }

    input {
      max-width: 100%;
    }
  }
`

interface InputProps {
  width?: number
}

export const Input = styled.input<InputProps>`
  background: ${(props) => props.theme['base-input']};
  width: 100%;
  max-width: ${(props) => props.width}px;

  padding: 0.75rem;
  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 4px;

  font: ${(props) => props.theme['text-s']};

  transition: 0.1s border;

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
    gap: 0.75rem;
  }

  @media (max-width: 758px) {
    .payment-options {
      flex-direction: column;
    }
  }
`

export const Select = styled.div`
  display: flex;

  width: 100%;

  input {
    max-width: 0;
    max-height: 0;
    visibility: hidden;
  }

  input:checked ~ label {
    background: ${(props) => props.theme['purple-light']};

    border: 1px solid ${(props) => props.theme.purple};
  }

  label {
    display: flex;
    align-items: center;

    background: ${(props) => props.theme['base-button']};
    width: 100%;

    padding: 1rem;
    border: 1px solid transparent;
    border-radius: 6px;

    font: ${(props) => props.theme['button-m']};
    line-height: initial;

    cursor: pointer;

    transition: 0.1s background-color;

    svg {
      margin-right: 0.75rem;

      color: ${(props) => props.theme.purple};
      line-height: 0;
    }

    &:hover {
      background: ${(props) => props.theme['base-hover']};
    }
  }
`

export const Summary = styled(BaseDiv)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  border-radius: 6px, 44px;

  ul {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  hr {
    background-color: ${(props) => props.theme['base-button']};
    height: 1px;

    border: 0;
  }

  & > div {
    display: flex;
    flex-direction: column;
    gap: 0.8438rem;

    p,
    strong {
      display: flex;
      justify-content: space-between;
    }

    p {
      font: ${(props) => props.theme['text-s']};

      span {
        font: ${(props) => props.theme['text-m']};
      }
    }

    strong {
      color: ${(props) => props.theme['base-subtitle']};
      font: ${(props) => props.theme['text-l-bold']};
    }
  }

  & > button {
    background: ${(props) => props.theme.yellow};

    padding: 0.75rem 0.5rem;
    border: none;
    border-radius: 6px;

    color: ${(props) => props.theme.white};
    font: ${(props) => props.theme['button-g']};

    cursor: pointer;

    transition: 0.1s background-color;

    &:hover {
      background: ${(props) => props.theme['yellow-dark']};
    }
  }
`
