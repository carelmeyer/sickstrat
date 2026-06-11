/** Transmission layer — grain, scanline sweep, and signal tears over content */
export function Backdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      <div className="grain" />
      <div className="scanline" />
      <div className="tear" />
    </div>
  )
}
