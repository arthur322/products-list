import { BackButton } from '@/components/back-button'
import { PageTitle } from '@/components/page-title'

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <div className="flex gap-4">
        <BackButton />
        <PageTitle>Institucional</PageTitle>
      </div>
    </main>
  )
}
