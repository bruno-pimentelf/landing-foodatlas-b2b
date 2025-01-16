'use client'
import { motion } from 'framer-motion'
import Earth from '@/components/Globe'

export default function About() {
  return (
    <section id="about" className="section-padding bg-[#0f0f0f]">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <Earth className="w-full h-full opacity-80" />
        </div>
        
        <div className="md:w-1/2">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold mb-6 text-accent"
          >
            Foodatlas: Plataforma de Inteligência Artificial e Analytics para Restaurantes
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg text-gray-300 mb-6"
          >
            Integre, analise e otimize todos os aspectos operacionais do seu restaurante em uma única plataforma.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg text-gray-300"
          >
            A Foodatlas centraliza os dados provenientes de sistemas como ERP, PDV, estoque e delivery, utilizando Inteligência Artificial (IA) e Machine Learning (ML) para fornecer análises detalhadas e ações baseadas em dados. Nossa tecnologia elimina a fragmentação de informações, reduz ineficiências e promove decisões mais precisas.
          </motion.p>
        </div>
      </div>
    </section>
  )
} 