import { styled } from 'styled-components'

export const CoffeeCardContainer = styled.li`
  display: grid;
  grid-template-columns: auto auto 1fr;
  gap: 1.25rem;

  padding: 0.5rem 0.25rem;

  img {
    width: 4rem;
  }

  strong {
    justify-self: flex-end;

    font: ${(props) => props.theme['text-m-bold']};
  }

  @media (max-width: 525px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 6rem;
    }
  }
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  span {
    margin-bottom: 0.5rem;

    color: ${(props) => props.theme['base-subtitle']};
  }

  & > div {
    display: flex;
    gap: 0.5rem;

    & > button {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.25rem;

      padding: 0.5rem;
      border-radius: 6px;

      font: ${(props) => props.theme['button-m']};

      background: ${(props) => props.theme['base-button']};

      transition: 0.1s background-color;

      svg {
        color: ${(props) => props.theme.purple};
      }

      &:hover {
        background: ${(props) => props.theme['base-hover']};
      }
    }
  }
`
