import { Product } from '@/types/product'
import { faker } from '@faker-js/faker'

const PRODUCT_BRANDS = ['Devassa', 'Heineken', 'Amstel', 'Sol']

function generateProduct(): Product {
  return {
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    type: faker.commerce.department(),
    brand: faker.helpers.arrayElement(PRODUCT_BRANDS),
    price: Number.parseFloat(faker.commerce.price({ dec: 2 })),
    minQuantity: faker.number.int({ min: 1, max: 5 }),
    imageUrl: faker.image.urlLoremFlickr({ category: 'item' }),
  }
}

export function productGenerator(length: number) {
  return Array.from({ length }, () => generateProduct())
}
