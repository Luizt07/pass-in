import { Search } from "lucide-react"

export function EventList() {
  const event = {
    id: '9e9bd979-9d10-4915-b339-3786b1634f33',
    title: 'Unite Summit',
    details: 'Um evento p/ devs apaixonados(as) por código!',
    slug: 'unite-summit',
    maximumAttendees: 120,
    attendees: [
      {},
      {}
    ]
  }
  return (
    <>
      <div className="flex gap-3 items-center">
        <h1 className="text-2xl font-bold">
          Eventos
        </h1>
        <div className="w-72 px-3 py-1.5 border border-white/10 rounded-lg text-sm flex items-center gap-3">
          <Search className="size-4 text-emerald-300" />
          <input
            className="flex-1 bg-transparent outline-none border-0 p-0 text-sm ring-0 focus:ring-0"
            placeholder="Buscar eventos"
          // onChange={onSearchInputChanged}
          // value={search}
          />
        </div>
      </div>

      <div className="grid grid-cols-4 gap-5">
        {Array.from({ length: 5 }).map(() => (
          <div className="h-64 w-80 rounded-xl border border-white/10 px-10 py-5 hover:border-orange-400 flex flex-col justify-between transition duration-700">
            <div>
              <h1 className="font-semibold text-2xl text-orange-400 mb-2">{event.title}</h1>
              <p>{event.details}</p>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-xs">Participantes {event.attendees.length} de {event.maximumAttendees}</span>
              <button
                className="rounded-lg bg-orange-400 py-0.5 px-2 text-xs disabled:bg-orange-400/60 disabled:cursor-not-allowed"
                disabled={event.attendees.length === event.maximumAttendees}
              >
                Ver participantes
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
