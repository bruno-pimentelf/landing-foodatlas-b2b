'use client'
import { motion } from 'framer-motion'

export default function Problem() {
  return (
    <section id="problem" className="section-padding bg-[#0f0f0f]">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center text-accent"
        >
          Desafios de Dados Desconectados
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-xl text-center mb-16 text-gray-300 max-w-3xl mx-auto"
        >
          Restaurantes lidam com diversos sistemas: ERP, delivery, estoque, PDV, e outros. Sem integração, dados valiosos ficam dispersos e subutilizados.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <ProblemItem icon="📊" title="Dados Dispersos" description="Informações importantes espalhadas em diferentes sistemas." />
          <ProblemItem icon="🕒" title="Tempo Perdido" description="Horas gastas tentando consolidar informações manualmente." />
          <ProblemItem icon="❌" title="Decisões Imprecisas" description="Falta de visão completa leva a escolhas menos eficazes." />
        </motion.div>
      </div>
    </section>
  )
}

function ProblemItem({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="glass-effect p-8 rounded-lg text-center transition-all"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-4 text-accent">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  )
}

