import { HeaderContainer, ActionButton } from './styles'

import { MapPin, ShoppingCart } from '@phosphor-icons/react'

import CoffeeDeliveryLogo from '../../assets/coffee-delivery-logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={CoffeeDeliveryLogo} alt="" />

      <nav>
        <ActionButton mainColor="purple" title="Local">
          <MapPin size={22} weight="fill" /> Porto Alegre, RS
        </ActionButton>

        <ActionButton mainColor="yellow" hasPill title="Carrinho">
          <ShoppingCart size={22} weight="fill" />
          <span>3</span>
        </ActionButton>
      </nav>
    </HeaderContainer>
  )
}
