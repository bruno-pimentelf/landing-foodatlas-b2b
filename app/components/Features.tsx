'use client'
import { motion } from 'framer-motion'
import { DataCenterIcon, AIAssistantIcon, PredictiveIcon, MonitoringIcon } from './icons'

export default function Features() {
  return (
    <section id="features" className="section-padding bg-[#0f0f0f]">
      <div className="container mx-auto px-8 md:px-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-3xl font-bold mb-12 text-center text-accent"
        >
          Principais Funcionalidades
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <FeatureItem
            icon={<DataCenterIcon className="w-16 h-16 text-[#9acd32]" />}
            title="Centralização de Dados"
            description="Integre sistemas de estoque, PDV, delivery e relatórios financeiros em uma única plataforma, eliminando redundâncias e inconsistências."
          />
          <FeatureItem
            icon={<AIAssistantIcon className="w-16 h-16 text-[#9acd32]" />}
            title="Assistente Virtual com IA"
            description="Obtenha respostas baseadas em dados para perguntas específicas, como desempenho de vendas e custos operacionais, em segundos."
          />
          <FeatureItem
            icon={<PredictiveIcon className="w-16 h-16 text-[#9acd32]" />}
            title="Análise Preditiva"
            description="Utilize algoritmos de aprendizado de máquina para prever tendências de vendas, ajustar o cardápio e identificar oportunidades de mercado."
          />
          <FeatureItem
            icon={<MonitoringIcon className="w-16 h-16 text-[#9acd32]" />}
            title="Monitoramento e Alertas"
            description="Configure notificações para eventos críticos, como ruptura de estoque ou variação anormal no desempenho de itens do menu."
          />
        </div>
      </div>
    </section>
  )
}

function FeatureItem({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl p-4 sm:p-5 rounded-xl border border-white/10 hover:border-[#9acd32]/50 transition-all duration-300"
    >
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
        <div className="text-3xl sm:text-4xl bg-[#9acd32]/10 p-3 rounded-lg">
          {icon}
        </div>
        <h3 className="text-lg sm:text-xl font-semibold text-center sm:text-left bg-clip-text text-transparent bg-gradient-to-r from-[#9acd32] to-[#b8d84f]">
          {title}
        </h3>
      </div>
      <p className="text-gray-400 text-base leading-relaxed mt-3">
        {description}
      </p>
      
      <div className="mt-4 text-[#b8d84f] opacity-0 group-hover:opacity-100 transition-opacity">
        →
      </div>
    </motion.div>
  )
}

