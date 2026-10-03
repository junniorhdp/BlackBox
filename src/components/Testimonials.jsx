import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const TESTIMONIALS = [
  {
    stars: 5,
    text: 'Llegué sin saber nada de boxeo y hoy no me pierdo una clase. El ambiente te empuja a dar más cada día.',
    author: 'Camila R.',
    role: 'Miembro desde 2023',
  },
  {
    stars: 5,
    text: 'Los coaches corrigen cada detalle de la técnica. En pocos meses gané fuerza y confianza.',
    author: 'Juan Pablo M.',
    role: 'Clases de Fuerza',
  },
  {
    stars: 5,
    text: 'El grupo de running me ayudó a preparar mi primera media maratón. La comunidad es lo mejor.',
    author: 'Valentina G.',
    role: 'Running Club',
  },
  {
    stars: 4,
    text: 'Combinar movilidad con entrenamiento de fuerza cambió por completo cómo me siento en el día a día.',
    author: 'Diego S.',
    role: 'Entrenamiento Personalizado',
  },
]

const NAV_BUTTON_CLASS =
  'flex h-11 w-11 items-center justify-center rounded-full border border-brand-blue/40 text-xl text-brand-white transition-colors hover:bg-brand-blue disabled:opacity-40'

export default function Testimonials() {
  return (
    <section
      id="testimonios"
      className="bg-gradient-to-b from-gray-900 via-black to-gray-900 px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <p className="mb-2 text-sm font-semibold tracking-[0.3em] text-brand-blue">
            NUESTRA COMUNIDAD
          </p>
          <h2 className="text-3xl font-extrabold sm:text-5xl">Testimonios</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            autoplay={{ delay: 5000 }}
            navigation={{ prevEl: '.testimonials-prev', nextEl: '.testimonials-next' }}
            pagination={{ clickable: true }}
            slidesPerView={1}
            spaceBetween={30}
            breakpoints={{ 768: { slidesPerView: 2 } }}
            className="!pb-12"
            style={{
              '--swiper-theme-color': '#3B82F6',
              '--swiper-pagination-bullet-inactive-color': '#ffffff',
              '--swiper-pagination-bullet-inactive-opacity': '0.3',
            }}
          >
            {TESTIMONIALS.map((testimonial) => (
              <SwiperSlide key={testimonial.author} className="!h-auto">
                <figure className="flex h-full flex-col rounded-2xl border border-brand-blue/30 bg-white bg-opacity-10 p-8 backdrop-blur-md">
                  <div
                    className="mb-4 text-xl tracking-widest text-[#fbbf24]"
                    role="img"
                    aria-label={`${testimonial.stars} de 5 estrellas`}
                  >
                    {'⭐'.repeat(testimonial.stars)}
                  </div>
                  <blockquote className="mb-6 flex-1 text-lg leading-relaxed text-white/90">
                    “{testimonial.text}”
                  </blockquote>
                  <figcaption>
                    <p className="font-bold text-brand-white">{testimonial.author}</p>
                    <p className="text-sm text-brand-blue">{testimonial.role}</p>
                  </figcaption>
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="mt-4 flex justify-center gap-4">
            <button type="button" aria-label="Anterior" className={`testimonials-prev ${NAV_BUTTON_CLASS}`}>
              ‹
            </button>
            <button type="button" aria-label="Siguiente" className={`testimonials-next ${NAV_BUTTON_CLASS}`}>
              ›
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
