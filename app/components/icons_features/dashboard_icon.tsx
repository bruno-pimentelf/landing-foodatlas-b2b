'use client'

import { useEffect, useState } from 'react'

export function DataCenterIllustration() {
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    setAnimate(true)
  }, [])

  return (
    <div className="relative h-[200px] w-full overflow-hidden rounded-lg bg-black/10 p-4 dark:bg-white/5">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid h-full w-full grid-cols-6 gap-4">
          {Array.from({ length: 24 }).map((_, i) => (
            <div key={i} className="h-full w-full border-r border-t border-white/20" />
          ))}
        </div>
      </div>

      {/* Dashboard Elements */}
      <div className="relative grid h-full grid-cols-2 gap-4">
        <div className={`space-y-2 transition-all duration-1000 ${animate ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <div className="h-2 w-3/4 rounded bg-emerald-500/80" />
          <div className="h-24 rounded bg-emerald-500/20 p-2">
            <div className="h-full w-full rounded-sm bg-emerald-500/20" />
          </div>
          <div className="h-2 w-1/2 rounded bg-emerald-500/60" />
        </div>
        
        <div className={`space-y-2 transition-all delay-300 duration-1000 ${animate ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <div className="h-16 rounded bg-purple-500/20 p-2">
            <div className="h-full w-full rounded-sm bg-purple-500/20" />
          </div>
          <div className="h-2 w-2/3 rounded bg-purple-500/80" />
          <div className="h-12 rounded bg-purple-500/20 p-2">
            <div className="h-full w-full rounded-sm bg-purple-500/20" />
          </div>
        </div>
      </div>

      {/* Connecting Lines */}
      <div className={`absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 bg-gradient-to-r from-emerald-500 to-purple-500 transition-all duration-1000 ${animate ? 'opacity-50' : 'opacity-0'}`} />
    </div>
  )
}

