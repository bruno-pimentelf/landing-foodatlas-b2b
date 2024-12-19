'use client'
import { motion } from 'framer-motion'

export default function Benefits() {
  return (
    <section id="benefits" className="section-padding bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center text-accent"
        >
          Benefícios para o Restaurante
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          <BenefitItem
            icon="💰"
            title="Redução de Custos"
            description="Identifique desperdícios e otimize recursos."
          />
          <BenefitItem
            icon="📈"
            title="Aumento de Receitas"
            description="Descubra o que mais vende e adapte seu cardápio."
          />
          <BenefitItem
            icon="🚀"
            title="Decisões Ágeis e Estratégicas"
            description="Baseie-se em dados e não apenas na intuição."
          />
        </div>
      </div>
    </section>
  )
}

function BenefitItem({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      whileHover={{ scale: 1.05 }}
      className="glass-effect p-4 sm:p-6 lg:p-8 rounded-lg text-center transition-all glow"
    >
      <div className="text-4xl sm:text-5xl mb-4 sm:mb-6">{icon}</div>
      <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-accent">{title}</h3>
      <p className="text-gray-300 text-base sm:text-lg">{description}</p>
    </motion.div>
  )
}

