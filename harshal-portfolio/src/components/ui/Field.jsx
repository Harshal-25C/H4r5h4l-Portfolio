export function Field({ label, name, type = "text", placeholder }) {
  return (
    <div>
      <label
        className="text-xs uppercase tracking-widest text-muted-foreground"
        htmlFor={name}
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl bg-input/60 border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:border-[var(--gold)]/70 focus:shadow-[0_0_24px_-12px_oklch(0.82_0.16_80/0.9)] transition"
      />
    </div>
  );
}
