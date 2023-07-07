import styled, { css } from 'styled-components'

interface InputProps {
  $width?: number
  $invalid?: boolean
}

export const InputContainer = styled.div<InputProps>`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  width: 100%;
  ${(props) =>
    css`
      max-width: ${props.$width}px;
    `};

  & > div {
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  input {
    background: ${(props) => props.theme['base-input']};
    width: 100%;

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

    ${(props) =>
      props.$invalid &&
      css`
        border: 1px solid ${(props) => props.theme.red};
      `}
  }

  .optional-label {
    position: absolute;
    right: 0.75rem;

    color: ${(props) => props.theme['base-label']};
    font: ${(props) => props.theme['text-xs']};
    font-weight: 400;
    font-style: italic;
  }

  input:not(:placeholder-shown) ~ .optional-label {
    visibility: hidden;
  }

  .error-message {
    color: ${(props) => props.theme.red};
    font: ${(props) => props.theme['text-xs']};
    font-weight: 400;
    font-style: italic;

    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  @media (max-width: 525px) {
    max-width: 100%;
  }
`
