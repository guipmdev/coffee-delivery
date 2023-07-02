import { DifferentialContainer } from './styles'

import { ReactNode } from 'react'

import { Icon, IconProps } from '@phosphor-icons/react'

interface DifferentialProps extends IconProps {
  icon: Icon
  backgroundColor: string
  children: ReactNode
}

export function Differential({
  icon: CustomIcon,
  backgroundColor,
  children,
  ...props
}: DifferentialProps) {
  return (
    <DifferentialContainer $backgroundColor={backgroundColor}>
      <span>
        <CustomIcon size={16} weight="fill" {...props} />
      </span>
      <div>{children}</div>
    </DifferentialContainer>
  )
}
