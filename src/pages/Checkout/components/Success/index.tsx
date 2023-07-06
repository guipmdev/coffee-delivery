import { SuccessContainer } from './styles'

import { MapPin, Timer, CurrencyDollar } from '@phosphor-icons/react'

import { Differential } from '../../../../components/Differential'

import MotoboyDelivery from '../../../../assets/motoboy-delivery.svg'

export function Success() {
  return (
    <SuccessContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>

      <div>
        <ul>
          <Differential icon={MapPin} $circleColor="purple">
            <p>
              Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
            </p>
            <p>Farrapos - Porto Alegre, RS</p>
          </Differential>

          <Differential icon={Timer} $circleColor="yellow">
            <p>Previsão de entrega</p>
            <p>
              <strong>20 min - 30 min</strong>
            </p>
          </Differential>

          <Differential
            icon={CurrencyDollar}
            $circleColor="yellow-dark"
            weight="regular"
          >
            <p>Pagamento na entrega</p>
            <p>
              <strong>Cartão de Crédito</strong>
            </p>
          </Differential>
        </ul>

        <img src={MotoboyDelivery} alt="" />
      </div>
    </SuccessContainer>
  )
}
