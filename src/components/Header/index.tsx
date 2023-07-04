import { ActionButton, HeaderContainer } from './styles'

import { NavLink } from 'react-router-dom'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'

import CoffeeDeliveryLogo from '../../assets/coffee-delivery-logo.svg'
import { OrderContext } from '../../contexts/OrderContext'
import { useContext } from 'react'

export function Header() {
  const { order } = useContext(OrderContext)

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={CoffeeDeliveryLogo} alt="" />
      </NavLink>

      <nav>
        <ActionButton to="#" $mainColor="purple" title="Local" $hasText>
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
          <span>{order.totalQuantity}</span>
        </ActionButton>
      </nav>
    </HeaderContainer>
  )
}
