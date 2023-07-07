import styled from 'styled-components'

export const SuccessContainer = styled.main`
  max-width: ${(props) => props.theme['max-width']};

  padding: 5rem 2rem 6.75rem;
  margin: 0 auto;

  h1 {
    color: ${(props) => props.theme['yellow-dark']};
    font: ${(props) => props.theme['title-l']};
  }

  h1 + p {
    margin-bottom: 2.5rem;

    color: ${(props) => props.theme['base-subtitle']};
    font: ${(props) => props.theme['regular-l']};
  }

  & > div {
    display: grid;
    grid-template-columns: minmax(auto, 526px) 1fr;
    gap: 6.375rem;

    img {
      width: 100%;
      height: 100%;
      min-width: calc(0.55 * 492px);
      max-width: 492px;

      margin: 0 auto;
    }

    ul {
      display: flex;
      flex-direction: column;
      gap: 2rem;

      background: linear-gradient(
            ${(props) => `${props.theme.background}, ${props.theme.background}`}
          )
          padding-box,
        linear-gradient(
            135deg,
            ${(props) => `${props.theme.yellow}, ${props.theme.purple}`}
          )
          border-box;
      width: 100%;
      height: fit-content;

      padding: 2.5rem;
      border: 1px solid transparent;
      border-radius: 6px 36px;
    }
  }

  @media (max-width: 768px) {
    & > div {
      display: flex;
      flex-direction: column-reverse;
    }
  }
`
