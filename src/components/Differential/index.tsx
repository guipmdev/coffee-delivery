import { DifferentialContainer } from './styles'

import { ReactNode } from 'react'

import { IconProps, Icon } from '@phosphor-icons/react'

interface DifferentialProps extends IconProps {
  icon: Icon
  $circleColor: string
  children: ReactNode
}

export function Differential({
  icon: CustomIcon,
  $circleColor,
  children,
  ...rest
}: DifferentialProps) {
  return (
    <DifferentialContainer $circleColor={$circleColor}>
      <span>
        <CustomIcon size={16} weight="fill" {...rest} />
      </span>

      <div>{children}</div>
    </DifferentialContainer>
  )
}
