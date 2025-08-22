import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "welcome": "Welcome to YaluBikes",
          "book_now": "Book Now",
          "enter_dashboard": "Enter Dashboard",
          "premium_bikes": "Premium Bikes",
          "bike_description": "Our fleet consists of top-quality bikes maintained to the highest standards for your safety and comfort.",
          // Add more translations as needed
        }
      },
      es: {
        translation: {
          "welcome": "Bienvenido a YaluBikes",
          "book_now": "Reservar Ahora",
          "enter_dashboard": "Entrar al Panel",
          "premium_bikes": "Bicicletas Premium",
          "bike_description": "Nuestra flota consiste en bicicletas de alta calidad mantenidas según los más altos estándares para su seguridad y comodidad.",
          // Add more translations as needed
        }
      }
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  })

export default i18n