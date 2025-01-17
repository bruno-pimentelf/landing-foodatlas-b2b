'use client'

import { useEffect, useState } from 'react'
import { MessageSquare } from 'lucide-react'

export function AIAssistantIllustration() {
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    setAnimate(true)
  }, [])

  return (
    <div className="relative h-[200px] w-full overflow-hidden rounded-lg bg-black/10 p-4 dark:bg-white/5">
      {/* Chat Interface */}
      <div className="relative h-full rounded-lg border border-white/10 bg-black/20 p-3">
        {/* Messages */}
        <div className="space-y-3">
          <div className={`flex items-start gap-2 transition-all duration-700 ${animate ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`}>
            <div className="mt-1 rounded-full bg-purple-500/20 p-1">
              <MessageSquare className="h-3 w-3 text-purple-500" />
            </div>
            <div className="space-y-1">
              <div className="h-1.5 w-24 rounded bg-white/20" />
              <div className="h-1.5 w-32 rounded bg-white/10" />
            </div>
          </div>

          <div className={`flex items-start gap-2 transition-all delay-300 duration-700 ${animate ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`}>
            <div className="mt-1 rounded-full bg-emerald-500/20 p-1">
              <MessageSquare className="h-3 w-3 text-emerald-500" />
            </div>
            <div className="space-y-1">
              <div className="h-1.5 w-36 rounded bg-white/20" />
              <div className="h-1.5 w-28 rounded bg-white/10" />
            </div>
          </div>

          <div className={`flex items-start gap-2 transition-all delay-500 duration-700 ${animate ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`}>
            <div className="mt-1 rounded-full bg-purple-500/20 p-1">
              <MessageSquare className="h-3 w-3 text-purple-500" />
            </div>
            <div className="space-y-1">
              <div className="h-1.5 w-40 rounded bg-white/20" />
              <div className="h-1.5 w-24 rounded bg-white/10" />
            </div>
          </div>
        </div>

        {/* Input Area */}
        <div className={`absolute bottom-3 left-3 right-3 transition-all delay-700 duration-1000 ${animate ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <div className="flex gap-2 rounded-lg border border-white/10 bg-white/5 p-2">
            <div className="h-1.5 w-full rounded bg-white/10" />
            <div className="h-1.5 w-4 rounded bg-purple-500" />
          </div>
        </div>
      </div>
    </div>
  )
}

