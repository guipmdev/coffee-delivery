import { NavLink } from 'react-router-dom'
import { styled, css } from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  max-width: ${(props) => props.theme['max-width']};

  padding: 2rem;
  margin: 0 auto;

  img {
    height: 40px;
  }

  nav {
    display: flex;
    gap: 0.75rem;

    min-width: 0px;
  }

  & > a {
    text-decoration: none;
    line-height: 0;
  }
`

interface HeaderButtonProps {
  mainColor: 'purple' | 'yellow'
  hasPill?: boolean
  hasText?: boolean
}

export const ActionButton = styled(NavLink)<HeaderButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  background: ${(props) => props.theme[`${props.mainColor}-light`]};

  padding: 0.5rem;
  border: none;
  border-radius: 6px;

  color: ${(props) => props.theme[`${props.mainColor}-dark`]};
  font: ${(props) => props.theme['text-s']};
  text-decoration: none;

  cursor: pointer;

  transition: color 0.1s, background-color 0.1s;

  ${(props) =>
    props.hasText &&
    css`
      justify-content: flex-start;
      gap: 0.25rem;

      overflow: hidden;

      span {
        overflow: hidden;

        line-height: initial;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    `}

  svg {
    min-width: fit-content;
  }

  &:hover {
    background: ${(props) => props.theme[props.mainColor]};

    &,
    svg {
      color: ${(props) => props.theme.white};
    }
  }

  ${(props) =>
    props.hasPill &&
    css`
      position: relative;

      span {
        display: flex;
        justify-content: center;
        align-items: center;

        position: absolute;
        right: -0.625rem;
        top: -0.625rem;

        background: ${props.theme[`${props.mainColor}-dark`]};
        width: 1.25rem;
        height: 1.25rem;

        border-radius: 50%;

        color: ${props.theme.white};
        font: ${(props) => props.theme['text-xs']};
        line-height: 0;
      }
    `}
`
