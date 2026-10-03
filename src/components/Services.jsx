import { motion } from 'framer-motion'
import { Dumbbell, Footprints, PersonStanding, Swords, Target, Users } from 'lucide-react'

const SERVICES = [
  {
    Icon: Swords,
    title: 'Boxeo',
    description: 'Técnica, cardio y potencia en clases para todos los niveles.',
  },
  {
    Icon: Dumbbell,
    title: 'Fuerza',
    description: 'Entrenamiento con pesas para ganar músculo y resistencia.',
  },
  {
    Icon: PersonStanding,
    title: 'Movilidad',
    description: 'Mejora tu rango de movimiento y previene lesiones.',
  },
  {
    Icon: Footprints,
    title: 'Running',
    description: 'Sesiones guiadas para correr más lejos y más rápido.',
  },
  {
    Icon: Target,
    title: 'Personalizados',
    description: 'Planes uno a uno diseñados según tus objetivos.',
  },
  {
    Icon: Users,
    title: 'Comunidad',
    description: 'Entrena acompañado y motivado por un equipo que te impulsa.',
  },
]

export default function Services() {
  return (
    <section id="servicios" className="bg-gray-50 px-4 py-20 text-brand-black sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="mb-2 text-sm font-semibold tracking-[0.3em] text-brand-blue">
            LO QUE OFRECEMOS
          </p>
          <h2 className="text-3xl font-extrabold sm:text-5xl">Nuestros Servicios</h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ Icon, title, description }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="h-full rounded-2xl border-2 border-gray-200 bg-brand-white p-8 transition-[border-color,box-shadow] duration-300 hover:border-brand-blue hover:shadow-xl hover:shadow-blue-500/10"
              >
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-blue to-blue-900 shadow-lg shadow-blue-500/30">
                  <Icon size={32} className="text-brand-white" aria-hidden="true" />
                </div>
                <h3 className="mb-2 text-xl font-bold">{title}</h3>
                <p className="text-gray-600">{description}</p>
              </motion.div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
