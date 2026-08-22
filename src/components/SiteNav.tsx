import { Link } from '@tanstack/react-router'

export function SiteNav() {
  return (
    <header className="relative z-20 flex items-center justify-between px-6 py-6 sm:px-10 sm:py-8">
      <Link
        to="/"
        className="font-display text-lg tracking-wide text-[var(--strawberry-deep)]"
      >
        D <span className="text-[var(--matcha-deep)]">&amp;</span> M
      </Link>
      <nav className="flex items-center gap-5 text-sm tracking-wide sm:gap-8">
        <Link
          to="/"
          className="text-[var(--ink-soft)] transition-colors hover:text-[var(--strawberry-deep)]"
          activeProps={{ className: 'text-[var(--strawberry-deep)]' }}
          activeOptions={{ exact: true }}
        >
          Schedule
        </Link>
        <Link
          to="/travel"
          className="text-[var(--ink-soft)] transition-colors hover:text-[var(--strawberry-deep)]"
          activeProps={{ className: 'text-[var(--strawberry-deep)]' }}
        >
          Travel &amp; FAQ
        </Link>
        <Link
          to="/events"
          className="text-[var(--ink-soft)] transition-colors hover:text-[var(--strawberry-deep)]"
          activeProps={{ className: 'text-[var(--strawberry-deep)]' }}
        >
          Dress Code
        </Link>
        <Link
          to="/culture"
          className="text-[var(--ink-soft)] transition-colors hover:text-[var(--strawberry-deep)]"
          activeProps={{ className: 'text-[var(--strawberry-deep)]' }}
        >
          Culture
        </Link>
      </nav>
    </header>
  )
}
