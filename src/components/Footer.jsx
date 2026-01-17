import { motion } from 'framer-motion'
import logo from '../../logo.png'

const Footer = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer id="footer" className="bg-bg-main border-t border-gold-main/20 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Description */}
          <div>
            <img src={logo} alt="Экономизм" className="h-12 w-auto mb-4 opacity-80" />
            <p className="text-white/60 text-sm font-body leading-relaxed">
              Сообщество для личностного и финансового роста. 
              Система прокачки экономического мышления.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gold-main font-heading font-bold mb-4">Быстрые ссылки</h3>
            <ul className="space-y-2">
              {[
                { label: 'Главная', href: '#hero' },
                { label: 'О продукте', href: '#product' },
                { label: 'Цена', href: '#pricing' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection(link.href)
                    }}
                    className="text-white/70 hover:text-gold-main transition-colors duration-300 font-body text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="text-gold-main font-heading font-bold mb-4">Контакты</h3>
            <ul className="space-y-2 text-white/70 font-body text-sm">
              <li>
                <a href="mailto:info@ekonomizm.ru" className="hover:text-gold-main transition-colors duration-300">
                  Email: info@ekonomizm.ru
                </a>
              </li>
              <li>
                <a href="https://t.me/ekonomizm" target="_blank" rel="noopener noreferrer" className="hover:text-gold-main transition-colors duration-300">
                  Telegram: @ekonomizm
                </a>
              </li>
              <li>
                <a href="tel:+79991234567" className="hover:text-gold-main transition-colors duration-300">
                  Телефон: +7 (999) 123-45-67
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gold-main/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm font-body">
              © 2026 Экономизм. Все права защищены.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-white/50 hover:text-gold-main transition-colors duration-300 font-body">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-white/50 hover:text-gold-main transition-colors duration-300 font-body">
                Согласие на обработку данных
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
