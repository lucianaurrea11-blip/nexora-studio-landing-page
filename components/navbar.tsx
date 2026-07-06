'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Logo } from '@/components/logo'

const links = [
  { label: 'Servicios', href: '#services' },
  { label: 'Proceso', href: '#process' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Preguntas', href: '#faq' },
  { label: 'Contacto', href: '#contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-3 sm:pt-4">
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        className={cn(
          'flex w-full max-w-6xl items-center justify-between rounded-2xl border px-4 py-2.5 transition-all duration-300 sm:px-5',
          scrolled
            ? 'glass border-border shadow-[0_12px_40px_-12px_rgba(15,23,42,0.18)]'
            : 'border-transparent bg-transparent',
        )}
      >
        <a href="#top" className="flex items-center gap-2.5" aria-label="Inicio Nexora Studio">
          <Logo className="h-8 w-8" />
          <span className="text-[15px] font-semibold tracking-tight text-foreground">
            Nexora <span className="text-muted-foreground">Studio</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="group hidden items-center gap-1.5 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-[0_8px_24px_-8px_rgba(15,23,42,0.5)] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-8px_rgba(15,23,42,0.55)] sm:flex"
          >
            Agenda una asesoría gratis
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-border text-foreground transition-colors hover:bg-secondary lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="glass absolute inset-x-4 top-[72px] z-50 rounded-2xl border border-border p-3 shadow-xl lg:hidden"
          >
            <ul className="flex flex-col">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-secondary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 flex items-center justify-center gap-1.5 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground"
            >
              Agenda una asesoría gratis
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
