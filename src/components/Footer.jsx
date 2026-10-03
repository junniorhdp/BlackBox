import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="border-t border-blue-500/20 bg-black px-4 pb-20 pt-8 text-center text-sm text-[#666666]">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="space-y-2"
      >
        <p>© 2024 BlackBox Fitness Studio. Todos los derechos reservados.</p>
        <p>Parque Virrey, Bogotá | +57 3218038585 | www.blackbox.maistro.live</p>
      </motion.div>
    </footer>
  )
}
