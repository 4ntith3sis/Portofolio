export default function Footer() {
  return (
    <footer className="py-12 bg-background border-t border-border font-mono text-xs text-secondary tracking-widest uppercase">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center border-b border-border pb-8 mb-8">
          <div>
            <span className="text-foreground font-bold block">DAFFA ABDUL FATAH</span>
            <span className="text-secondary/70 text-[10px]">INFORMATICS ENGINEERING</span>
          </div>

          <div>
            <span className="text-foreground font-medium block">ROLE & FOCUS</span>
            <span className="text-secondary/70 text-[10px]">FULLSTACK DEVELOPER / UI DESIGNER</span>
          </div>

          <div>
            <span className="text-foreground font-medium block">COPYRIGHT</span>
            <span className="text-secondary/70 text-[10px]">© 2026 ALL RIGHTS RESERVED</span>
          </div>

          <div className="md:text-right">
            <span className="text-foreground font-medium block">LOCATION</span>
            <span className="text-secondary/70 text-[10px]">INDONESIA</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between text-[10px] text-secondary/60">
          <span>BUILT WITH NEXT.JS, TAILWIND CSS & FRAMER MOTION</span>
          <span className="mt-2 sm:mt-0">SWISS INTERNATIONAL TYPOGRAPHIC DESIGN SYSTEM</span>
        </div>
      </div>
    </footer>
  );
}
