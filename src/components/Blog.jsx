import { motion } from 'framer-motion'

const unsplash = (id) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=800&q=70`

const TAG_COLORS = {
  Entrenamiento: 'bg-blue-500',
  Nutrición: 'bg-green-500',
  Recuperación: 'bg-purple-500',
  Running: 'bg-orange-500',
  Mentalidad: 'bg-pink-500',
  Intensidad: 'bg-cyan-500',
}

const ARTICLES = [
  {
    photo: '1583454110551-21f2fa2afe61',
    tag: 'Entrenamiento',
    title: '5 errores comunes al empezar en boxeo',
    excerpt: 'Guardia, postura y respiración: lo que debes corregir desde tu primera clase.',
    date: '15 Sep 2026',
  },
  {
    photo: '1512621776951-a57141f2eefd',
    tag: 'Nutrición',
    title: 'Qué comer antes y después de entrenar',
    excerpt: 'Ideas simples para tener energía en la sesión y recuperarte mejor.',
    date: '8 Sep 2026',
  },
  {
    photo: '1531353826977-0941b4779a1c',
    tag: 'Recuperación',
    title: 'El descanso también es entrenamiento',
    excerpt: 'Por qué dormir bien y movilizar son claves para progresar.',
    date: '1 Sep 2026',
  },
  {
    photo: '1461896836934-ffe607ba8211',
    tag: 'Running',
    title: 'Cómo preparar tus primeros 10K',
    excerpt: 'Un plan progresivo para llegar a la meta sin lesiones.',
    date: '25 Ago 2026',
  },
  {
    photo: '1506126613408-eca07ce68773',
    tag: 'Mentalidad',
    title: 'Disciplina por encima de motivación',
    excerpt: 'Hábitos pequeños que te mantienen constante cuando no tienes ganas.',
    date: '18 Ago 2026',
  },
  {
    photo: '1574680096145-d05b474e2155',
    tag: 'Intensidad',
    title: 'HIIT: cuándo sí y cuándo no',
    excerpt: 'Cómo dosificar los entrenamientos de alta intensidad en tu semana.',
    date: '11 Ago 2026',
  },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const card = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Blog() {
  return (
    <section id="blog" className="bg-gray-50 px-4 py-20 text-brand-black sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="mb-2 text-sm font-semibold tracking-[0.3em] text-brand-blue">
            APRENDE CON NOSOTROS
          </p>
          <h2 className="text-3xl font-extrabold sm:text-5xl">Blog</h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {ARTICLES.map((article) => (
            <motion.div key={article.title} variants={card}>
              <motion.article
                whileHover={{ y: -10 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="h-full overflow-hidden rounded-lg bg-brand-white shadow transition-shadow duration-300 hover:shadow-2xl"
              >
                {/* El gradiente queda de fondo si la imagen no carga */}
                <div className="relative h-44 bg-gradient-to-br from-black via-gray-900 to-blue-900">
                  <img
                    src={unsplash(article.photo)}
                    alt=""
                    loading="lazy"
                    onError={(event) => {
                      event.currentTarget.style.display = 'none'
                    }}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <span
                    className={`mb-3 inline-block rounded-full px-3 py-1 text-xs font-semibold text-brand-white ${TAG_COLORS[article.tag]}`}
                  >
                    {article.tag}
                  </span>
                  <h3 className="mb-2 text-xl font-bold">{article.title}</h3>
                  <p className="mb-4 text-gray-600">{article.excerpt}</p>
                  <p className="text-sm text-gray-400">{article.date}</p>
                </div>
              </motion.article>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
