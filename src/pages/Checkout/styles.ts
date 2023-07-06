import { styled } from 'styled-components'

export const CheckoutContainer = styled.main`
  max-width: ${(props) => props.theme['max-width']};

  padding: 5.875rem 2rem 6.75rem;
  margin: 0 auto;

  form {
    display: grid;
    grid-template-columns: minmax(auto, 640px) 1fr;
    gap: 2rem;
  }

  section {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  h2 {
    color: ${(props) => props.theme['base-subtitle']};
    font: ${(props) => props.theme['title-xs']};
  }

  @media (max-width: 968px) {
    form {
      display: flex;
      flex-direction: column;
    }
  }
`

const BaseDiv = styled.div`
  background: ${(props) => props.theme['base-card']};

  padding: 2.5rem;
  border-radius: 6px;
`

interface FormInfoProps {
  $iconColor?: string
}

export const FormInfo = styled.div<FormInfoProps>`
  display: flex;
  gap: 0.5rem;

  margin-bottom: 2rem;

  svg {
    color: ${(props) => props.$iconColor && props.theme[props.$iconColor]};

    min-width: fit-content;
  }

  h3 {
    color: ${(props) => props.theme['base-subtitle']};
    font: ${(props) => props.theme['text-m']};
  }

  p {
    color: ${(props) => props.theme['base-text']};
    font: ${(props) => props.theme['text-s']};
  }
`

export const Address = styled(BaseDiv)`
  .address-inputs {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .input-group {
    display: flex;
    gap: 0.75rem;

    width: 100%;
  }

  @media (max-width: 525px) {
    .input-group {
      flex-direction: column;
    }
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

export const Summary = styled(BaseDiv)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  border-radius: 6px 44px;

  ul {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  hr {
    background: ${(props) => props.theme['base-button']};
    height: 1px;

    border: none;
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
    border-radius: 6px;

    color: ${(props) => props.theme.white};
    font: ${(props) => props.theme['button-g']};

    transition: 0.1s background-color;

    &:disabled {
      opacity: 0.7;

      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background: ${(props) => props.theme['yellow-dark']};
    }
  }
`
