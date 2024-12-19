'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'
import logo from '@/assets/foodatlaslogo-texto.png'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full z-50 glass-effect"
    >
      <div className="container mx-auto px-4 py-1 flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Image
            src={logo}
            alt="FoodAtlas Logo"
            width={130}
            height={20}
            className="object-contain"
          />
        </motion.div>
        <nav className="hidden md:flex space-x-4">
          <NavLink href="#problem">O Problema</NavLink>
          <NavLink href="#solution">A Solução</NavLink>
          <NavLink href="#features">Funcionalidades</NavLink>
          <NavLink href="#benefits">Benefícios</NavLink>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden glass-effect py-1"
        >
          <NavLink href="#problem" onClick={() => setIsOpen(false)}>O Problema</NavLink>
          <NavLink href="#solution" onClick={() => setIsOpen(false)}>A Solução</NavLink>
          <NavLink href="#features" onClick={() => setIsOpen(false)}>Funcionalidades</NavLink>
          <NavLink href="#benefits" onClick={() => setIsOpen(false)}>Benefícios</NavLink>
        </motion.div>
      )}
    </motion.header>
  )
}

function NavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) {
  return (
    <motion.a
      href={href}
      className="block md:inline-block px-2 py-0.5 text-white hover-accent transition-all"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      {children}
    </motion.a>
  )
}
