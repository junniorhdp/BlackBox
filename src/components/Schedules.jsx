import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const FILTERS = ['Todas', 'Boxeo', 'Fuerza', 'Yoga', 'Running']

const MAX_CAPACITY = 5

// `taken` = cupos ocupados sobre MAX_CAPACITY
const CLASSES = [
  { time: '5:00 AM', name: 'Boxeo', type: 'Boxeo', taken: 3, coach: 'Carlos' },
  { time: '6:30 AM', name: 'Upper Body', type: 'Fuerza', taken: 5, coach: 'Andrés' },
  { time: '8:00 AM', name: 'Yoga Flow', type: 'Yoga', taken: 2, coach: 'Laura' },
  { time: '10:00 AM', name: 'Running Club', type: 'Running', taken: 1, coach: 'Sofía' },
  { time: '5:00 PM', name: 'Lower Body', type: 'Fuerza', taken: 4, coach: 'Andrés' },
  { time: '6:30 PM', name: 'Boxeo Técnico', type: 'Boxeo', taken: 5, coach: 'Carlos' },
  { time: '8:00 PM', name: 'Yoga & Movilidad', type: 'Yoga', taken: 2, coach: 'Laura' },
]

function CapacityDots({ taken }) {
  const available = MAX_CAPACITY - taken
  const label = available > 0 ? `${available} de ${MAX_CAPACITY} cupos disponibles` : 'Clase llena'

  return (
    <div className="flex items-center gap-1.5" role="img" aria-label={label} title={label}>
      {Array.from({ length: MAX_CAPACITY }, (_, index) => (
        <span
          key={index}
          className={`h-3 w-3 rounded-full ${index < taken ? 'bg-red-500' : 'bg-green-500'}`}
        />
      ))}
    </div>
  )
}

export default function Schedules() {
  const [activeFilter, setActiveFilter] = useState('Todas')

  const visibleClasses =
    activeFilter === 'Todas' ? CLASSES : CLASSES.filter((item) => item.type === activeFilter)

  return (
    <section id="horarios" className="bg-brand-white px-4 py-20 text-brand-black sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <p className="mb-2 text-sm font-semibold tracking-[0.3em] text-brand-blue">
            PLANEA TU SEMANA
          </p>
          <h2 className="text-3xl font-extrabold sm:text-5xl">Horarios</h2>
        </motion.div>

        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {FILTERS.map((filter) => (
            <motion.button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-pressed={activeFilter === filter}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                activeFilter === filter
                  ? 'bg-brand-blue text-brand-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter}
            </motion.button>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="overflow-x-auto rounded-2xl border border-gray-200 shadow-lg"
        >
          <table className="w-full min-w-[640px] text-left">
            <thead className="bg-gradient-to-r from-black to-gray-800 text-sm tracking-wider text-brand-white">
              <tr>
                <th scope="col" className="px-6 py-4 font-semibold">HORA</th>
                <th scope="col" className="px-6 py-4 font-semibold">CLASE</th>
                <th scope="col" className="px-6 py-4 font-semibold">TIPO</th>
                <th scope="col" className="px-6 py-4 font-semibold">CAPACIDAD</th>
                <th scope="col" className="px-6 py-4 font-semibold">COACH</th>
              </tr>
            </thead>
            <tbody>
              <AnimatePresence mode="popLayout" initial={false}>
                {visibleClasses.map((item) => (
                  <motion.tr
                    key={`${item.time}-${item.name}`}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="border-t border-gray-200 transition-colors hover:bg-blue-50"
                  >
                    <td className="whitespace-nowrap px-6 py-4 font-bold">{item.time}</td>
                    <td className="whitespace-nowrap px-6 py-4 font-medium">{item.name}</td>
                    <td className="px-6 py-4">
                      <span className="rounded-full bg-brand-blue/10 px-3 py-1 text-xs font-semibold text-blue-700">
                        {item.type}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <CapacityDots taken={item.taken} />
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-gray-600">{item.coach}</td>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </tbody>
          </table>
        </motion.div>

        <div className="mt-5 flex justify-center gap-6 text-sm text-gray-600">
          <span className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-green-500" /> Disponible
          </span>
          <span className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-500" /> Ocupado
          </span>
        </div>
      </div>
    </section>
  )
}
