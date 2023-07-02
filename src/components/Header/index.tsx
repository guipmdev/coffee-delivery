import { ActionButton, HeaderContainer } from './styles'

import { MapPin, ShoppingCart } from '@phosphor-icons/react'

import CoffeeDeliveryLogo from '../../assets/coffee-delivery-logo.svg'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={CoffeeDeliveryLogo} alt="" />
      </NavLink>

      <nav>
        <ActionButton to="" $mainColor="purple" title="Local" $hasText>
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </ActionButton>

        <ActionButton
          to="/checkout"
          $mainColor="yellow"
          title="Carrinho"
          $hasPill
        >
          <ShoppingCart size={22} weight="fill" />
          <span>3</span>
        </ActionButton>
      </nav>
    </HeaderContainer>
  )
}
