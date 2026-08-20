import { createFileRoute } from '@tanstack/react-router'
import { SiteNav } from '@/components/SiteNav'
import { SiteFooter } from '@/components/SiteFooter'
import { LeafSprig } from '@/components/Motifs'
import { Section } from '@/components/Section'
import { events } from '@/data/wedding'

export const Route = createFileRoute('/events')({
  component: Events,
})

function Events() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div
        className="pointer-events-none absolute -right-8 top-16 h-64 w-36 -rotate-12 opacity-60 sm:h-80"
        aria-hidden
      >
        <LeafSprig className="h-full w-full" />
      </div>

      <SiteNav />

      <main className="relative z-10 mx-auto max-w-2xl px-6 pb-24 pt-6 sm:px-10">
        <p className="rise rise-1 text-xs uppercase tracking-[0.35em] text-[var(--strawberry-deep)]">
          What to wear
        </p>
        <h1 className="font-display rise rise-2 mt-4 text-4xl text-[var(--ink)] sm:text-5xl">
          Events &amp; Dress Code
        </h1>
        <p className="rise rise-3 mt-4 text-[var(--ink-soft)]">
          Dress code details are still being finalised — this page will fill
          in over time. For now, here's what's happening when.
        </p>

        {events.map((event) => (
          <Section key={event.title} title={event.title}>
            <p>
              {event.date} · {event.time} · {event.place}
            </p>
            <p>{event.dressCode}</p>
          </Section>
        ))}
      </main>

      <SiteFooter />
    </div>
  )
}
