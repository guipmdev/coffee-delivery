import { styled } from 'styled-components'

export const SuccessContainer = styled.main`
  max-width: ${(props) => props.theme['max-width']};
  margin: 0 auto;
  padding: 5rem 2rem 6.75rem;

  h1 {
    color: ${(props) => props.theme['yellow-dark']};
    font: ${(props) => props.theme['title-l']};
  }

  h1 + p {
    color: ${(props) => props.theme['base-subtitle']};
    font: ${(props) => props.theme['regular-l']};

    margin-bottom: 2.5rem;
  }

  & > div {
    display: grid;
    grid-template-columns: minmax(auto, 526px) 1fr;
    gap: 6.375rem;

    img {
      width: 100%;
      min-width: calc(0.55 * 492px);
      max-width: 492px;
      height: 100%;

      margin: 0 auto;
    }

    ul {
      display: flex;
      flex-direction: column;
      gap: 2rem;

      width: 100%;
      height: fit-content;

      padding: 2.5rem;
      border: 1px solid transparent;
      border-radius: 6px 36px;

      background: linear-gradient(
            ${(props) => `${props.theme.background}, ${props.theme.background}`}
          )
          padding-box,
        linear-gradient(
            135deg,
            ${(props) => `${props.theme.yellow}, ${props.theme.purple}`}
          )
          border-box;

      list-style: none;
    }
  }

  @media (max-width: 768px) {
    & > div {
      display: flex;
      flex-direction: column-reverse;
    }
  }
`
