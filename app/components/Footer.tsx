'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import logo from '@/assets/foodatlaslogo.png'

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
          <div className="text-2xl sm:text-3xl font-bold text-accent">
            <Image
              src={logo}
              alt="FoodAtlas Logo"
              width={130}
              height={20}
              className="object-contain"
            />            
          </div>
          <nav className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 text-center">
            <a href="/Termos_e_Condicoes.pdf" target="_blank" className="text-gray-300 hover-accent transition-all">Termos de Uso</a>
            <a href="/Politica_de_Privacidade.pdf" target="_blank" className="text-gray-300 hover-accent transition-all">Política de Privacidade</a> 
            <a href="mailto:contact@foodatlasbr.com" className="text-gray-300 hover-accent transition-all">Email</a>
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

