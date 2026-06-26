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
        className="mt-2 w-full rounded-xl bg-input/40 border border-border px-4 py-3 text-sm focus:outline-none focus:border-[var(--gold)]/60 transition"
      />
    </div>
  );
}
