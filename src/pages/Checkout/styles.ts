import { css, styled } from 'styled-components'

export const CheckoutContainer = styled.main`
  max-width: ${(props) => props.theme['max-width']};

  padding: 5.875rem 2rem 6.75rem;
  margin: 0 auto;

  form {
    display: grid;
    grid-template-columns: minmax(auto, 640px) 1fr;
    gap: 2rem;

    h2 {
      color: ${(props) => props.theme['base-subtitle']};
      font: ${(props) => props.theme['title-xs']};
    }

    section {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }
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

  h3 {
    color: ${(props) => props.theme['base-subtitle']};
    font: ${(props) => props.theme['text-m']};
  }

  p {
    color: ${(props) => props.theme['base-text']};
    font: ${(props) => props.theme['text-s']};
  }

  svg {
    color: ${(props) => props.$iconColor && props.theme[props.$iconColor]};

    min-width: fit-content;
  }
`

export const Address = styled(BaseDiv)`
  .address-forms {
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

interface SelectProps {
  $invalid?: boolean
}

export const Select = styled.div<SelectProps>`
  display: flex;

  width: 100%;

  input[type='radio'] {
    visibility: hidden;

    position: absolute;
  }

  input[type='radio']:checked ~ label {
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

    transition: 0.1s border, 0.1s background-color;

    svg {
      margin-right: 0.75rem;

      color: ${(props) => props.theme.purple};
      line-height: 0;
    }

    &:hover {
      background: ${(props) => props.theme['base-hover']};
    }

    ${(props) =>
      props.$invalid &&
      css`
        border: 1px solid ${(props) => props.theme.red};
      `}
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
