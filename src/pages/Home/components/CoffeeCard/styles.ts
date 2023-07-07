import styled from 'styled-components'

export const CoffeeCardContainer = styled.li`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;

  background: ${(props) => props.theme['base-card']};
  width: 100%;
  max-width: 16rem;

  padding: 1.25rem;
  border-radius: 6px 36px;
  margin: 0 auto;

  img {
    max-width: 7.5rem;
    max-height: 7.5rem;

    margin-top: calc((2.5rem) * -1);
  }

  .tags {
    span {
      background: ${(props) => props.theme['yellow-light']};

      padding: 0.25rem 0.5rem;
      border-radius: 100px;

      color: ${(props) => props.theme['yellow-dark']};
      font: ${(props) => props.theme.tag};
      text-transform: uppercase;
    }

    span + span {
      margin-left: 0.25rem;
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

export const BuyInformation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  span {
    font: ${(props) => props.theme['text-s']};

    strong {
      font: ${(props) => props.theme['title-m']};
    }
  }

  form {
    display: flex;
    justify-content: space-between;
    gap: 0.5rem;

    & > button {
      display: flex;
      justify-content: center;
      align-items: center;

      background: ${(props) => props.theme['purple-dark']};

      padding: 0.5rem;
      border-radius: 6px;

      color: ${(props) => props.theme.white};

      transition: color 0.1s, background-color 0.1s;

      &:hover {
        background: ${(props) => props.theme.purple};
      }
    }
  }
`
