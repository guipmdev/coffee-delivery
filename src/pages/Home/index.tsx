import { HomeContainer, Intro, CoffeeList } from './styles'

import { ShoppingCart, Package, Timer, Coffee } from '@phosphor-icons/react'

import { CoffeeCard } from '../../components/CoffeeCard'
import { Differential } from '../../components/Differential'

import CoffeeBanner from '../../assets/coffee-banner.svg'

export function Home() {
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
              <Differential icon={ShoppingCart} backgroundColor="yellow-dark">
                <p>Compra simples e segura</p>
              </Differential>

              <Differential icon={Package} backgroundColor="base-text">
                <p>Embalagem mantém o café intacto</p>
              </Differential>

              <Differential icon={Timer} backgroundColor="yellow">
                <p>Entrega rápida e rastreada</p>
              </Differential>

              <Differential icon={Coffee} backgroundColor="purple">
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
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
        </ul>
      </CoffeeList>
    </HomeContainer>
  )
}
