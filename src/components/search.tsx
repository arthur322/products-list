import { SearchIcon } from './icons'

type Props = {}
export function Search(props: Props) {
  return (
    <label className="flex gap-3 p-3 border border-gray-300 h-12">
      <SearchIcon className="text-main" />
      <input
        type="search"
        placeholder="Busque materiais..."
        className="flex-1 h-full outline-none"
      />
    </label>
  )
}
