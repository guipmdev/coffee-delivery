import { styled } from 'styled-components'

import Background from '../../assets/background.svg'

export const HomeContainer = styled.main`
  .intro-wrapper {
    background: url(${Background});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }
`

export const Intro = styled.section`
  display: grid;
  grid-template-columns: auto auto;
  gap: 3.5rem;

  max-width: ${(props) => props.theme['max-width']};
  padding: 5.875rem 2rem 6.75rem;
  margin: 0 auto;

  & > img {
    width: 100%;
    min-width: 238px;
    max-width: 476px;
    margin: 0 auto;
  }

  h1 {
    font-family: 'baloo 2', sans-serif;
    color: ${(props) => props.theme['base-title']};
    font-size: 3rem;
    font-weight: 800;
    line-height: 130%;
  }

  h1 + p {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.25rem;
    line-height: 130%;

    margin: 1rem 0 4.125rem;
  }

  ul {
    display: grid;
    grid-template-columns: 1fr 1.25fr;
    gap: 1.25rem;
    align-items: center;

    list-style: none;
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

interface DifferentialProps {
  backgroundColor: string
}

export const Differential = styled.li<DifferentialProps>`
  display: flex;
  align-items: center;
  flex: 1;

  span {
    height: 100%;
    padding: 0.5rem;
    border-radius: 50%;
    margin-right: 0.75rem;

    color: ${(props) => props.theme.white};
    line-height: 0;

    background: ${(props) => props.theme[props.backgroundColor]};
  }
`
