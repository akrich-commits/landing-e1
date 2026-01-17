import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Pricing = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const paymentLink = 'https://shop.cloudpayments.ru/7099cac4-4a0e-43e3-a081-4f279bd6a41b'

  const handlePaymentClick = () => {
    // Можно добавить аналитику здесь
    window.open(paymentLink, '_blank')
  }

  return (
    <section id="pricing" ref={ref} className="py-20 sm:py-24 lg:py-32 bg-bg-main relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-gold-main rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gold-main rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Цена и покупка
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto font-body">
            Присоединяйтесь к сообществу профессионалов и начните свой путь к финансовой свободе
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-gradient-to-br from-bg-accent to-bg-main border-2 border-gold-main rounded-2xl p-8 sm:p-12 shadow-2xl">
            {/* Price Card */}
            <div className="text-center mb-8">
              <div className="inline-block mb-4">
                <span className="text-white/60 text-lg font-body line-through mr-2">Старая цена</span>
                <span className="text-gold-main text-4xl sm:text-5xl font-heading font-bold">Экономизм Private</span>
              </div>
              <p className="text-white/80 text-lg font-body mb-6">
                Полный доступ ко всем возможностям сообщества
              </p>
            </div>

            {/* Features List */}
            <div className="mb-8 space-y-4">
              {[
                'База знаний (15+ лет опыта)',
                'Закрытые эфиры и разборы',
                'Готовые инвестиционные решения',
                'Финансовое планирование',
                'Сообщество профессионалов',
                'Регулярные обновления и аналитика'
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-center text-white/90 font-body"
                >
                  <svg className="w-6 h-6 text-gold-main mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* Payment Button */}
            <motion.button
              onClick={handlePaymentClick}
              className="w-full bg-gold-main text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gold-dark transition-all duration-300 shadow-lg hover:shadow-gold-main/50 flex items-center justify-center gap-3 mb-6"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Оплатить через CloudPayments
            </motion.button>

            {/* Payment Systems Logos */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-6 border-t border-gold-main/20">
              <div className="text-white/60 text-sm font-body mb-2 w-full text-center">Безопасная оплата через:</div>
              <div className="flex items-center gap-2 text-white/40 text-xs font-body">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                CloudPayments
              </div>
            </div>

            {/* Trust Badge */}
            <div className="mt-6 text-center">
              <p className="text-white/50 text-sm font-body">
                🔒 Безопасная оплата • Мгновенный доступ • Без скрытых платежей
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing
