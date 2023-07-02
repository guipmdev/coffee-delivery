import {
  CheckoutContainer,
  Address,
  Payment,
  Summary,
  Input,
  FormInfo,
  Select,
} from './styles'

import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
} from '@phosphor-icons/react'

import { CoffeeCard } from './components/CoffeeCard'

export function Checkout() {
  return (
    <CheckoutContainer>
      <section>
        <h2>Complete seu pedido</h2>

        <Address>
          <FormInfo iconColor="yellow-dark">
            <MapPinLine size={22} />
            <div>
              <h3>Endereço de Entrega</h3>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </FormInfo>

          <form>
            <Input type="text" placeholder="CEP" width={200} />
            <Input type="text" placeholder="Rua" />

            <div>
              <Input type="text" placeholder="Número" width={200} />
              <Input type="text" placeholder="Complemento" />
            </div>

            <div>
              <Input type="text" placeholder="Bairro" width={200} />
              <Input type="text" placeholder="Cidade" />
              <Input type="text" placeholder="UF" width={60} />
            </div>
          </form>
        </Address>

        <Payment>
          <FormInfo iconColor="purple">
            <CurrencyDollar size={22} />
            <div>
              <h3>Pagamento</h3>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </FormInfo>

          <div className="payment-options">
            <Select>
              <input type="radio" name="payment-method" id="credit-card" />
              <label htmlFor="credit-card">
                <CreditCard size={16} /> CARTÃO DE CRÉDITO
              </label>
            </Select>

            <Select>
              <input type="radio" name="payment-method" id="debit-card" />
              <label htmlFor="debit-card">
                <Bank size={16} /> CARTÃO DE DÉBITO
              </label>
            </Select>

            <Select>
              <input type="radio" name="payment-method" id="money" />
              <label htmlFor="money">
                <Money size={16} /> DINHEIRO
              </label>
            </Select>
          </div>
        </Payment>
      </section>

      <section>
        <h2>Cafés selecionados</h2>

        <Summary>
          <ul>
            <CoffeeCard />

            <hr />

            <CoffeeCard />
          </ul>

          <hr />

          <div>
            <p>
              Total de itens <span>R$ 29,70</span>
            </p>
            <p>
              Entrega <span>R$ 3,50</span>
            </p>
            <strong>
              Total <span>R$ 33,20</span>
            </strong>
          </div>

          <button type="submit">CONFIRMAR PEDIDO</button>
        </Summary>
      </section>
    </CheckoutContainer>
  )
}
