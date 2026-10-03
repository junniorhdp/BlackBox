import { motion } from 'framer-motion'
import { TriangleAlert } from 'lucide-react'

export default function DemoBadge() {
  return (
    <motion.div
      role="note"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="pointer-events-none fixed bottom-4 right-4 z-[70] flex items-center gap-2 rounded-full bg-orange-600 px-4 py-2 text-xs font-semibold text-brand-white shadow-lg shadow-black/40 sm:text-sm"
    >
      <TriangleAlert size={16} aria-hidden="true" />
      VERSIÓN DEMO
      <span className="hidden font-normal sm:inline">- Este es un sitio de demostración</span>
    </motion.div>
  )
}
