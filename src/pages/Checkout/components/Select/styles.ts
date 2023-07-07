import styled, { css } from 'styled-components'

interface SelectProps {
  $invalid?: boolean
}

export const SelectContainer = styled.div<SelectProps>`
  display: flex;

  width: 100%;

  input {
    visibility: hidden;

    position: absolute;
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

    transition: 0.1s border, 0.1s background-color;

    svg {
      margin-right: 0.75rem;

      color: ${(props) => props.theme.purple};
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
