'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const faqs = [
  {
    q: '¿Cuánto cuesta un sitio web?',
    a: 'Cada proyecto es diferente. El precio depende del alcance, las funcionalidades y las necesidades de tu negocio. Agenda una asesoría gratuita y prepararemos una propuesta personalizada, sin compromiso.',
  },
  {
    q: '¿Cuánto tarda un proyecto?',
    a: 'La mayoría de sitios se entregan entre 3 y 5 semanas. Proyectos más grandes con integraciones personalizadas pueden tomar un poco más. Antes de empezar, compartimos un cronograma detallado para que sepas exactamente qué esperar.',
  },
  {
    q: '¿Trabajan con empresas fuera de mi ciudad?',
    a: 'Sí. Trabajamos con clientes en todo Colombia y en el exterior. Nuestro proceso es 100 % remoto, con comunicación clara y actualizaciones en cada etapa del proyecto.',
  },
  {
    q: '¿Mi sitio aparecerá en Google?',
    a: 'Por supuesto. Cada sitio se construye con SEO desde el primer día: estructura optimizada, velocidad y contenido pensado para posicionar. También configuramos tu perfil de Google Business para destacar en búsquedas locales.',
  },
  {
    q: '¿Pueden administrar el sitio después del lanzamiento?',
    a: 'Sí. Ofrecemos planes de mantenimiento con actualizaciones, hosting, monitoreo de rendimiento y cambios de contenido — para que tu sitio siga funcionando mientras tú te enfocas en tu negocio.',
  },
  {
    q: '¿Qué necesito para empezar?',
    a: 'Solo tus objetivos. Escríbenos y te guiamos en todo: marca, contenido y la estrategia digital adecuada para tu empresa.',
  },
]

function FaqItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: (typeof faqs)[number]
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-primary/20">
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
        >
          <span className="text-base font-semibold text-foreground">
            {faq.q}
          </span>
          <span
            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border text-foreground transition-all duration-300 ${
              isOpen ? 'rotate-45 bg-primary text-primary-foreground' : ''
            }`}
          >
            <Plus className="h-4 w-4" />
          </span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground sm:px-6">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="relative scroll-mt-24 bg-secondary/60 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wider text-brand">
              Preguntas frecuentes
            </span>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Inversión, plazos y alcance, sin rodeos.
            </h2>
          </Reveal>
        </div>

        <div className="mt-12 flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <Reveal key={faq.q} delay={i % 3}>
              <FaqItem
                faq={faq}
                isOpen={open === i}
                onToggle={() => setOpen(open === i ? null : i)}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
