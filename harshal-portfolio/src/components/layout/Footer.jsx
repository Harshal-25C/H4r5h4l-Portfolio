export function Footer() {
  return (
    <footer className="border-t border-border py-10 px-6 text-center text-sm text-muted-foreground">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          © {new Date().getFullYear()} Harshal Choudhary. Crafted with care.
        </div>
        <div className="font-mono text-xs">
          Built with React · Vite · Framer Motion
        </div>
      </div>
    </footer>
  );
}
