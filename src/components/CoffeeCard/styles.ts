import { styled } from 'styled-components'

export const CoffeeCardContainer = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;

  max-width: 256px;

  position: relative;
  background: ${(props) => props.theme['base-card']};

  padding: 1.25rem;
  border-radius: 6px 36px;

  & > img {
    margin-top: calc((2.5rem) * -1);

    max-width: 120px;
    max-height: 120px;
  }

  .tags {
    display: flex;
    gap: 0.25rem;

    & > span {
      color: ${(props) => props.theme['yellow-dark']};
      font: ${(props) => props.theme.tag};

      background: ${(props) => props.theme['yellow-light']};

      border-radius: 100px;
      padding: 0.25rem 0.5rem;
    }
  }

  .coffee-infos {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    text-align: center;

    & > strong {
      color: ${(props) => props.theme['base-subtitle']};
      font: ${(props) => props.theme['title-s']};
    }

    & > p {
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

    & > strong {
      font: ${(props) => props.theme['title-m']};
    }
  }

  .buy-actions {
    display: flex;
    justify-content: space-between;
    gap: 0.5rem;
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

  .buy-actions > button {
    padding: 0.5rem;
    border-radius: 6px;

    background: ${(props) => props.theme['purple-dark']};
    color: ${(props) => props.theme.white};

    &:hover {
      background: ${(props) => props.theme.purple};
    }
  }
`

export const QuantitySelector = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;

  background: ${(props) => props.theme['base-button']};

  padding: 0.5rem;
  border-radius: 6px;

  & > span {
    padding: 0 0.25rem;

    color: ${(props) => props.theme['base-title']};
    font: ${(props) => props.theme['text-m']};
  }

  & > button {
    background: transparent;

    border: none;

    color: ${(props) => props.theme.purple};

    &:hover {
      color: ${(props) => props.theme['purple-dark']};
    }
  }
`
