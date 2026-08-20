export function Section({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="mt-16 border-t border-[var(--matcha-soft)] pt-10 first:mt-0 first:border-0 first:pt-0">
      <h2 className="font-display text-2xl text-[var(--matcha-deep)] sm:text-3xl">
        {title}
      </h2>
      <div className="mt-4 space-y-3 text-[var(--ink-soft)]">{children}</div>
    </section>
  )
}
