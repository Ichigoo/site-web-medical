/**
 * Visuel décoratif inspiré de l'imagerie médicale (anneaux concentriques et
 * lignes de balayage). Sert de visuel en attendant les photos du centre —
 * TODO-CLIENT: remplacer par de vraies photos dès qu'elles sont disponibles.
 */
export function ImagingMotif({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      role="img"
      aria-label="Illustration abstraite d'imagerie médicale"
    >
      <defs>
        <radialGradient id="motif-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#0f4c5c" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#0f4c5c" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="400" fill="url(#motif-glow)" />
      {[150, 118, 86, 54].map((r) => (
        <circle
          key={r}
          cx="200"
          cy="200"
          r={r}
          fill="none"
          stroke="#0f4c5c"
          strokeOpacity={0.25}
          strokeWidth="1.25"
        />
      ))}
      <circle cx="200" cy="200" r="26" fill="#0f4c5c" fillOpacity="0.12" />
      <line x1="40" y1="200" x2="360" y2="200" stroke="#e36414" strokeOpacity="0.6" strokeWidth="1.5" />
      <line x1="200" y1="40" x2="200" y2="360" stroke="#0f4c5c" strokeOpacity="0.3" strokeWidth="1" />
      {[80, 120, 280, 320].map((y) => (
        <line
          key={y}
          x1="60"
          y1={y}
          x2="340"
          y2={y}
          stroke="#0f4c5c"
          strokeOpacity="0.08"
          strokeWidth="1"
        />
      ))}
    </svg>
  );
}
