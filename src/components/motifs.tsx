export function LeafSprig({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 200"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M60 190C58 140 58 90 60 10"
        stroke="var(--matcha)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M60 40C60 40 30 30 18 46C30 62 60 60 60 60"
        stroke="var(--matcha)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M60 80C60 80 92 68 104 86C92 104 60 100 60 100"
        stroke="var(--matcha)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M60 120C60 120 32 112 20 128C32 144 60 140 60 140"
        stroke="var(--matcha)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="60" cy="10" r="6" fill="var(--strawberry)" />
    </svg>
  )
}

export function BerryCluster({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle cx="30" cy="40" r="14" fill="var(--strawberry-soft)" />
      <circle cx="55" cy="28" r="10" fill="var(--strawberry)" />
      <circle cx="62" cy="55" r="16" fill="var(--strawberry-soft)" />
      <path
        d="M45 20C45 20 50 8 62 10"
        stroke="var(--matcha)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}
