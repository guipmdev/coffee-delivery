import { HomeContainer, Intro, CoffeeList } from './styles'

import { useContext } from 'react'

import {
  ShoppingCart,
  Package,
  Timer,
  Coffee as CoffeeIcon,
} from '@phosphor-icons/react'

import { CoffeeContext } from '../../contexts/CoffeeContext'

import { Differential } from '../../components/Differential'
import { CoffeeCard } from './components/CoffeeCard'

import CoffeeBanner from '../../assets/coffee-banner.png'

export function Home() {
  const { coffeeList } = useContext(CoffeeContext)

  return (
    <HomeContainer>
      <div className="intro-wrapper">
        <Intro>
          <div>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>

            <ul>
              <Differential icon={ShoppingCart} $circleColor="yellow-dark">
                <p>Compra simples e segura</p>
              </Differential>

              <Differential icon={Package} $circleColor="base-text">
                <p>Embalagem mantém o café intacto</p>
              </Differential>

              <Differential icon={Timer} $circleColor="yellow">
                <p>Entrega rápida e rastreada</p>
              </Differential>

              <Differential icon={CoffeeIcon} $circleColor="purple">
                <p>O café chega fresquinho até você</p>
              </Differential>
            </ul>
          </div>

          <img src={CoffeeBanner} alt="" />
        </Intro>
      </div>

      <CoffeeList>
        <h2>Nossos cafés</h2>

        <ul>
          {coffeeList.map((coffee) => (
            <CoffeeCard key={coffee.id} coffee={coffee} />
          ))}
        </ul>
      </CoffeeList>
    </HomeContainer>
  )
}
