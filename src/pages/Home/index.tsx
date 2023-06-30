import { Differential, HomeContainer, Intro } from './styles'

import {
  ShoppingCart,
  Package,
  Timer,
  Coffee,
  Plus,
  Minus,
} from '@phosphor-icons/react'

import CoffeeBanner from '../../assets/coffee-banner.svg'
import Expresso from '../../assets/expresso.svg'

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

      <div>
        <h2>Nossos cafés</h2>

        <ul>
          <li>
            <img src={Expresso} alt="" />

            <span>TRADICIONAL</span>

            <div>
              <strong>Expresso Tradicional</strong>
              <p>O tradicional café feito com água quente e grãos moídos</p>
            </div>

            <div>
              <span>
                R$ <strong>9,90</strong>
              </span>

              <div>
                <div>
                  <button title="Aumentar quantidade desejada">
                    <Minus />
                  </button>
                  <span>1</span>
                  <button title="Diminuir quantidade desejada">
                    <Plus />
                  </button>
                </div>

                <button title="Adicionar ao carrinho">
                  <ShoppingCart />
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </HomeContainer>
  )
}
