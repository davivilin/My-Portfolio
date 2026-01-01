const Footer = () => {
  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="system-window p-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-mono text-sm text-foreground/60">
              {">"} DreamOS v2.0 © {new Date().getFullYear()} Davina
            </p>
            <p className="font-mono text-xs text-muted-foreground">
              {">"} System status: online | Uptime: ∞
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;