import { Differential, HomeContainer, Intro, CoffeeList } from './styles'

import { ShoppingCart, Package, Timer, Coffee } from '@phosphor-icons/react'

import { CoffeeCard } from '../../components/CoffeeCard'

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
              <Differential backgroundColor="yellow-dark">
                <span>
                  <ShoppingCart size={16} weight="fill" />
                </span>
                <p>Compra simples e segura</p>
              </Differential>

              <Differential backgroundColor="base-text">
                <span>
                  <Package size={16} weight="fill" />
                </span>
                <p>Embalagem mantém o café intacto</p>
              </Differential>

              <Differential backgroundColor="yellow">
                <span>
                  <Timer size={16} weight="fill" />
                </span>
                <p>Entrega rápida e rastreada</p>
              </Differential>

              <Differential backgroundColor="purple">
                <span>
                  <Coffee size={16} weight="fill" />
                </span>
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
