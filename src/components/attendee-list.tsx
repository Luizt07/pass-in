import { ChangeEvent, useState } from 'react'
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, MoreHorizontal, Search } from 'lucide-react'
import { Checkbox } from './checkbox'
import { IconButton } from './icon-button'
import { Table, TableHeader, TableCell, TableRow } from './table'
import { attendees } from '../data/attendees'
import { transformDateToRelativeTime } from '../utils/relativeTime'

export function AttendeeList() {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(attendees.length / 10)

  function onSearchInputChanged(event: ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  }

  function goToPreviousPage() {
    setPage(beforeState => beforeState - 1);
  }

  function goToNextPage() {
    setPage(beforeState => beforeState + 1);
  }
  function goToFirstPage() {
    setPage(1);
  }

  function goToLastPage() {
    setPage(totalPages);
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-3 items-center">
        <h1 className="text-2xl font-bold">
          Participantes
        </h1>
        <div className="w-72 px-3 py-1.5 border border-white/10 rounded-lg text-sm flex items-center gap-3">
          <Search className="size-4 text-emerald-300" />
          <input
            className="flex-1 bg-transparent outline-none border-0 p-0 text-sm ring-0"
            placeholder="Buscar participante"
            onChange={onSearchInputChanged}
          />
        </div>
      </div>

      <Table>
        <thead>
          <TableRow className="border-b border-white/10">
            <TableHeader style={{ width: 48 }}>
              <Checkbox />
            </TableHeader>
            <TableHeader>Código</TableHeader>
            <TableHeader>Participante</TableHeader>
            <TableHeader>Data de inscrição</TableHeader>
            <TableHeader>Data do check-in</TableHeader>
            <TableHeader style={{ width: 64 }}></TableHeader>
          </TableRow>
        </thead>

        <tbody>
          {attendees.slice((page - 1) * 10, page * 10).map((attendee) => (
            <TableRow key={`attendee-${attendee.id}`}>
              <TableCell>
                <Checkbox />
              </TableCell>
              <TableCell>{attendee.id}</TableCell>
              <TableCell>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold text-white">{attendee.name}</span>
                  <span>{attendee.email}</span>
                </div>
              </TableCell>
              <TableCell>{transformDateToRelativeTime(attendee.createdAt)}</TableCell>
              <TableCell>{transformDateToRelativeTime(attendee.checkedInAt)}</TableCell>
              <TableCell>
                <IconButton transparent>
                  <MoreHorizontal className="size-4" />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
        <tfoot>
          <TableCell className="py-3 px-4 text-sm text-zinc-300" colSpan={3}>
            Monstrando 10 de {attendees.length} itens
          </TableCell>
          <TableCell className="text-right" colSpan={3}>
            <div className="flex items-center gap-8 inline-flex">
              <span>
                Página {page} de {totalPages}
              </span>

              <div className="flex gap-1.5">
                <IconButton onClick={goToFirstPage} disabled={page == 1}>
                  <ChevronsLeft className="size-4" />
                </IconButton>
                <IconButton onClick={goToPreviousPage} disabled={page == 1}>
                  <ChevronLeft className="size-4" />
                </IconButton>
                <IconButton onClick={goToNextPage} disabled={page == totalPages}>
                  <ChevronRight className="size-4" />
                </IconButton>
                <IconButton onClick={goToLastPage} disabled={page === totalPages}>
                  <ChevronsRight className="size-4" />
                </IconButton>
              </div>
            </div>
          </TableCell>
        </tfoot>
      </Table>
    </div >
  )
}