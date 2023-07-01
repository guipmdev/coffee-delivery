import { styled } from 'styled-components'

interface DifferentialProps {
  backgroundColor: string
}

export const DifferentialContainer = styled.li<DifferentialProps>`
  display: flex;
  align-items: center;

  span {
    padding: 0.5rem;
    border-radius: 50%;
    margin-right: 0.75rem;

    color: ${(props) => props.theme.white};
    line-height: 0;

    background: ${(props) => props.theme[props.backgroundColor]};
  }

  div {
    p {
      font: ${(props) => props.theme['text-m']};
    }
  }
`
