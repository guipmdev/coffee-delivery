import { Icon } from '@phosphor-icons/react'
import { DifferentialContainer } from './styles'

interface DifferentialProps {
  icon: Icon
  content: string
  backgroundColor: string
}

export function Differential({
  icon: CustomIcon,
  content,
  backgroundColor,
}: DifferentialProps) {
  return (
    <DifferentialContainer backgroundColor={backgroundColor}>
      <span>
        <CustomIcon size={16} weight="fill" />
      </span>
      <p>{content}</p>
    </DifferentialContainer>
  )
}
