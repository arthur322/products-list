import { BackButton } from '@/components/back-button'
import { PageTitle } from '@/components/page-title'
import { Search } from '@/components/search'
import { Footer } from '@/components/footer'
import { ProductsTable } from '@/components/products-table'

type HomeProps = {
  searchParams?: { quantity: string }
}
export default function Home({ searchParams }: HomeProps) {
  return (
    <>
      <div className="container mx-auto py-10 min-h-[calc(100vh-56px)]">
        <header className="flex gap-4 mb-10">
          <BackButton />
          <PageTitle>Institucional</PageTitle>
        </header>
        <main className="">
          <div className="w-[328px] mb-4">
            <Search />
          </div>
          <ProductsTable quantity={searchParams?.quantity} />
        </main>
      </div>
      <Footer />
    </>
  )
}
