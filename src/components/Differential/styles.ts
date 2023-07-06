import { styled } from 'styled-components'

interface DifferentialProps {
  $circleColor: string
}

export const DifferentialContainer = styled.li<DifferentialProps>`
  display: flex;
  align-items: center;

  span {
    background: ${(props) => props.theme[props.$circleColor]};

    padding: 0.5rem;
    border-radius: 50%;
    margin-right: 0.75rem;

    color: ${(props) => props.theme.white};
    line-height: 0;
  }

  div {
    font: ${(props) => props.theme['text-m']};
  }
`
