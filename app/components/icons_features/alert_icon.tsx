'use client'

import { useEffect, useState } from 'react'
import { Bell, AlertTriangle, CheckCircle } from 'lucide-react'

export function MonitoringAlertsIllustration() {
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    setAnimate(true)
  }, [])

  return (
    <div className="relative h-[200px] w-full overflow-hidden rounded-lg bg-black/10 p-4 dark:bg-white/5">
      <div className="relative h-full rounded-lg border border-white/10 bg-black/20 p-3">
        {/* Header */}
        <div className={`flex items-center gap-2 transition-all duration-700 ${animate ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`}>
          <Bell className="h-4 w-4 text-emerald-500" />
          <div className="h-2 w-32 rounded bg-white/20" />
        </div>

        {/* Alert Items */}
        <div className="mt-4 space-y-3">
          {/* Critical Alert */}
          <div className={`flex items-center gap-3 rounded-lg border border-purple-500/20 bg-purple-500/10 p-3 transition-all delay-300 duration-700 ${animate ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`}>
            <AlertTriangle className="h-4 w-4 text-purple-500" />
            <div className="flex-1 space-y-1">
              <div className="h-1.5 w-3/4 rounded bg-white/20" />
              <div className="h-1.5 w-1/2 rounded bg-white/10" />
            </div>
          </div>

          {/* Warning Alert */}
          <div className={`flex items-center gap-3 rounded-lg border border-emerald-500/20 bg-emerald-500/10 p-3 transition-all delay-500 duration-700 ${animate ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`}>
            <CheckCircle className="h-4 w-4 text-emerald-500" />
            <div className="flex-1 space-y-1">
              <div className="h-1.5 w-2/3 rounded bg-white/20" />
              <div className="h-1.5 w-1/3 rounded bg-white/10" />
            </div>
          </div>

          {/* Status Indicators */}
          <div className={`mt-4 grid grid-cols-3 gap-2 transition-all delay-700 duration-700 ${animate ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <div className="h-1.5 rounded bg-emerald-500/40" />
            <div className="h-1.5 rounded bg-purple-500/40 animate-pulse" />
            <div className="h-1.5 rounded bg-emerald-500/40" />
          </div>
        </div>
      </div>
    </div>
  )
}

