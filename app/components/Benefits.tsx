'use client'
import { motion } from 'framer-motion'
import { CostReductionIcon, RevenueIcon, DecisionIcon } from './icons'

export default function Benefits() {
  return (
    <section id="benefits" className="section-padding bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-accent"
        >
          Benefícios Tangíveis
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          <BenefitItem
            icon={<CostReductionIcon className="w-12 h-12 text-[#9acd32]" />}
            title="Redução de Custos Operacionais"
            description="Identificação precisa de desperdícios e otimização de recursos."
          />
          <BenefitItem
            icon={<RevenueIcon className="w-12 h-12 text-[#9acd32]" />}
            title="Maximização de Receita"
            description="Análises detalhadas que ajudam a priorizar itens mais lucrativos e atrativos."
          />
          <BenefitItem
            icon={<DecisionIcon className="w-12 h-12 text-[#9acd32]" />}
            title="Decisões Estratégicas Baseadas em Dados"
            description="Substitua a intuição por insights técnicos e objetivos."
          />
        </div>
      </div>
    </section>
  )
}

function BenefitItem({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
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

