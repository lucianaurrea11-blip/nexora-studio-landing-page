import { cn } from '@/lib/utils'

export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center justify-center rounded-xl bg-primary text-primary-foreground',
        className,
      )}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-[60%] w-[60%]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 19V5l14 14V5"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  )
}
