import { styled } from 'styled-components'

export const CoffeeCardContainer = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;

  position: relative;

  background: ${(props) => props.theme['base-card']};
  width: 100%;
  max-width: 256px;

  padding: 1.25rem;
  border-radius: 6px 36px;

  img {
    max-width: 120px;
    max-height: 120px;

    margin-top: calc((2.5rem) * -1);
  }

  .tags {
    display: flex;
    gap: 0.25rem;

    span {
      background: ${(props) => props.theme['yellow-light']};

      border-radius: 100px;
      padding: 0.25rem 0.5rem;

      color: ${(props) => props.theme['yellow-dark']};
      font: ${(props) => props.theme.tag};
      text-transform: uppercase;
    }
  }

  .coffee-infos {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    text-align: center;

    strong {
      color: ${(props) => props.theme['base-subtitle']};
      font: ${(props) => props.theme['title-s']};
    }

    p {
      color: ${(props) => props.theme['base-label']};
      font: ${(props) => props.theme['text-s']};
    }
  }
`

export const Buy = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  & > span {
    font: ${(props) => props.theme['text-s']};

    strong {
      font: ${(props) => props.theme['title-m']};
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    border: none;

    line-height: 0;

    cursor: pointer;

    transition: color 0.1s, background-color 0.1s;
  }

  .buy-actions {
    display: flex;
    justify-content: space-between;
    gap: 0.5rem;

    & > button {
      background: ${(props) => props.theme['purple-dark']};

      padding: 0.5rem;
      border-radius: 6px;

      color: ${(props) => props.theme.white};

      &:hover {
        background: ${(props) => props.theme.purple};
      }
    }
  }
`
