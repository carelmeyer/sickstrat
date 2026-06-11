export function Backdrop() {
  return (
    <>
      {/* Chromatic aberration field — drifting cyan/red channel bleed behind content */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="aberration-blob aberration-cyan" />
        <div className="aberration-blob aberration-red" />
      </div>
      {/* Transmission layer — grain, scanline sweep, and signal tears over content */}
      <div aria-hidden className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
        <div className="grain" />
        <div className="scanline" />
        <div className="tear" />
      </div>
    </>
  )
}
