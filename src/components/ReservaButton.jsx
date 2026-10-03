import { MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'

const WHATSAPP_URL = 'https://wa.me/573218038585'

export default function ReservaButton({ className = '', compact = false }) {
  const sizeClass = compact ? 'px-5 py-2 text-sm' : 'px-8 py-3 text-lg'

  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`group relative inline-flex items-center justify-center rounded-full font-bold text-white shadow-lg shadow-blue-900/50 transition-shadow duration-300 hover:shadow-[0_0_28px_rgba(59,130,246,0.75)] ${sizeClass} ${className}`}
    >
      {/* Las capas de efectos se recortan aquí para que el glow exterior (sombra del <a>) no se corte */}
      <span className="absolute inset-0 overflow-hidden rounded-full" aria-hidden="true">
        {/* Fondo gradiente animado */}
        <motion.span
          className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-700 to-blue-500 bg-[length:200%_100%]"
          animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Glow interior */}
        <motion.span
          className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-75"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        {/* Shimmer */}
        <motion.span
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20"
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 1 }}
        />

        {/* Borde animado */}
        <motion.span
          className="absolute inset-0 rounded-full border-2 border-transparent"
          animate={{
            borderColor: [
              'rgba(147, 197, 253, 0)',
              'rgba(147, 197, 253, 0.6)',
              'rgba(147, 197, 253, 0)',
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </span>

      <span className="relative z-10 flex items-center gap-2 whitespace-nowrap">
        <motion.span
          className="flex"
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 1 }}
        >
          <MessageCircle size={compact ? 18 : 22} aria-hidden="true" />
        </motion.span>
        Reserva Ahora
      </span>
    </motion.a>
  )
}
