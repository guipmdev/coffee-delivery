import { CoffeeCardContainer, BuyInformation } from './styles'

import { useContext } from 'react'
import { useForm, FormProvider } from 'react-hook-form'

import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { ShoppingCart } from '@phosphor-icons/react'

import { Coffee, CoffeeContext } from '../../../../contexts/CoffeeContext'
import { OrderContext } from '../../../../contexts/OrderContext'

import { formatToCurrencyWithoutSymbol } from '../../../../utils/formatters'

import { QuantitySelector } from '../../../../components/QuantitySelector'

interface CoffeeCardProps {
  coffee: Coffee
}

const addCoffeeFormValidationSchema = zod.object({
  quantity: zod.number().min(1),
})

type AddCoffeeFormData = zod.infer<typeof addCoffeeFormValidationSchema>

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const { coffeeTags } = useContext(CoffeeContext)
  const { addCoffeeToOrder } = useContext(OrderContext)

  const foundCoffeeTags = coffee.tags.map((tag) =>
    coffeeTags.find((coffeeTag) => coffeeTag.id === tag),
  )

  const addCoffeeForm = useForm<AddCoffeeFormData>({
    resolver: zodResolver(addCoffeeFormValidationSchema),
  })

  const { handleSubmit, reset } = addCoffeeForm

  function handleAddCoffeeToOrder(data: AddCoffeeFormData) {
    addCoffeeToOrder(coffee.id, data.quantity)
    reset()
  }

  const imgUrl = new URL(
    `../../../../assets/coffees/${coffee.imageURL}`,
    import.meta.url,
  ).href

  const formattedPrice = formatToCurrencyWithoutSymbol(coffee.price)

  return (
    <CoffeeCardContainer>
      <img src={imgUrl} alt={coffee.name} />

      <div className="tags">
        {foundCoffeeTags.map(
          (tag) => tag && <span key={tag.id}>{tag.name}</span>,
        )}
      </div>

      <div className="coffee-infos">
        <strong>{coffee.name}</strong>
        <p>{coffee.description}</p>
      </div>

      <BuyInformation>
        <span>
          R$ <strong>{formattedPrice}</strong>
        </span>

        <form onSubmit={handleSubmit(handleAddCoffeeToOrder)}>
          <FormProvider {...addCoffeeForm}>
            <QuantitySelector name="quantity" />

            <button type="submit" title="Adicionar ao carrinho">
              <ShoppingCart size={22} weight="fill" />
            </button>
          </FormProvider>
        </form>
      </BuyInformation>
    </CoffeeCardContainer>
  )
}
