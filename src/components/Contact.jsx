import { useState } from 'react'
import { motion } from 'framer-motion'
import { AtSign, MapPin, MessageCircle } from 'lucide-react'
import LocationMap from './LocationMap.jsx'

const WHATSAPP_URL = 'https://wa.me/573218038585'

const CONTACT_CARDS = [
  {
    Icon: MessageCircle,
    title: 'WhatsApp',
    value: '+57 3218038585',
    href: WHATSAPP_URL,
  },
  {
    Icon: MapPin,
    title: 'Ubicación',
    value: 'Parque Virrey, Bogotá, Colombia',
  },
  {
    Icon: AtSign,
    title: 'Instagram',
    value: '@blackbox_hybrid',
    href: 'https://instagram.com/blackbox_hybrid',
  },
]

const INITIAL_FORM = { nombre: '', email: '', telefono: '', mensaje: '' }

const INPUT_CLASS =
  'w-full rounded-lg border border-brand-blue/40 bg-white bg-opacity-10 px-4 py-3 text-brand-white placeholder-white/50 outline-none transition-colors focus:border-brand-blue'

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const text = [
      'Hola BlackBox, quiero más información.',
      `Nombre: ${form.nombre}`,
      `Email: ${form.email}`,
      `Teléfono: ${form.telefono}`,
      `Mensaje: ${form.mensaje}`,
    ].join('\n')

    window.open(`${WHATSAPP_URL}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer')
    setForm(INITIAL_FORM)
  }

  return (
    <section id="contacto" className="bg-gradient-to-b from-gray-900 via-black to-gray-900 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="mb-2 text-sm font-semibold tracking-[0.3em] text-brand-blue">
            HABLEMOS
          </p>
          <h2 className="text-3xl font-extrabold sm:text-5xl">Contacto</h2>
        </motion.div>

        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {CONTACT_CARDS.map((card, index) => {
            const Card = card.href ? motion.a : motion.div
            const linkProps = card.href
              ? { href: card.href, target: '_blank', rel: 'noopener noreferrer' }
              : {}

            return (
              <Card
                key={card.title}
                {...linkProps}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="block rounded-2xl border border-brand-blue/30 bg-white bg-opacity-10 p-8 text-center backdrop-blur-md transition-colors hover:border-brand-blue"
              >
                <card.Icon size={36} className="mx-auto mb-4 text-brand-blue" aria-hidden="true" />
                <h3 className="mb-1 text-lg font-bold">{card.title}</h3>
                <p className="text-white/70">{card.value}</p>
              </Card>
            )
          })}
        </div>

        <div className="mb-16 w-full">
          <h3 className="mb-8 text-center text-2xl font-bold">Ubicación</h3>
          <LocationMap />
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto grid max-w-2xl grid-cols-1 gap-5 sm:grid-cols-2"
        >
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-white/80">Nombre</span>
            <input
              type="text"
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              required
              autoComplete="name"
              placeholder="Tu nombre"
              className={INPUT_CLASS}
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-medium text-white/80">Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              autoComplete="email"
              placeholder="tu@email.com"
              className={INPUT_CLASS}
            />
          </label>

          <label className="block sm:col-span-2">
            <span className="mb-2 block text-sm font-medium text-white/80">Teléfono</span>
            <input
              type="tel"
              name="telefono"
              value={form.telefono}
              onChange={handleChange}
              autoComplete="tel"
              placeholder="+57 300 000 0000"
              className={INPUT_CLASS}
            />
          </label>

          <label className="block sm:col-span-2">
            <span className="mb-2 block text-sm font-medium text-white/80">Mensaje</span>
            <textarea
              name="mensaje"
              value={form.mensaje}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Cuéntanos qué te interesa"
              className={`${INPUT_CLASS} resize-y`}
            />
          </label>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-full bg-blue-500 px-8 py-4 font-semibold text-brand-white shadow-lg shadow-blue-500/30 transition-colors hover:bg-blue-600 sm:col-span-2"
          >
            Enviar por WhatsApp
          </motion.button>
        </motion.form>
      </div>
    </section>
  )
}
