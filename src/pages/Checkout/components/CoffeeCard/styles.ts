import { styled } from 'styled-components'

export const CoffeeCardContainer = styled.li`
  display: grid;
  grid-template-columns: auto auto 1fr;
  gap: 1.25rem;
  list-style: none;

  img {
    width: 64px;
    height: auto;
  }

  .info {
    display: flex;
    flex-direction: column;

    & > span {
      color: ${(props) => props.theme['base-subtitle']};
      margin-bottom: 0.5rem;
    }

    & > div {
      display: flex;
      gap: 0.5rem;

      & > button {
        display: flex;
        justify-content: center;
        gap: 0.25rem;
        align-items: center;
        padding: 0.5rem;
        border: none;
        font: ${(props) => props.theme['button-m']};
        line-height: initial;
        background: ${(props) => props.theme['base-button']};
        border-radius: 6px;
        cursor: pointer;
        transition: 0.1s background-color;
        svg {
          color: ${(props) => props.theme.purple};
        }

        &:hover {
          background: ${(props) => props.theme['base-hover']};
        }
      }
    }
  }

  strong {
    justify-self: flex-end;
    font: ${(props) => props.theme['text-m-bold']};
  }
`
