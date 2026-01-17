import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import logo from '../../logo.png'

const Testimonials = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const testimonials = [
    {
      text: 'Наконец-то нашел систему, которая работает. Без инфо-шума, только реальные инструменты.',
      author: 'Алексей М.'
    },
    {
      text: 'Сообщество профессионалов, где каждый может поделиться опытом и получить помощь.',
      author: 'Мария К.'
    },
    {
      text: 'Готовые решения экономят массу времени. Уже применил несколько идей на практике.',
      author: 'Дмитрий С.'
    }
  ]

  return (
    <section id="testimonials" ref={ref} className="py-20 sm:py-24 lg:py-32 bg-bg-accent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Отзывы участников
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-bg-main/50 p-6 rounded-lg border border-gold-main/20 hover:border-gold-main/50 transition-all duration-300"
            >
              <div className="flex items-start mb-4">
                <svg className="w-8 h-8 text-gold-main mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
                <p className="text-white/90 font-body leading-relaxed flex-1">
                  {testimonial.text}
                </p>
              </div>
              <p className="text-gold-main font-semibold font-body">
                — {testimonial.author}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Logo Carousel Placeholder */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-white/60 text-sm font-body mb-6">Нам доверяют</p>
          <div className="flex justify-center items-center">
            <img 
              src={logo} 
              alt="Экономизм" 
              className="h-16 w-auto opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
