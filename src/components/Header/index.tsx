import { HeaderContainer } from './styles'

import { MapPin, ShoppingCart } from '@phosphor-icons/react'

import CoffeeDeliveryLogo from '../../assets/coffee-delivery-logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={CoffeeDeliveryLogo} alt="" />

      <div>
        <button title="Local">
          <MapPin weight="fill" /> Porto Alegre, RS
        </button>

        <button title="Carrinho">
          <span>3</span>
          <ShoppingCart weight="fill" />
        </button>
      </div>
    </HeaderContainer>
  )
}
