import { styled, css } from 'styled-components'
import { NavLink } from 'react-router-dom'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  max-width: ${(props) => props.theme['max-width']};

  padding: 2rem;
  margin: 0 auto;

  img {
    height: 2.5rem;
  }

  nav {
    display: flex;
    gap: 0.75rem;

    min-width: 0;
  }
`

interface HeaderButtonProps {
  $color: 'purple' | 'yellow'
  $hasCounter?: boolean
  $hasText?: boolean
}

export const ActionButton = styled(NavLink)<HeaderButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  background: ${(props) => props.theme[`${props.$color}-light`]};

  padding: 0.5rem;
  border: none;
  border-radius: 6px;

  color: ${(props) => props.theme[`${props.$color}-dark`]};
  font: ${(props) => props.theme['text-s']};
  text-decoration: none;

  cursor: pointer;

  transition: color 0.1s, background-color 0.1s;

  svg {
    min-width: fit-content;
  }

  ${(props) =>
    props.$hasText &&
    css`
      gap: 0.25rem;

      overflow: hidden;

      p {
        overflow: hidden;

        white-space: nowrap;
        text-overflow: ellipsis;
      }
    `}

  ${(props) =>
    props.$hasCounter &&
    css`
      position: relative;

      span {
        position: absolute;
        top: -0.625rem;
        right: -0.625rem;

        display: flex;
        justify-content: center;
        align-items: center;

        background: ${props.theme[`${props.$color}-dark`]};
        width: 1.25rem;
        height: 1.25rem;

        border-radius: 50%;

        color: ${props.theme.white};
        font: ${(props) => props.theme['text-xs']};
      }
    `}

  &:hover {
    background: ${(props) => props.theme[props.$color]};

    &,
    svg {
      color: ${(props) => props.theme.white};
    }
  }
`
