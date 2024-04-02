import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, MoreHorizontal, Search } from 'lucide-react'

export function AttendeeList() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-3 items-center">
        <h1 className="text-2xl font-bold">
          Participantes
        </h1>
        <div className="w-72 px-3 py-1.5 border border-white/10 rounded-lg text-sm flex items-center gap-3">
          <Search className="size-4 text-emerald-300" />
          <input className="flex-1 bg-transparent outline-none border-0 p-0 text-sm ring-0" placeholder="Buscar participante" />
        </div>
      </div>

      <div className=" border border-white/10 rounded-lg">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th style={{ width: 48 }} className="py-3 px-4 text-sm font-semibold text-left">
                <input type="checkbox" className="size-4 bg-black/20 rounded border border-white/10 focus:border-raisin focus:ring-black/20 text-orange-400 focus-visible:outline-none focus:ring-offset-0" />
              </th>
              <th className="py-3 px-4 text-sm font-semibold text-left">Código</th>
              <th className="py-3 px-4 text-sm font-semibold text-left">Participante</th>
              <th className="py-3 px-4 text-sm font-semibold text-left">Data de inscrição</th>
              <th className="py-3 px-4 text-sm font-semibold text-left">Data do check-in</th>
              <th style={{ width: 64 }} className="py-3 px-4 text-sm font-semibold text-left"></th>
            </tr>
          </thead>

          <tbody>
            {Array.from({ length: 8 }).map((_, index) => (
              <tr key={index} className="border-b border-white/10">
                <td className="py-3 px-4 text-sm text-zinc-300">
                  <input type="checkbox" className="size-4 bg-black/20 rounded border border-white/10 focus:border-raisin focus:ring-black/20 text-orange-400 focus:ring-offset-0" />
                </td>
                <td className="py-3 px-4 text-sm text-zinc-300">12345</td>
                <td className="py-3 px-4 text-sm text-zinc-300">
                  <div className="flex flex-col gap-1">
                    <span className="font-semibold text-white">Luiz Eduardo</span>
                    <span>luiz_1609@hotmail.com</span>
                  </div>
                </td>
                <td className="py-3 px-4 text-sm text-zinc-300">7 dias atras</td>
                <td className="py-3 px-4 text-sm text-zinc-300">3 dias atras</td>
                <td className="py-3 px-4 text-sm text-zinc-300">
                  <button className="bg-black/20 border border-white/10 rounded-md p-1.5">
                    <MoreHorizontal className="size-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <td className="py-3 px-4 text-sm text-zinc-300" colSpan={3}>
              Monstrando 10 de 128 itens
            </td>
            <td className="py-3 px-4 text-sm text-zinc-300 text-right" colSpan={3}>
              <div className="flex items-center gap-8 inline-flex">
                <span>
                  Página 1 de 23
                </span>

                <div className="flex gap-1.5">
                  <button className="bg-white/10 border border-white/10 rounded-md p-1.5">
                    <ChevronsLeft className="size-4" />
                  </button>
                  <button className="bg-white/10 border border-white/10 rounded-md p-1.5">
                    <ChevronLeft className="size-4" />
                  </button>
                  <button className="bg-white/10 border border-white/10 rounded-md p-1.5">
                    <ChevronRight className="size-4" />
                  </button>
                  <button className="bg-white/10 border border-white/10 rounded-md p-1.5">
                    <ChevronsRight className="size-4" />
                  </button>
                </div>
              </div>
            </td>
          </tfoot>
        </table>
      </div>
    </div>
  )
}