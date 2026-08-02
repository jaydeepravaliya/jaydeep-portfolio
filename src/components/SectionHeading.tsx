type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, description, align = "left" }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="section-kicker">{eyebrow}</p>
      <h2 className="mt-4 text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-paper sm:text-5xl">{title}</h2>
      {description ? <p className="mt-6 text-base leading-8 text-stone-400">{description}</p> : null}
    </div>
  );
}
