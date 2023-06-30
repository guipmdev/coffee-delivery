import {
  MapPin,
  ShoppingCart,
  Package,
  Timer,
  Coffee,
  Plus,
  Minus,
} from '@phosphor-icons/react'

import CoffeeDeliveryLogo from '../assets/coffee-delivery-logo.svg'
import CoffeeBanner from '../assets/coffee-banner.svg'
import Expresso from '../assets/expresso.svg'

export function Home() {
  return (
    <div>
      <header>
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
      </header>

      <main>
        <div>
          <div>
            <h2>Encontre o café perfeito para qualquer hora do dia</h2>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>

            <ul>
              <li>
                <span>
                  <ShoppingCart weight="fill" />
                </span>
                Compra simples e segura
              </li>

              <li>
                <span>
                  <Package weight="fill" />
                </span>
                Embalagem mantém o café intacto
              </li>

              <li>
                <span>
                  <Timer weight="fill" />
                </span>
                Entrega rápida e rastreada
              </li>

              <li>
                <span>
                  <Coffee weight="fill" />
                </span>
                O café chega fresquinho até você
              </li>
            </ul>
          </div>

          <img src={CoffeeBanner} alt="" />
        </div>

        <div>
          <h3>Nossos cafés</h3>

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
                    <button title="Diminuir quantidade desejada">
                      <Plus />
                    </button>
                    <span>1</span>
                    <button title="Aumentar quantidade desejada">
                      <Minus />
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
      </main>
    </div>
  )
}
