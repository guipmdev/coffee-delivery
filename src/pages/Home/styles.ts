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
  max-width: ${(props) => props.theme['max-width']};
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3.5rem;

  padding: 5.875rem 2rem 6.75rem;

  & > img {
    width: 100%;
    max-width: 476px;
    margin: 0 auto;
  }

  h1 {
    font-family: 'baloo 2', sans-serif;
    color: ${(props) => props.theme['base-title']};
    line-height: 130%;
    font-size: 3rem;
    font-weight: 800;
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
    grid-template-columns: 1fr;
  }

  @media (max-width: 968px) {
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
    padding: 0.5rem;
    border-radius: 50%;
    margin-right: 0.75rem;
    height: 100%;

    color: ${(props) => props.theme.white};
    line-height: 0;

    background: ${(props) => props.theme[props.backgroundColor]};
  }
`
