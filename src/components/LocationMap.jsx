import { motion } from 'framer-motion'

// Embed público de Google Maps (no requiere API key), centrado en el Parque El Virrey
const MAP_URL =
  'https://www.google.com/maps?q=4.6735,-74.0545&z=16&hl=es&output=embed'

export default function LocationMap() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden rounded-xl border border-blue-500 border-opacity-30 bg-gray-900 shadow-2xl"
    >
      <iframe
        src={MAP_URL}
        title="Mapa de ubicación: Parque Virrey, Bogotá"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        className="block h-96 w-full border-0"
      />

      {/* Overlay oscuro sutil sobre el mapa */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
    </motion.div>
  )
}
