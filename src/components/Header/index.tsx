import { HeaderContainer, HeaderButton } from './styles'

import { MapPin, ShoppingCart } from '@phosphor-icons/react'

import CoffeeDeliveryLogo from '../../assets/coffee-delivery-logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={CoffeeDeliveryLogo} alt="" />

      <div>
        <HeaderButton mainColor="purple" title="Local">
          <MapPin size={22} weight="fill" /> Porto Alegre, RS
        </HeaderButton>

        <HeaderButton mainColor="yellow" hasPill title="Carrinho">
          <span>3</span>
          <ShoppingCart size={22} weight="fill" />
        </HeaderButton>
      </div>
    </HeaderContainer>
  )
}
