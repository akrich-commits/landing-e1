import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const ProductDescription = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: 'Огромная база знаний',
      description: 'Более 15 лет опыта работы с экономикой, инвестициями, крипто и DeFi, собранные в удобную систему роста. Пошаговый путь от новичка к собственной системе.',
      points: [
        'Структурированные разделы и подразделы',
        'Практические инструменты и методики',
        'Актуальная информация без инфо-шума'
      ]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Полное понимание экономики',
      description: 'Регулярная выжимка сути из самых значимых событий в мире и ее применение в жизни. Без инфо-шума, только важное.',
      points: [
        'Анализ рынков и трендов',
        'Практическое применение знаний',
        'Регулярные обновления и разборы'
      ]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Закрытые эфиры и разборы',
      description: 'Ответы на любые вопросы, анализ ваших портфелей и сделок, прогнозы по рынкам. Прямое общение с экспертами.',
      points: [
        'Персональные консультации',
        'Разбор ваших кейсов',
        'Прогнозы и стратегии'
      ]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Готовые решения',
      description: 'Сделки, портфели, идеи, подборки вкладов, акций, облигаций, фондов. Экономим ваше время и деньги.',
      points: [
        'Готовые инвестиционные идеи',
        'Проверенные стратегии',
        'Экономия времени на анализе'
      ]
    }
  ]

  return (
    <section id="product" ref={ref} className="py-20 sm:py-24 lg:py-32 bg-bg-accent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Что вы получаете
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto font-body">
            Система для прокачки экономического мышления и навыков, направленных на достижение самореализации и результата
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-bg-main/50 p-6 sm:p-8 rounded-lg border border-gold-main/20 hover:border-gold-main/50 transition-all duration-300"
            >
              <div className="text-gold-main mb-4">{feature.icon}</div>
              <h3 className="font-heading text-2xl font-bold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-white/80 mb-4 font-body leading-relaxed">
                {feature.description}
              </p>
              <ul className="space-y-2">
                {feature.points.map((point, idx) => (
                  <li key={idx} className="flex items-start text-white/70 font-body">
                    <svg className="w-5 h-5 text-gold-main mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-bg-main/50 p-8 rounded-lg border border-gold-main/30 max-w-3xl mx-auto">
            <p className="text-white/90 text-lg font-body leading-relaxed mb-4">
              <strong className="text-gold-main">Экономизм Private</strong> — это не про рынок, это про жизнь!
            </p>
            <p className="text-white/70 font-body">
              Без инфоцыганства и сказок про лёгкие деньги. Мы не продаём обещания. Мы даём мышление.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProductDescription
