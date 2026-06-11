type SignalDividerProps = {
  /** Horizontal position of the torn segment, e.g. "30%" */
  offset?: string
}

export function SignalDivider({ offset = "32%" }: SignalDividerProps) {
  return (
    <div aria-hidden className="mx-auto w-full max-w-5xl">
      <div className="relative h-px bg-border">
        <span
          className="absolute h-px w-14 bg-background"
          style={{ left: offset }}
        />
        <span
          className="absolute h-px w-10 -translate-y-[2px]"
          style={{ left: `calc(${offset} - 4px)`, background: "hsl(180 100% 70% / 0.5)" }}
        />
        <span
          className="absolute h-px w-10 translate-y-[2px]"
          style={{ left: `calc(${offset} + 18px)`, background: "hsl(0 100% 70% / 0.5)" }}
        />
      </div>
    </div>
  )
}
