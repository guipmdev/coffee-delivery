import { CoffeeCardContainer, Buy } from './styles'

import { ShoppingCart } from '@phosphor-icons/react'

import { QuantitySelector } from '../../../../components/QuantitySelector'
import { formatToCurrencyWithoutSymbol } from '../../../../utils/formatters'
import { Coffee, CoffeeContext } from '../../../../contexts/CoffeeContext'
import { useContext } from 'react'
import { OrderContext } from '../../../../contexts/OrderContext'
import { FormProvider, useForm } from 'react-hook-form'

import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

interface CoffeeCardProps {
  coffee: Coffee
}

const addCoffeeFormValidationSchema = zod.object({
  quantity: zod.number().min(1),
})

export type AddCoffeeFormData = zod.infer<typeof addCoffeeFormValidationSchema>

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

  return (
    <CoffeeCardContainer>
      <img src={coffee.imageURL} alt="" />

      <div className="tags">
        {foundCoffeeTags.map(
          (tag) => tag && <span key={tag.id}>{tag.name}</span>,
        )}
      </div>

      <div className="coffee-infos">
        <strong>{coffee.name}</strong>
        <p>{coffee.description}</p>
      </div>

      <Buy>
        <span>
          R$ <strong>{formatToCurrencyWithoutSymbol(coffee.price)}</strong>
        </span>

        <form
          className="buy-actions"
          onSubmit={handleSubmit(handleAddCoffeeToOrder)}
        >
          <FormProvider {...addCoffeeForm}>
            <QuantitySelector name="quantity" />
          </FormProvider>

          <button type="submit" title="Adicionar ao carrinho">
            <ShoppingCart size={22} weight="fill" />
          </button>
        </form>
      </Buy>
    </CoffeeCardContainer>
  )
}
