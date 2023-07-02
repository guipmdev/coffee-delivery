import { HomeContainer, Intro, CoffeeList } from './styles'

import { ShoppingCart, Package, Timer, Coffee } from '@phosphor-icons/react'

import { CoffeeCard } from './components/CoffeeCard'
import { Differential } from '../../components/Differential'

import CoffeeBanner from '../../assets/coffee-banner.png'

export interface TagType {
  id: string
  name: string
}

export const coffeeTags: TagType[] = [
  {
    id: '1',
    name: 'Tradicional',
  },
  {
    id: '2',
    name: 'Especial',
  },
  {
    id: '3',
    name: 'Com leite',
  },
  {
    id: '4',
    name: 'Gelado',
  },
  {
    id: '5',
    name: 'Alcoólico',
  },
]

export interface CoffeeType {
  id: string
  imageURL: string
  tags: string[]
  name: string
  description: string
  price: number
}

export const coffeeList: CoffeeType[] = [
  {
    id: '1',
    imageURL: './src/assets/coffees/expresso.png',
    tags: ['1'],
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
  },
  {
    id: '2',
    imageURL: './src/assets/coffees/americano.png',
    tags: ['1'],
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
  },
  {
    id: '3',
    imageURL: './src/assets/coffees/expresso_cremoso.png',
    tags: ['1'],
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
  },
  {
    id: '4',
    imageURL: './src/assets/coffees/café_gelado.png',
    tags: ['1', '4'],
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
  },
  {
    id: '5',
    imageURL: './src/assets/coffees/café_com_leite.png',
    tags: ['1', '3'],
    name: 'Expresso com leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
  },
  {
    id: '6',
    imageURL: './src/assets/coffees/latte.png',
    tags: ['1', '3'],
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
  },
  {
    id: '7',
    imageURL: './src/assets/coffees/capuccino.png',
    tags: ['1', '3'],
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
  },
  {
    id: '8',
    imageURL: './src/assets/coffees/macchiato.png',
    tags: ['1', '3'],
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
  },
  {
    id: '9',
    imageURL: './src/assets/coffees/mochaccino.png',
    tags: ['1', '3'],
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
  },
  {
    id: '10',
    imageURL: './src/assets/coffees/chocolate_quente.png',
    tags: ['2', '3'],
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
  },
  {
    id: '11',
    imageURL: './src/assets/coffees/cubano.png',
    tags: ['2', '5', '4'],
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
  },
  {
    id: '12',
    imageURL: './src/assets/coffees/havaiano.png',
    tags: ['2'],
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
  },
  {
    id: '13',
    imageURL: './src/assets/coffees/árabe.png',
    tags: ['2'],
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
  },
  {
    id: '14',
    imageURL: './src/assets/coffees/irlandês.png',
    tags: ['2', '5'],
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
  },
]

export interface OrderType {
  coffees: { id: string; quantity: number }[]
  totalQuantity: number
  totalPrice: number
}

export const order: OrderType = {
  coffees: [
    {
      id: '1',
      quantity: 1,
    },
    {
      id: '2',
      quantity: 2,
    },
    {
      id: '3',
      quantity: 3,
    },
  ],
  totalQuantity: 8,
  totalPrice: 79.2,
}

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
          {coffeeList.map((coffee) => (
            <CoffeeCard key={coffee.id} coffee={coffee} />
          ))}
        </ul>
      </CoffeeList>
    </HomeContainer>
  )
}
