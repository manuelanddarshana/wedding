import { createFileRoute, Link } from '@tanstack/react-router'
import { SiteNav } from '@/components/SiteNav'
import { SiteFooter } from '@/components/SiteFooter'
import { LeafSprig, BerryCluster } from '@/components/Motifs'
import { Timeline } from '@/components/Timeline'
import { schedule, venues, rsvpUrl } from '@/data/wedding'
import banner from '@/assets/strawberry_matcha_banner.webp'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div
        className="pointer-events-none absolute -right-10 top-24 h-72 w-40 opacity-70 sm:h-96 sm:w-56"
        aria-hidden
      >
        <LeafSprig className="h-full w-full" />
      </div>
      <div
        className="pointer-events-none absolute -left-6 bottom-10 h-28 w-28 opacity-60 drift"
        aria-hidden
      >
        <BerryCluster className="h-full w-full" />
      </div>

      <SiteNav />

      <main className="relative z-10 mx-auto max-w-3xl px-6 pb-24 pt-10 sm:px-10">
        <section className="text-center">
          <p className="rise rise-1 text-xs uppercase tracking-[0.35em] text-[var(--matcha-deep)]">
            We are getting married
          </p>
          <h1 className="sr-only">Darshana Kalita &amp; Manuel Brenner</h1>
          <img
            src={banner}
            alt="Darshana Kalita & Manuel Brenner — Monday, 8 February 2027, Aroohan Serenity Resort, Guwahati"
            width={1774}
            height={887}
            loading="eager"
            className="rise rise-2 mt-6 w-full rounded-3xl"
          />
          <p className="rise rise-3 mt-6 text-lg text-[var(--ink-soft)]">
            6 – 8 February · Guwahati, Assam, India
          </p>
          <div className="rise rise-4 mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={rsvpUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[var(--strawberry-deep)] px-7 py-3 text-sm font-medium tracking-wide text-[var(--cream)] transition-transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[var(--strawberry-soft)]"
            >
              RSVP by mid-September
            </a>
            <Link
              to="/travel"
              className="rounded-full border border-[var(--matcha)] px-7 py-3 text-sm font-medium tracking-wide text-[var(--matcha-deep)] transition-colors hover:bg-[var(--matcha-mist)]"
            >
              Travel &amp; FAQ
            </Link>
            <Link
              to="/events"
              className="rounded-full border border-[var(--matcha)] px-7 py-3 text-sm font-medium tracking-wide text-[var(--matcha-deep)] transition-colors hover:bg-[var(--matcha-mist)]"
            >
              Dress Code
            </Link>
          </div>
        </section>

        <section className="mt-28">
          <h2 className="font-display rise text-3xl text-[var(--ink)] sm:text-4xl">
            Schedule
          </h2>

          <div className="mt-12">
            <Timeline items={schedule} />
          </div>
        </section>

        <section className="mt-24 grid gap-6 sm:grid-cols-2">
          {venues.map((venue) => (
            <div
              key={venue.name}
              className="rounded-2xl bg-[var(--matcha-mist)] p-6"
            >
              <h3 className="font-display text-xl text-[var(--matcha-deep)]">
                {venue.name}
              </h3>
              <p className="mt-2 text-sm text-[var(--ink-soft)]">{venue.address}</p>
              <a
                href={venue.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-block text-sm font-medium text-[var(--matcha-deep)] underline underline-offset-2 hover:text-[var(--strawberry-deep)]"
              >
                View on Google Maps ↗
              </a>
            </div>
          ))}
        </section>

        <section className="mt-24 rounded-2xl border border-[var(--strawberry-soft)] bg-[var(--strawberry-mist)] p-8 text-center">
          <h3 className="font-display text-2xl text-[var(--strawberry-deep)]">
            Staying on for the Meghalaya trip or Goa afterwards?
          </h3>
          <p className="mt-2 text-[var(--ink-soft)]">
            Post-wedding travel, accommodation, flights, and visa details are on the
            next page.
          </p>
          <Link
            to="/travel"
            className="mt-5 inline-block rounded-full bg-[var(--strawberry-deep)] px-7 py-3 text-sm font-medium tracking-wide text-[var(--cream)] transition-transform hover:-translate-y-0.5"
          >
            See Travel &amp; FAQ
          </Link>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
