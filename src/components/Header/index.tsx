import { HeaderContainer, LocationButton, ShoppingCartButton } from './styles'

import { MapPin, ShoppingCart } from '@phosphor-icons/react'

import CoffeeDeliveryLogo from '../../assets/coffee-delivery-logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={CoffeeDeliveryLogo} alt="" />

      <div>
        <LocationButton title="Local">
          <MapPin size={22} weight="fill" /> Porto Alegre, RS
        </LocationButton>

        <ShoppingCartButton title="Carrinho">
          <span>3</span>
          <ShoppingCart size={22} weight="fill" />
        </ShoppingCartButton>
      </div>
    </HeaderContainer>
  )
}
