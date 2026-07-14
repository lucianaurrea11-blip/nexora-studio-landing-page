'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Smartphone, Gauge, Sparkles, Search } from 'lucide-react'
import { Reveal } from '@/components/reveal'

type Stat = {
  icon: typeof Smartphone
  value: number
  suffix: string
  label: string
  sub: string
}

const stats: Stat[] = [
  { icon: Smartphone, value: 95, suffix: '%', label: 'Experiencia móvil', sub: 'Perfecto en celular, tablet y desktop' },
  { icon: Gauge, value: 99, suffix: '', label: 'Rendimiento web', sub: 'Tu sitio carga antes de que el visitante piense en irse' },
  { icon: Sparkles, value: 100, suffix: '%', label: 'Diseño a medida', sub: 'Cero plantillas genéricas, 100 % tu marca' },
  { icon: Search, value: 100, suffix: '%', label: 'Preparado para SEO', sub: 'Estructura optimizada para aparecer en Google' },
]

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    let raf = 0
    const start = performance.now()
    const duration = 1400
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setDisplay(Math.round(eased * value))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value])

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  )
}

export function SocialProof() {
  return (
    <section className="relative py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i}>
              <motion.div
                whileHover={{ y: -4 }}
                className="group h-full rounded-2xl border border-border bg-card p-5 shadow-[0_2px_12px_-6px_rgba(15,23,42,0.12)] transition-shadow hover:shadow-[0_20px_40px_-20px_rgba(15,23,42,0.25)] sm:p-6"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-brand transition-colors group-hover:bg-brand group-hover:text-brand-foreground">
                  <stat.icon className="h-5 w-5" />
                </span>
                <p className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-1 text-sm font-medium text-foreground">{stat.label}</p>
                <p className="text-xs text-muted-foreground">{stat.sub}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
