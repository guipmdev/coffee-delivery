import { CheckoutContainer } from './styles'

import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
  Plus,
  Minus,
  Trash,
} from '@phosphor-icons/react'

import Expresso from '../../assets/expresso.svg'

export function Checkout() {
  return (
    <CheckoutContainer>
      <section>
        <h2>Complete seu pedido</h2>

        <div>
          <div>
            <div>
              <MapPinLine />
              <div>
                <p>Endereço de Entrega</p>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </div>
          </div>

          <form>
            <input type="text" placeholder="CEP" />
            <input type="text" placeholder="Rua" />

            <div>
              <input type="text" placeholder="Número" />
              <input type="text" placeholder="Complemento" />
            </div>

            <div>
              <input type="text" placeholder="Bairro" />
              <input type="text" placeholder="Cidade" />
              <input type="text" placeholder="UF" />
            </div>
          </form>
        </div>

        <div>
          <div>
            <div>
              <CurrencyDollar />
              <div>
                <p>Pagamento</p>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </div>

            <div>
              <input type="radio" name="payment-method" id="credit-card" />
              <label htmlFor="credit-card">
                <CreditCard /> CARTÃO DE CRÉDITO
              </label>

              <input type="radio" name="payment-method" id="debit-card" />
              <label htmlFor="debit-card">
                <Bank /> CARTÃO DE DÉBITO
              </label>

              <input type="radio" name="payment-method" id="money" />
              <label htmlFor="money">
                <Money />
                DINHEIRO
              </label>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2>Cafés selecionados</h2>

        <div>
          <ul>
            <li>
              <img src={Expresso} alt="" />

              <div>
                <strong>Expresso Tradicional</strong>

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

                  <button>
                    <Trash />
                    REMOVER
                  </button>
                </div>
              </div>

              <span>
                <strong>9,90</strong>
              </span>
            </li>
          </ul>

          <div>
            <p>
              Total de itens <span>R$ 29,70</span>
            </p>
            <p>
              Entrega <span>R$ 3,50</span>
            </p>
            <p>
              <strong>
                Total <span>R$ 33,20</span>
              </strong>
            </p>
          </div>

          <button>CONFIRMAR PEDIDO</button>
        </div>
      </section>
    </CheckoutContainer>
  )
}
