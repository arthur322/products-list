import { BackButton } from '@/components/back-button'
import { PageTitle } from '@/components/page-title'
import { Search } from '@/components/search'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <>
      <div className="container mx-auto p-10 min-h-[calc(100vh-56px)]">
        <header className="flex gap-4 mb-10">
          <BackButton />
          <PageTitle>Institucional</PageTitle>
        </header>
        <main className="">
          <div className="w-[328px]">
            <Search />
          </div>
        </main>
      </div>
      <Footer />
    </>
  )
}
