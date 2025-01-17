'use client'
import { motion } from 'framer-motion'
import Earth from '@/components/Globe'

export default function Hero() {
  return (
    <section className="min-h-screen pt-32 flex items-center justify-center bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a] to-[#0f0f0f] overflow-hidden relative">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/4 -left-1/4 w-1/2 h-[150%] bg-gradient-to-br from-[#9acd32]/30 to-transparent rotate-[30deg] blur-3xl animate-spotlight-1"></div>
          
          <div className="absolute -top-1/4 -right-1/4 w-1/2 h-[150%] bg-gradient-to-bl from-[#b8d84f]/25 to-transparent -rotate-[30deg] blur-3xl animate-spotlight-2"></div>
          
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[150%] bg-gradient-to-b from-[#9acd32]/20 to-transparent blur-3xl animate-spotlight-3"></div>
          
          <div className="absolute top-1/4 -left-1/4 w-1/3 h-[120%] bg-gradient-to-tr from-[#9acd32]/15 to-transparent rotate-[45deg] blur-3xl animate-spotlight-4"></div>
          
          <div className="absolute top-1/4 -right-1/4 w-1/3 h-[120%] bg-gradient-to-tl from-[#b8d84f]/15 to-transparent -rotate-[45deg] blur-3xl animate-spotlight-5"></div>
          
          <div className="absolute top-1/3 left-1/3 w-24 h-24 bg-[#9acd32]/20 rounded-full blur-2xl animate-pulse-slow"></div>
          <div className="absolute top-1/4 right-1/3 w-32 h-32 bg-[#b8d84f]/20 rounded-full blur-2xl animate-pulse-slower"></div>
          <div className="absolute bottom-1/3 left-1/2 w-20 h-20 bg-[#9acd32]/20 rounded-full blur-2xl animate-pulse-slow"></div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/50 to-[#0f0f0f]/80"></div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 text-center relative z-10"
      >
        <div className="relative">
          <Earth className="absolute left-1/2 -translate-x-1/2 -top-24 opacity-40" />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-8 text-white/95 leading-tight relative z-10 px-4"
          >
            <span>Gestão de Restaurantes</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9acd32] to-[#b8d84f] block">
              Otimizada com Inteligência Artificial
            </span>
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl mb-12 text-gray-300/95 max-w-3xl mx-auto"
        >
          Experimente agora a Tecnologia Exclusiva que Vai Transformar Seu Restaurante
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center px-4"
        >
          <a
            href="https://c6843e49.sibforms.com/serve/MUIFALEQ5hV-I-eGlgb_eqqPtusFUuE-wqr1JIyw4qsdVXJJus_y9tw8zLYjaRVRSAF4pj7myTZ71-tneOIFlIZvbcNuKPPDFT8xjueWQVk9yFXSkJ90uS_xyRDyOUSiKKChG4d-XCOKgMiTL_kgDwagZoLLWqiptmxndHz9qnfBCvX8uVi-8rWLacJ110oklzNHraSCCFoznFzr"
            target="_blank"
            className="bg-gradient-to-r from-[#9acd32] to-[#b8d84f] text-black px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-all inline-block shadow-lg shadow-[#9acd32]/30"
          >
            Inscreva-se
          </a>
          <a
            href="https://calendly.com/foodatlas"
            target="_blank"
            className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all inline-block border border-white/20"
          >
            Agende uma Demo
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
