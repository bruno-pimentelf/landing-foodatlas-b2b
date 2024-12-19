'use client'
import { motion } from 'framer-motion'

export default function Features() {
  return (
    <section id="features" className="section-padding bg-[#0f0f0f]">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center text-accent"
        >
          Funcionalidades-Chave
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <FeatureItem
            icon="📊"
            title="Centralização de Dados"
            description="Integre múltiplos sistemas em uma única plataforma intuitiva."
          />
          <FeatureItem
            icon="🤖"
            title="Assistente Inteligente"
            description="Faça perguntas sobre a performance do seu restaurante e receba respostas detalhadas em segundos."
          />
          <FeatureItem
            icon="📈"
            title="Análises Estratégicas"
            description="Identifique tendências de vendas, otimize o menu e melhore a experiência do cliente com recomendações baseadas em dados."
          />
          <FeatureItem
            icon="⏱️"
            title="Acompanhamento Operacional"
            description="Receba alertas e sugestões em tempo real para evitar problemas no dia a dia."
          />
        </div>
      </div>
    </section>
  )
}

function FeatureItem({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl p-8 rounded-2xl border border-white/10 hover:border-[#9acd32]/50 transition-all duration-300"
    >
      <div className="flex items-center mb-6">
        <div className="text-5xl mr-6 bg-[#9acd32]/10 p-4 rounded-xl">{icon}</div>
        <h3 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#9acd32] to-[#b8d84f]">
          {title}
        </h3>
      </div>
      <p className="text-gray-400 text-lg leading-relaxed">{description}</p>
      
      <div className="mt-6 text-[#b8d84f] opacity-0 group-hover:opacity-100 transition-opacity">
        →
      </div>
    </motion.div>
  )
}

