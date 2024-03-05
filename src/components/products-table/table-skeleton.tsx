function Row() {
  return (
    <tr className="h-14 border-b border-gray-300 text-left">
      <td className="p-4">
        <div className="flex gap-3 items-center">
          <div className="h-10 w-10 bg-gray-300 rounded"></div>
          <div className="h-4 bg-gray-300 rounded w-1/3"></div>
        </div>
      </td>
      <td className="p-4">
        <div className="h-4 bg-gray-300 rounded w-1/3"></div>
      </td>
      <td className="p-4">
        <div className="h-4 bg-gray-300 rounded w-1/3"></div>
      </td>
      <td className="p-4 text-right">
        <div className="h-4 bg-gray-300 rounded w-1/4"></div>
      </td>
      <td className="p-4 text-right">
        <div className="h-4 bg-gray-300 rounded w-1/4"></div>
      </td>
      <td className="p-4 text-gray-500">
        <div className="flex justify-end items-center gap-3">
          <div className="h-4 bg-gray-300 rounded w-1/4"></div>
        </div>
      </td>
      <td className="p-4 text-right">
        <div className="h-4 bg-gray-300 rounded w-1/4"></div>
      </td>
    </tr>
  )
}

export function TableSkeleton() {
  return (
    <div className="max-h-[50vh] overflow-y-auto animate-pulse">
      <table className="w-full">
        <thead className="sticky top-0">
          <tr>
            <th className="h-12 bg-gray-200 font-normal text-gray-500 px-4 py-3 border-b border-gray-300 text-center">
              <div className="h-4 bg-gray-300 rounded w-1/4"></div>
            </th>
            <th className="h-12 bg-gray-200 font-normal text-gray-500 px-4 py-3 border-b border-gray-300 ">
              <div className="h-4 bg-gray-300 rounded w-1/4"></div>
            </th>
            <th className="h-12 bg-gray-200 font-normal text-gray-500 px-4 py-3 border-b border-gray-300 ">
              <div className="h-4 bg-gray-300 rounded w-1/4"></div>
            </th>
            <th className="h-12 bg-gray-200 font-normal text-gray-500 px-4 py-3 border-b border-gray-300 text-right">
              <div className="h-4 bg-gray-300 rounded w-1/4"></div>
            </th>
            <th className="h-12 bg-gray-200 font-normal text-gray-500 px-4 py-3 border-b border-gray-300 text-right">
              <div className="h-4 bg-gray-300 rounded w-1/4"></div>
            </th>
            <th className="h-12 bg-gray-200 font-normal text-gray-500 px-4 py-3 border-b border-gray-300 text-right">
              <div className="h-4 bg-gray-300 rounded w-1/4"></div>
            </th>
            <th className="h-12 bg-gray-200 font-normal text-gray-500 px-4 py-3 border-b border-gray-300 text-right">
              <div className="h-4 bg-gray-300 rounded w-1/4"></div>
            </th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 5 }, (_, id) => (
            <Row key={id} />
          ))}
        </tbody>
      </table>
    </div>
  )
}
