import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import ReservaButton from './ReservaButton.jsx'

const WHATSAPP_URL = 'https://wa.me/573218038585'

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Horarios', href: '#horarios' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="sticky top-0 z-50 border-b border-white/10 bg-brand-black text-brand-white"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#inicio" className="text-xl font-extrabold tracking-widest">
          BLACK <span className="text-brand-blue">BOX</span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Principal">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/80 transition-colors hover:text-brand-blue"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <ReservaButton compact />
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isOpen}
            aria-controls="menu-mobile"
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="block h-0.5 w-6 bg-brand-white"
            />
            <motion.span
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block h-0.5 w-6 bg-brand-white"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="block h-0.5 w-6 bg-brand-white"
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            id="menu-mobile"
            aria-label="Móvil"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-white/10 bg-brand-black lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-4 py-4">
              {NAV_LINKS.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block rounded-lg px-3 py-3 font-medium text-white/80 transition-colors hover:bg-white/5 hover:text-brand-blue"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <li className="pt-2">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="block rounded-full bg-brand-blue px-5 py-3 text-center font-semibold text-brand-white"
                >
                  Reserva
                </a>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
