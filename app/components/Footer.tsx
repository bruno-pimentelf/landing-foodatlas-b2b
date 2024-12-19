'use client'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] py-8 sm:py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0"
        >
          <div className="text-2xl sm:text-3xl font-bold text-accent">FoodAtlas</div>
          <nav className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 text-center">
            <a href="#" className="text-gray-300 hover-accent transition-all">Termos de Uso</a>
            <a href="#" className="text-gray-300 hover-accent transition-all">Política de Privacidade</a>
            <a href="#" className="text-gray-300 hover-accent transition-all">Contato</a>
          </nav>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-center mt-12 text-gray-400"
        >
          © {new Date().getFullYear()} FoodAtlas. Todos os direitos reservados.
        </motion.div>
      </div>
    </footer>
  )
}

