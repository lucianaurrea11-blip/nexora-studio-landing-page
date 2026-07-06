'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const faqs = [
  {
    q: 'How much does a website cost?',
    a: 'Our premium projects start at around $2,000 USD. The final investment depends on scope, integrations and timeline. After a free consultation we send a clear, fixed quote — no surprises.',
  },
  {
    q: 'How long does a project take?',
    a: 'Most websites launch within 3 to 5 weeks. Larger projects with custom integrations may take longer. We share a detailed timeline before we begin so you always know what to expect.',
  },
  {
    q: 'Do you work with businesses outside my city?',
    a: 'Yes. We work with clients across all of Colombia and abroad. Our process is fully remote, with clear communication and regular updates at every stage.',
  },
  {
    q: 'Will my website show up on Google?',
    a: 'Absolutely. Every site is built SEO-ready with optimized structure, speed and content. We also set up your Google Business Profile to help you win local searches.',
  },
  {
    q: 'Can you manage and update the site after launch?',
    a: 'Yes. We offer ongoing care plans for updates, hosting, performance monitoring and content changes — so your site keeps performing while you focus on your business.',
  },
  {
    q: 'What do I need to get started?',
    a: 'Just your goals. Book a free consultation and we will guide you through everything — branding, content and the right strategy for your business.',
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
              FAQ
            </span>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Questions, answered.
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
