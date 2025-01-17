'use client'

import { useEffect, useState } from 'react'
import { TrendingUp, ArrowUp, ArrowDown } from 'lucide-react'

export function PredictiveAnalysisIllustration() {
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    setAnimate(true)
  }, [])

  return (
    <div className="relative h-[200px] w-full overflow-hidden rounded-lg bg-black/10 p-4 dark:bg-white/5">
      <div className="relative h-full rounded-lg border border-white/10 bg-black/20 p-3">
        {/* Header */}
        <div className={`flex items-center gap-2 transition-all duration-700 ${animate ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`}>
          <TrendingUp className="h-4 w-4 text-purple-500" />
          <div className="h-2 w-32 rounded bg-white/20" />
        </div>

        {/* Prediction Graph */}
        <div className={`mt-4 h-24 transition-all delay-300 duration-1000 ${animate ? 'opacity-100' : 'opacity-0'}`}>
          <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            {/* Historical Data */}
            <path
              d="M0 70 L 20 65 L 40 75 L 60 60"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-emerald-500/40"
            />
            {/* Prediction Line */}
            <path
              d="M60 60 L 80 50 L 100 45"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="4"
              className="text-purple-500/60"
            />
            {/* Confidence Interval */}
            <path
              d="M60 65 L 80 55 L 100 50 L 100 40 L 80 45 L 60 55 Z"
              className="fill-purple-500/10"
            />
          </svg>
        </div>

        {/* Predictions */}
        <div className="mt-4 grid grid-cols-2 gap-2">
          <div className={`flex items-center gap-2 rounded bg-emerald-500/20 p-2 transition-all delay-500 duration-700 ${animate ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <ArrowUp className="h-3 w-3 text-emerald-500" />
            <div className="h-1.5 w-full rounded bg-emerald-500/40" />
          </div>
          <div className={`flex items-center gap-2 rounded bg-purple-500/20 p-2 transition-all delay-700 duration-700 ${animate ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <ArrowDown className="h-3 w-3 text-purple-500" />
            <div className="h-1.5 w-full rounded bg-purple-500/40" />
          </div>
        </div>
      </div>
    </div>
  )
}

