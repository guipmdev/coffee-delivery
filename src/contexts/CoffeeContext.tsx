import { ReactNode, createContext } from 'react'

export interface CoffeeTag {
  id: string
  name: string
}

export interface Coffee {
  id: string
  imageURL: string
  tags: string[]
  name: string
  description: string
  price: number
}

interface CoffeeContextType {
  coffeeList: Coffee[]
  coffeeTags: CoffeeTag[]
}

export const CoffeeContext = createContext({} as CoffeeContextType)

interface OrderContextProps {
  children: ReactNode
}

export function CoffeeContextProvider({ children }: OrderContextProps) {
  const coffeeList: Coffee[] = [
    {
      id: '1',
      imageURL: '/src/assets/coffees/expresso.png',
      tags: ['1'],
      name: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: 9.9,
    },
    {
      id: '2',
      imageURL: '/src/assets/coffees/americano.png',
      tags: ['1'],
      name: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      price: 9.9,
    },
    {
      id: '3',
      imageURL: '/src/assets/coffees/expresso_cremoso.png',
      tags: ['1'],
      name: 'Expresso Cremoso',
      description: 'Café expresso tradicional com espuma cremosa',
      price: 9.9,
    },
    {
      id: '4',
      imageURL: '/src/assets/coffees/café_gelado.png',
      tags: ['1', '4'],
      name: 'Expresso Gelado',
      description: 'Bebida preparada com café expresso e cubos de gelo',
      price: 9.9,
    },
    {
      id: '5',
      imageURL: '/src/assets/coffees/café_com_leite.png',
      tags: ['1', '3'],
      name: 'Expresso com leite',
      description: 'Meio a meio de expresso tradicional com leite vaporizado',
      price: 9.9,
    },
    {
      id: '6',
      imageURL: '/src/assets/coffees/latte.png',
      tags: ['1', '3'],
      name: 'Latte',
      description:
        'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      price: 9.9,
    },
    {
      id: '7',
      imageURL: '/src/assets/coffees/capuccino.png',
      tags: ['1', '3'],
      name: 'Capuccino',
      description:
        'Bebida com canela feita de doses iguais de café, leite e espuma',
      price: 9.9,
    },
    {
      id: '8',
      imageURL: '/src/assets/coffees/macchiato.png',
      tags: ['1', '3'],
      name: 'Macchiato',
      description:
        'Café expresso misturado com um pouco de leite quente e espuma',
      price: 9.9,
    },
    {
      id: '9',
      imageURL: '/src/assets/coffees/mochaccino.png',
      tags: ['1', '3'],
      name: 'Mocaccino',
      description: 'Café expresso com calda de chocolate, pouco leite e espuma',
      price: 9.9,
    },
    {
      id: '10',
      imageURL: '/src/assets/coffees/chocolate_quente.png',
      tags: ['2', '3'],
      name: 'Chocolate Quente',
      description:
        'Bebida feita com chocolate dissolvido no leite quente e café',
      price: 9.9,
    },
    {
      id: '11',
      imageURL: '/src/assets/coffees/cubano.png',
      tags: ['2', '5', '4'],
      name: 'Cubano',
      description:
        'Drink gelado de café expresso com rum, creme de leite e hortelã',
      price: 9.9,
    },
    {
      id: '12',
      imageURL: '/src/assets/coffees/havaiano.png',
      tags: ['2'],
      name: 'Havaiano',
      description: 'Bebida adocicada preparada com café e leite de coco',
      price: 9.9,
    },
    {
      id: '13',
      imageURL: '/src/assets/coffees/árabe.png',
      tags: ['2'],
      name: 'Árabe',
      description: 'Bebida preparada com grãos de café árabe e especiarias',
      price: 9.9,
    },
    {
      id: '14',
      imageURL: '/src/assets/coffees/irlandês.png',
      tags: ['2', '5'],
      name: 'Irlandês',
      description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
      price: 9.9,
    },
  ]

  const coffeeTags: CoffeeTag[] = [
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

  return (
    <CoffeeContext.Provider value={{ coffeeList, coffeeTags }}>
      {children}
    </CoffeeContext.Provider>
  )
}
