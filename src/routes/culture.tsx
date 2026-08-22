import { createFileRoute } from '@tanstack/react-router'
import { SiteNav } from '@/components/SiteNav'
import { SiteFooter } from '@/components/SiteFooter'
import { LeafSprig } from '@/components/Motifs'
import { Section } from '@/components/Section'
import { cultureSections } from '@/data/wedding'

export const Route = createFileRoute('/culture')({
  component: Culture,
})

function Culture() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div
        className="pointer-events-none absolute -left-8 top-16 h-64 w-36 rotate-12 opacity-60 sm:h-80"
        aria-hidden
      >
        <LeafSprig className="h-full w-full" />
      </div>

      <SiteNav />

      <main className="relative z-10 mx-auto max-w-2xl px-6 pb-24 pt-6 sm:px-10">
        <p className="rise rise-1 text-xs uppercase tracking-[0.35em] text-[var(--strawberry-deep)]">
          A bit of background
        </p>
        <h1 className="font-display rise rise-2 mt-4 text-4xl text-[var(--ink)] sm:text-5xl">
          Assam &amp; Wedding Traditions
        </h1>
        <p className="rise rise-3 mt-4 text-[var(--ink-soft)]">
          This page is still being written — for now, here's what we plan to
          cover.
        </p>

        {cultureSections.map((section) => (
          <Section key={section.title} title={section.title}>
            <p>{section.teaser}</p>
            <p className="text-sm italic text-[var(--ink-soft)]">
              To be filled in.
            </p>
          </Section>
        ))}
      </main>

      <SiteFooter />
    </div>
  )
}
