import { styled } from 'styled-components'

export const QuantitySelectorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;

  background: ${(props) => props.theme['base-button']};

  padding: 0.5rem;
  border-radius: 6px;

  button {
    color: ${(props) => props.theme.purple};
    line-height: 0;

    transition: 0.1s color;

    &:hover {
      color: ${(props) => props.theme['purple-dark']};
    }
  }

  input {
    text-align: center;

    width: 1.25rem;

    color: ${(props) => props.theme['base-title']};
    font: ${(props) => props.theme['text-m']};
    line-height: initial;

    appearance: textfield;
    -moz-appearance: textfield;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      margin: 0;

      -webkit-appearance: none;
    }
  }
`
