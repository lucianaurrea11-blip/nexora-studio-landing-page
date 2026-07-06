import { Mail, MessageCircle } from 'lucide-react'
import { Logo } from '@/components/logo'

const nav = [
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Projects', href: '#projects' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

const socials = [
  { label: 'Instagram', href: '#', icon: InstagramIcon },
  { label: 'LinkedIn', href: '#', icon: LinkedinIcon },
  { label: 'Facebook', href: '#', icon: FacebookIcon },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm">
            <a href="#top" className="flex items-center gap-2.5" aria-label="Nexora Studio home">
              <Logo className="h-8 w-8" />
              <span className="text-[15px] font-semibold tracking-tight text-foreground">
                Nexora <span className="text-muted-foreground">Studio</span>
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Premium websites for Colombian businesses that want more
              credibility, better visibility and more customers.
            </p>
            <div className="mt-5 flex items-center gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-border text-muted-foreground transition-colors hover:border-primary/30 hover:bg-secondary hover:text-foreground"
                >
                  <s.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold text-foreground">Navigate</h3>
              <ul className="mt-4 flex flex-col gap-3">
                {nav.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground">Get in touch</h3>
              <ul className="mt-4 flex flex-col gap-3">
                <li>
                  <a
                    href="https://wa.me/573000000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <MessageCircle className="h-4 w-4 text-success" />
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:hello@nexorastudio.co"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Mail className="h-4 w-4 text-brand" />
                    hello@nexorastudio.co
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Nexora Studio. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Crafted in Colombia · Built to convert.
          </p>
        </div>
      </div>
    </footer>
  )
}
