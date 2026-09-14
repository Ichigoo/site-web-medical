import { Reveal } from "@/components/Reveal";

export function Section({
  children,
  className = "",
  tinted = false,
}: {
  children: React.ReactNode;
  className?: string;
  tinted?: boolean;
}) {
  return (
    <section className={`${tinted ? "bg-primary-soft/40" : ""} ${className}`}>
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lede,
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
}) {
  return (
    <Reveal className="max-w-2xl">
      {eyebrow && (
        <p className="text-sm font-semibold tracking-widest uppercase text-accent">
          {eyebrow}
        </p>
      )}
      <h2 className="scanline mt-2 font-display text-3xl font-semibold text-primary md:text-4xl">
        {title}
      </h2>
      {lede && <p className="mt-7 text-lg leading-relaxed text-ink-soft">{lede}</p>}
    </Reveal>
  );
}
