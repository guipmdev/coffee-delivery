import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;

  max-width: ${(props) => props.theme['max-width']};
  padding: 2rem;
  margin: 0 auto;

  img {
    height: 40px;
    width: auto;
  }

  div {
    display: flex;
    gap: 0.75rem;
  }
`

export const BaseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;

  position: relative;

  padding: 0.5rem;
  border: none;
  border-radius: 6px;

  font-size: 0.875rem;

  cursor: pointer;

  transition: color 0.1s, background-color 0.1s;

  &:hover {
    color: ${(props) => props.theme.white};

    svg {
      color: ${(props) => props.theme.white};
    }
  }
`

export const LocationButton = styled(BaseButton)`
  background: ${(props) => props.theme['purple-light']};

  color: ${(props) => props.theme['purple-dark']};

  svg {
    color: ${(props) => props.theme.purple};
  }

  &:hover {
    background: ${(props) => props.theme.purple};
  }
`

export const ShoppingCartButton = styled(BaseButton)`
  background: ${(props) => props.theme['yellow-light']};

  color: ${(props) => props.theme['yellow-dark']};
  line-height: 0;

  svg {
    color: ${(props) => props.theme.yellow};
  }

  &:hover {
    background: ${(props) => props.theme.yellow};
  }

  span {
    position: absolute;
    right: -10px;
    top: -10px;

    height: 20px;
    width: 20px;
    border-radius: 50%;

    background: ${(props) => props.theme['yellow-dark']};

    color: ${(props) => props.theme.white};
    line-height: 130%;
  }
`
