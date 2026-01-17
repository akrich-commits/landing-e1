import { motion } from 'framer-motion'
import logo from '../../logo.png'

const Hero = () => {
  const scrollToPricing = () => {
    const element = document.querySelector('#pricing')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-main via-bg-accent to-bg-main"></div>
      
      {/* Gold Accent Lines */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-1 h-32 bg-gold-main"></div>
        <div className="absolute bottom-20 right-10 w-1 h-32 bg-gold-main"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-1 bg-gold-main"></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-1 bg-gold-main"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gold-main mb-6 leading-tight"
          >
            Представляем<br />
            <span className="text-white">Экономизм Private</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 font-body font-light leading-relaxed"
          >
            Сообщество для личностного и финансового роста.<br />
            Система прокачки экономического мышления и навыков,<br />
            направленных на достижение самореализации и результата.
          </motion.p>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            onClick={scrollToPricing}
            className="inline-flex items-center gap-3 bg-gold-main text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gold-dark transition-all duration-300 shadow-lg hover:shadow-gold-main/50 mb-12"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Оплатить
          </motion.button>

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center"
          >
            <img src={logo} alt="Экономизм" className="h-16 w-auto opacity-80" />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gold-main rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-gold-main rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
