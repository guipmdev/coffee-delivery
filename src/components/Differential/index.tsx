import { DifferentialContainer } from './styles'

import { ReactNode } from 'react'

import { Icon } from '@phosphor-icons/react'

interface DifferentialProps {
  icon: Icon
  backgroundColor: string
  children: ReactNode
}

export function Differential({
  icon: CustomIcon,
  backgroundColor,
  children,
}: DifferentialProps) {
  return (
    <DifferentialContainer backgroundColor={backgroundColor}>
      <span>
        <CustomIcon size={16} weight="fill" />
      </span>
      <div>{children}</div>
    </DifferentialContainer>
  )
}
