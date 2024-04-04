import { ChangeEvent, useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, MoreHorizontal, Search } from 'lucide-react'
import { Checkbox } from './checkbox'
import { IconButton } from './icon-button'
import { Table, TableHeader, TableCell, TableRow } from './table'
// import { attendees } from '../data/attendees'
import { transformDateToRelativeTime } from '../utils/relativeTime'

interface IAttendees {
  id: string
  name: string;
  email: string;
  createdAt: string;
  checkedInAt: string | null;
}


export function AttendeeList() {
  const [attendees, setAttendees] = useState<IAttendees[]>([])
  const [search, setSearch] = useState(() => {
    const url = new URL(window.location.toString())
    if (url.searchParams.has('search')) return url.searchParams.get('search') ?? ''

    return ''
  })

  const [page, setPage] = useState(() => {
    const url = new URL(window.location.toString())
    if (url.searchParams.has('page')) return Number(url.searchParams.get('page'))

    return 1
  })
  const [total, setTotal] = useState(0)
  // const page = 1

  const totalPages = Math.ceil(total / 10)

  function setCurrentSearch(search: string) {
    const url = new URL(window.location.toString())
    url.searchParams.set('search', search)

    window.history.pushState({}, "", url)
    setSearch(search)
  }

  function setCurrentPage(page: number) {
    const url = new URL(window.location.toString())
    url.searchParams.set('page', String(page))

    window.history.pushState({}, "", url)
    setPage(page)
  }

  function onSearchInputChanged(event: ChangeEvent<HTMLInputElement>) {
    setCurrentSearch(event.target.value)
    setCurrentPage(1)
  }

  function goToPreviousPage() {
    setCurrentPage(page - 1)
  }

  function goToNextPage() {
    setCurrentPage(page + 1)
  }

  function goToFirstPage() {
    setCurrentPage(1)
  }

  function goToLastPage() {
    setCurrentPage(totalPages)
  }

  useEffect(() => {
    const url = new URL('http://localhost:3333/events/9e9bd979-9d10-4915-b339-3786b1634f33/attendees')
    url.searchParams.set('pageIndex', String(page - 1))
    if (search.length > 0) url.searchParams.set('query', search)

    fetch(url)
      .then(response => response.json())
      .then(data => {
        setAttendees(data.attendees)
        setTotal(data.total)
      })
  }, [page, search])

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-3 items-center">
        <h1 className="text-2xl font-bold">
          Participantes
        </h1>
        <div className="w-72 px-3 py-1.5 border border-white/10 rounded-lg text-sm flex items-center gap-3">
          <Search className="size-4 text-emerald-300" />
          <input
            className="flex-1 bg-transparent outline-none border-0 p-0 text-sm ring-0 focus:ring-0"
            placeholder="Buscar participante"
            onChange={onSearchInputChanged}
            value={search}
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
          {attendees.map((attendee) => (
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
              <TableCell>
                {attendee.checkedInAt === null
                  ? <span className="text-zinc-400">Não fez check-in</span>
                  : transformDateToRelativeTime(attendee.checkedInAt)
                }
              </TableCell>
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
            Monstrando {attendees.length} de {total} itens
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