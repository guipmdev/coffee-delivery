import { styled } from 'styled-components'

export const QuantitySelectorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;

  background: ${(props) => props.theme['base-button']};

  padding: 0.5rem;
  border-radius: 6px;

  span {
    padding: 0 0.5rem;

    color: ${(props) => props.theme['base-title']};
    font: ${(props) => props.theme['text-m']};
    line-height: 0;
  }

  button {
    background: transparent;

    border: none;

    color: ${(props) => props.theme.purple};
    line-height: 0;

    cursor: pointer;

    transition: 0.1s color;

    &:hover {
      color: ${(props) => props.theme['purple-dark']};
    }
  }
`
