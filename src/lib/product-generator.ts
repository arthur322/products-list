import { Product } from '@/types/product'
import { faker } from '@faker-js/faker'

const PRODUCT_BRANDS = ['Devassa', 'Heineken', 'Amstel', 'Sol']
const PRODUCT_IMAGES = [
  'https://down-br.img.susercontent.com/file/br-11134207-7r98p-lmrbxal9uxvaf0',
  'https://down-br.img.susercontent.com/file/br-11134207-7r98o-ls7v17opv8l799',
  'https://griffecompany.com.br/wp-content/uploads/2019/08/bone-trucker-1028-3-270x270.png',
]

function generateProduct(): Product {
  return {
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    type: faker.commerce.department(),
    brand: faker.helpers.arrayElement(PRODUCT_BRANDS),
    price: Number.parseFloat(faker.commerce.price({ dec: 2 })),
    minQuantity: faker.number.int({ min: 1, max: 5 }),
    imageUrl: faker.helpers.arrayElement(PRODUCT_IMAGES),
  }
}

export function productGenerator(length: number) {
  return Array.from({ length }, () => generateProduct())
}
