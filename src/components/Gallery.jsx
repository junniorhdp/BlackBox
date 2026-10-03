import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'

const unsplash = (id, width) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&q=70`

// El gradiente queda de fondo y sirve de fallback si la imagen no carga
const ITEMS = [
  { title: 'Boxeo', photo: '1549719386-74dfcbf7dbed', gradient: 'from-red-600 to-orange-500' },
  { title: 'Fuerza', photo: '1517836357463-d25dfeac3438', gradient: 'from-blue-700 to-blue-400' },
  { title: 'Yoga', photo: '1544367567-0f2fcb009e0b', gradient: 'from-purple-700 to-pink-500' },
  { title: 'Running', photo: '1552674605-db6ffd4facb5', gradient: 'from-emerald-600 to-teal-400' },
  { title: 'Entrenamiento', photo: '1599058917212-d750089bc07e', gradient: 'from-gray-900 to-blue-800' },
  { title: 'Comunidad', photo: '1529156069898-49953e39b3ac', gradient: 'from-amber-500 to-rose-500' },
]

const hideBrokenImage = (event) => {
  event.currentTarget.style.display = 'none'
}

export default function Gallery() {
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    if (!selected) return

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setSelected(null)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selected])

  return (
    <section id="galeria" className="bg-gray-100 px-4 py-20 text-brand-black sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="mb-2 text-sm font-semibold tracking-[0.3em] text-brand-blue">
            NUESTROS ESPACIOS
          </p>
          <h2 className="text-3xl font-extrabold sm:text-5xl">Galería</h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.button
                type="button"
                onClick={() => setSelected(item)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                aria-label={`Ver ${item.title}`}
                className={`group relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br ${item.gradient} shadow-lg`}
              >
                <img
                  src={unsplash(item.photo, 800)}
                  alt=""
                  loading="lazy"
                  onError={hideBrokenImage}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <span className="absolute inset-0 bg-black/30 transition-colors duration-300 group-hover:bg-black/60" />
                <span className="relative text-2xl font-extrabold tracking-wide text-brand-white drop-shadow-lg sm:text-3xl">
                  {item.title}
                </span>
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4"
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={selected.title}
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 260, damping: 24 }}
              onClick={(event) => event.stopPropagation()}
              className={`relative flex aspect-[4/3] w-full max-w-3xl items-end overflow-hidden rounded-3xl bg-gradient-to-br ${selected.gradient} shadow-2xl`}
            >
              <img
                src={unsplash(selected.photo, 1400)}
                alt={selected.title}
                onError={hideBrokenImage}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="relative w-full bg-gradient-to-t from-black/80 to-transparent p-6 pt-16">
                <h3 className="text-2xl font-extrabold text-brand-white sm:text-4xl">
                  {selected.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelected(null)}
                aria-label="Cerrar"
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-brand-white transition-colors hover:bg-black/70"
              >
                <X size={20} aria-hidden="true" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
