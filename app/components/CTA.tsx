'use client'
import { motion } from 'framer-motion'
import * as gtag from '@/lib/gtag'

export default function CTA() {
  return (
    <section id="cta" className="section-padding bg-[#0f0f0f]">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#9acd32] to-[#b8d84f] px-4"
        >
          Por Que a Foodatlas?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg text-center mb-12 text-gray-300 max-w-3xl mx-auto"
        >
          Enquanto a maioria dos restaurantes opera com dados fragmentados e inconsistentes, a Foodatlas oferece um ambiente unificado para gestão e análise. Nossa tecnologia capacita gestores a identificar gargalos, otimizar recursos e aprimorar a experiência do cliente com base em evidências concretas.
          <br /><br />
          Participe da fase beta e transforme sua operação com o que há de mais avançado em tecnologia para restaurantes.
          <br />
          <span className="font-semibold text-[#b8d84f]">Vagas limitadas – garanta seu acesso exclusivo agora!</span>
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="max-w-md mx-auto px-4 sm:px-0"
        >
          <a
            href="https://c6843e49.sibforms.com/serve/MUIFALEQ5hV-I-eGlgb_eqqPtusFUuE-wqr1JIyw4qsdVXJJus_y9tw8zLYjaRVRSAF4pj7myTZ71-tneOIFlIZvbcNuKPPDFT8xjueWQVk9yFXSkJ90uS_xyRDyOUSiKKChG4d-XCOKgMiTL_kgDwagZoLLWqiptmxndHz9qnfBCvX8uVi-8rWLacJ110oklzNHraSCCFoznFzr"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              gtag.event({
                action: 'click',
                category: 'conversion',
                label: 'cta_button',
                value: 1
              })
            }}
            className="block w-full px-8 py-4 bg-gradient-to-r from-[#9acd32] to-[#b8d84f] text-black rounded-xl font-semibold hover:opacity-90 transition-all shadow-lg shadow-[#9acd32]/30 hover:shadow-[#9acd32]/50 text-center transform hover:scale-[1.02] duration-300"
          >
            Inscreva-se
          </a>
        </motion.div>
      </div>
    </section>
  )
}
