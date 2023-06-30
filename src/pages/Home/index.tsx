import { HomeContainer, Intro, CoffeeList } from './styles'

import { ShoppingCart, Package, Timer, Coffee } from '@phosphor-icons/react'

import { CoffeeCard } from '../../components/CoffeeCard'

import CoffeeBanner from '../../assets/coffee-banner.svg'
import { Differential } from '../../components/Differential'

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
              <Differential
                icon={ShoppingCart}
                content="Compra simples e segura"
                backgroundColor="yellow-dark"
              />

              <Differential
                icon={Package}
                content="Embalagem mantém o café intacto"
                backgroundColor="base-text"
              />

              <Differential
                icon={Timer}
                content="Entrega rápida e rastreada"
                backgroundColor="yellow"
              />

              <Differential
                icon={Coffee}
                content="O café chega fresquinho até você"
                backgroundColor="purple"
              />
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
