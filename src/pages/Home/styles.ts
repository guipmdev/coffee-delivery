import styled from 'styled-components'

import Background from '../../assets/background.svg'

export const HomeContainer = styled.main`
  .intro-wrapper {
    background: no-repeat url(${Background}) center / cover;
  }
`

export const Intro = styled.section`
  display: grid;
  grid-template-columns: minmax(auto, 588px) 1fr;
  gap: 3.5rem;

  max-width: ${(props) => props.theme['max-width']};

  padding: 5.875rem 2rem 6.75rem;
  margin: 0 auto;

  img {
    width: 100%;
    height: auto;
    min-width: calc(0.6 * 29.75rem);
    max-width: 29.75rem;

    margin: 0 auto;
  }

  h1 {
    color: ${(props) => props.theme['base-title']};
    font: ${(props) => props.theme['title-xl']};

    & + p {
      color: ${(props) => props.theme['base-subtitle']};
      font: ${(props) => props.theme['text-l']};
      font-weight: 400;

      margin: 1rem 0 4.125rem;
    }
  }

  ul {
    display: grid;
    grid-template-columns: 1fr 1.25fr;
    align-items: center;
    gap: 1.25rem 2.5rem;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }

  @media (max-width: 868px) {
    ul {
      grid-template-columns: 1fr;
    }
  }
`

export const CoffeeList = styled.section`
  max-width: ${(props) => props.theme['max-width']};

  padding: 0 2rem 9.8125rem;
  margin: 0 auto;

  h2 {
    margin-bottom: 3.375rem;

    color: ${(props) => props.theme['base-subtitle']};
    font: ${(props) => props.theme['title-l']};
  }

  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
    gap: 2.5rem 2rem;
  }
`
