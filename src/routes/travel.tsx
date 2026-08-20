import { createFileRoute } from '@tanstack/react-router'
import { SiteNav } from '@/components/SiteNav'
import { SiteFooter } from '@/components/SiteFooter'
import { LeafSprig } from '@/components/Motifs'
import { Section } from '@/components/Section'
import { rsvpUrl, visaUrl, meghalayaDetails, goaDetails } from '@/data/wedding'

export const Route = createFileRoute('/travel')({
  component: Travel,
})

function Travel() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div
        className="pointer-events-none absolute -right-8 bottom-16 h-64 w-36 rotate-12 opacity-60 sm:h-80"
        aria-hidden
      >
        <LeafSprig className="h-full w-full" />
      </div>

      <SiteNav />

      <main className="relative z-10 mx-auto max-w-2xl px-6 pb-24 pt-6 sm:px-10">
        <p className="rise rise-1 text-xs uppercase tracking-[0.35em] text-[var(--strawberry-deep)]">
          Beyond the wedding
        </p>
        <h1 className="font-display rise rise-2 mt-4 text-4xl text-[var(--ink)] sm:text-5xl">
          Travel &amp; FAQ
        </h1>
        <p className="rise rise-3 mt-4 text-[var(--ink-soft)]">
          Everything for getting to Guwahati, staying on afterwards, and the
          paperwork in between.
        </p>

        <Section title="After the wedding">
          <p>
            <strong className="text-[var(--ink)]">10–13 February — Meghalaya:</strong>{' '}
            {meghalayaDetails}
          </p>
          <p>
            <strong className="text-[var(--ink)]">14 February onward — Goa:</strong>{' '}
            {goaDetails}
          </p>
        </Section>

        <Section title="Accommodation">
          <p>
            We are booking accommodation for the four main wedding nights,
            5–9 February: close to the Kalita home for the first two nights,
            then within Aroohan Serenity Resort or close by for the nights
            around the wedding day. Happy to help with the night of the 9th
            depending on your plans.
          </p>
        </Section>

        <Section title="Getting there">
          <p>
            Guwahati has many daily flights from major hubs, especially Delhi.
            The best approach is booking a return flight to Delhi — via Air
            India or Lufthansa, usually cheaper as a package — and booking the
            Delhi–Guwahati leg separately depending on your stopover.
          </p>
          <p>
            From Frankfurt, budget roughly 600€ for the Delhi flight and 150€
            for the Guwahati leg. Booking 2–3 months ahead is usually enough,
            though it depends a little on the situation in the Middle East.
          </p>
        </Section>

        <Section title="Visa">
          <p>
            Foreigners need a visa. With a German passport, this can be
            applied for online as an e-Visa and is granted on arrival. The
            official website is a bit clunky but manageable — watch out for
            scam sites and third-party providers, they are not necessary.
          </p>
          <a
            href={visaUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-block rounded-full border border-[var(--strawberry-deep)] px-6 py-2.5 text-sm font-medium text-[var(--strawberry-deep)] transition-colors hover:bg-[var(--strawberry-mist)]"
          >
            Apply for the e-Visa
          </a>
        </Section>

        <Section title="Weather">
          <p>
            Sunny and warm during the day in Guwahati, around 25–27°C, and
            mild at night — a light jacket is enough. Shillong is cooler,
            around 10–18°C at night, so pack something warmer for Meghalaya.
          </p>
        </Section>

        <Section title="RSVP">
          <p>
            We need to confirm venues and food, so please send a definitive
            confirmation of your attendance at the wedding and the Meghalaya
            trip by mid-September. It takes about a minute.
          </p>
          <a
            href={rsvpUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-block rounded-full bg-[var(--strawberry-deep)] px-7 py-3 text-sm font-medium tracking-wide text-[var(--cream)] transition-transform hover:-translate-y-0.5"
          >
            Fill out the RSVP form
          </a>
        </Section>
      </main>

      <SiteFooter />
    </div>
  )
}
