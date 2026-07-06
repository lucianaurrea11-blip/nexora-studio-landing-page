'use client'

import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { Reveal } from '@/components/reveal'

export function CtaSection() {
  return (
    <section id="contact" className="relative scroll-mt-24 px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative overflow-hidden rounded-[2rem] border border-border bg-primary px-6 py-16 text-center text-primary-foreground sm:px-12 sm:py-20"
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(37,99,235,0.4),transparent)] blur-2xl" />
            <div className="absolute bottom-0 right-10 h-[260px] w-[260px] rounded-full bg-[radial-gradient(closest-side,rgba(34,197,94,0.28),transparent)] blur-2xl" />
          </div>

          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-white/80">
              <span className="flex h-1.5 w-1.5 rounded-full bg-success" />
              Free consultation · No commitment
            </span>
            <h2 className="mx-auto mt-6 max-w-2xl text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Ready to elevate your business?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-base leading-relaxed text-white/70 sm:text-lg">
              Let&apos;s build a website that makes your business impossible to
              ignore — and turns visitors into loyal customers.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="https://wa.me/573000000000?text=Hola%20Nexora%20Studio,%20quiero%20una%20consultor%C3%ADa%20gratis"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-success px-7 py-4 text-sm font-semibold text-success-foreground shadow-[0_14px_34px_-12px_rgba(34,197,94,0.7)] transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-12px_rgba(34,197,94,0.75)] sm:w-auto"
              >
                <MessageCircle className="h-5 w-5" />
                Schedule a Free Consultation{' '}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="mailto:hello@nexorastudio.co"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-7 py-4 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-white/10 sm:w-auto"
              >
                Email us instead
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
