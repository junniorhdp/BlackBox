import { motion } from 'framer-motion'
import ReservaButton from './ReservaButton.jsx'

const FLOATING_SHAPES = [
  { className: 'left-[8%] top-[18%] h-24 w-24 rounded-full bg-brand-blue/20 blur-xl', duration: 6, delay: 0 },
  { className: 'right-[10%] top-[25%] h-40 w-40 rounded-full bg-blue-400/10 blur-2xl', duration: 8, delay: 1 },
  { className: 'bottom-[20%] left-[18%] h-32 w-32 rounded-3xl border border-brand-blue/30', duration: 7, delay: 0.5 },
  { className: 'bottom-[12%] right-[20%] h-16 w-16 rounded-full border border-white/20', duration: 5, delay: 1.5 },
  { className: 'left-[45%] top-[10%] h-10 w-10 rounded-lg bg-white/5', duration: 9, delay: 2 },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-blue-900 px-4 py-24 sm:px-6"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {FLOATING_SHAPES.map((shape, index) => (
          <motion.div
            key={index}
            className={`absolute ${shape.className}`}
            animate={{ y: [0, -30, 0], rotate: [0, 8, 0] }}
            transition={{
              duration: shape.duration,
              delay: shape.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto max-w-4xl text-center"
      >
        <motion.p
          variants={item}
          className="mb-4 text-sm font-semibold tracking-[0.4em] text-brand-blue sm:text-base"
        >
          BIENVENIDO A
        </motion.p>

        <motion.p
          variants={item}
          className="mb-6 text-2xl font-extrabold tracking-[0.3em] text-brand-white sm:text-3xl"
        >
          BLACK BOX
        </motion.p>

        <motion.h1
          variants={item}
          className="text-4xl font-extrabold leading-tight text-brand-white sm:text-6xl lg:text-7xl"
        >
          Transforma Tu Cuerpo y <span className="text-brand-blue">Tu Mente</span>
        </motion.h1>

        <motion.p variants={item} className="mt-6 text-base text-white/70 sm:text-xl">
          Boxeo | Fuerza | Running | Movilidad | Comunidad
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <ReservaButton className="w-full sm:w-auto" />
          <motion.a
            href="#servicios"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full rounded-full border-2 border-brand-blue px-8 py-2.5 text-lg font-bold text-brand-white transition-colors hover:bg-brand-blue/10 sm:w-auto"
          >
            Conoce más
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}
