import { Fragment } from 'react'
import type { ScheduleItem } from '@/data/wedding'

export function Timeline({ items }: { items: ScheduleItem[] }) {
  return (
    <ol className="relative space-y-10 border-l border-[var(--matcha-soft)] pl-8">
      {items.map((item, i) => (
        <Fragment key={i}>
          {item.optional && !items[i - 1]?.optional && (
            <li className="-ml-8 list-none pl-8 text-xs uppercase tracking-wider text-[var(--strawberry-deep)]">
              Optional — staying on afterwards
            </li>
          )}
          <li className="relative">
            <span
              className={`absolute -left-[2.31rem] top-1 h-3 w-3 rounded-full border-2 bg-[var(--cream)] ${
                item.optional
                  ? 'border-dashed border-[var(--matcha-deep)]'
                  : 'border-[var(--strawberry-deep)]'
              }`}
            />
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="font-display text-lg text-[var(--strawberry-deep)]">
                {item.date}
              </span>
              <span className="text-xs uppercase tracking-wider text-[var(--matcha-deep)]">
                {item.time}
              </span>
            </div>
            <h3 className="mt-1 text-lg font-medium text-[var(--ink)]">
              {item.title}
            </h3>
            {item.place && (
              <p className="mt-0.5 text-sm text-[var(--ink-soft)]">{item.place}</p>
            )}
            {item.note && (
              <p className="mt-1 text-sm italic text-[var(--ink-soft)]">{item.note}</p>
            )}
          </li>
        </Fragment>
      ))}
    </ol>
  )
}
