'use client'
import { motion } from 'framer-motion'

export default function Solution() {
  return (
    <section id="solution" className="section-padding bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center text-accent"
        >
          Sua Inteligência Artificial Exclusiva Para Seu Restaurante
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-xl text-center mb-16 text-gray-300 max-w-3xl mx-auto"
        >
          Nossa plataforma une todas as informações do seu restaurante e utiliza Inteligência Artificial e Machine Learning para gerar insights personalizados.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <SolutionItem
            icon="🔗"
            title="Integração Total"
            description="Conecte sistemas de estoque, PDV, delivery e outros."
          />
          <SolutionItem
            icon="💡"
            title="Insights Práticos"
            description="Respostas claras para melhorar sua operação e estratégia."
          />
          <SolutionItem
            icon="⚡"
            title="Ação Rápida"
            description="Reduza custos, aumente a eficiência e maximize lucros."
          />
        </div>
      </div>
    </section>
  )
}

function SolutionItem({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      whileHover={{ scale: 1.02 }}
      className="relative group h-full"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#9acd32]/20 to-[#b8d84f]/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all opacity-0 group-hover:opacity-100" />
      
      <div className="relative bg-black/40 backdrop-blur-xl p-8 rounded-2xl border border-white/10 transition-all h-full flex flex-col">
        <div className="text-4xl mb-4 bg-gradient-to-r from-[#9acd32] to-[#b8d84f] bg-clip-text text-transparent">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-4 text-white">{title}</h3>
        <p className="text-gray-400 mb-12">{description}</p>
        
        {/* Indicador de hover */}
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="text-[#b8d84f]">Saiba mais →</span>
        </div>
      </div>
    </motion.div>
  )
}
