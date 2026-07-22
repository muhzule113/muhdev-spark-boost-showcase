import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { navLinks, siteConfig } from "@/data/site";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-40 border-b-2 border-foreground" style={{ backgroundColor: 'var(--cream)' }}>
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="text-xl font-extrabold tracking-tight" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
          <span className="text-foreground">{siteConfig.name}</span>
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "rounded-none px-4 py-2 text-sm font-bold transition-all hover:bg-[var(--pink)] hover:text-white border-2 border-foreground",
                location.pathname === link.href
                  ? "bg-foreground text-[var(--cream)]"
                  : "text-foreground"
              )}
              style={location.pathname !== link.href ? { backgroundColor: 'var(--cream)' } : {}}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <Button
            variant="default"
            size="icon"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            className="rounded-none border-2 border-foreground bg-[var(--yellow)] text-foreground hover:bg-[var(--yellow)]/80"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t-2 border-foreground md:hidden" style={{ backgroundColor: 'var(--cream)' }}>
          <div className="container flex flex-col gap-2 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-none border-2 border-foreground px-4 py-3 text-sm font-bold transition-all",
                  location.pathname === link.href
                    ? "bg-foreground text-[var(--cream)]"
                    : "text-foreground hover:bg-muted"
                )}
                style={location.pathname !== link.href ? { backgroundColor: 'var(--cream)' } : {}}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
