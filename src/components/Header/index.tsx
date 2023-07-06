import { HeaderContainer, ActionButton } from './styles'

import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'

import { OrderContext } from '../../contexts/OrderContext'

import CoffeeDeliveryLogo from '../../assets/coffee-delivery-logo.svg'

export function Header() {
  const { order } = useContext(OrderContext)

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={CoffeeDeliveryLogo} alt="" />
      </NavLink>

      <nav>
        <ActionButton
          to="#"
          title="Mudar região atual"
          $color="purple"
          $hasText
        >
          <MapPin size={22} weight="fill" />
          <p>Porto Alegre, RS</p>
        </ActionButton>

        <ActionButton
          to="/checkout"
          title="Carrinho"
          $color="yellow"
          $hasCounter
        >
          <ShoppingCart size={22} weight="fill" />
          <span>{order.totalQuantity}</span>
        </ActionButton>
      </nav>
    </HeaderContainer>
  )
}
