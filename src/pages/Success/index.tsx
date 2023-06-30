import { SuccessContainer } from './styles'

import { MapPin, Timer, CurrencyDollar } from '@phosphor-icons/react'

import MotoboyDelivery from '../../assets/motoboy-delivery.svg'

export function Success() {
  return (
    <SuccessContainer>
      <div>
        <div>
          <h1>Uhu! Pedido confirmado</h1>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </div>

        <ul>
          <li>
            <span>
              <MapPin weight="fill" />
            </span>
            <div>
              <p>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
              </p>
              <p>Farrapos - Porto Alegre, RS</p>
            </div>
          </li>

          <li>
            <span>
              <Timer weight="fill" />
            </span>
            <div>
              <p>Previsão de entrega</p>
              <p>
                <strong>20 min - 30 min</strong>
              </p>
            </div>
          </li>

          <li>
            <span>
              <CurrencyDollar />
            </span>
            <div>
              <p>Pagamento na entrega</p>
              <p>
                <strong>Cartão de Crédito</strong>
              </p>
            </div>
          </li>
        </ul>
      </div>

      <img src={MotoboyDelivery} alt="" />
    </SuccessContainer>
  )
}
