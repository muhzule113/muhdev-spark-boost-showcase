import { Link } from "react-router-dom";
import { siteConfig, navLinks, WHATSAPP_URL } from "@/data/site";

const Footer = () => (
  <footer className="border-t-2 py-16" style={{ backgroundColor: 'var(--cream)', borderColor: 'var(--navy)' }}>
    <div className="container">
      <div className="grid gap-10 md:grid-cols-3">
        <div>
          <div className="text-2xl font-extrabold mb-3" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>{siteConfig.name}</div>
          <p className="text-sm font-medium text-foreground/80">{siteConfig.description}</p>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-extrabold uppercase tracking-wider" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>Navigasi</h4>
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link key={link.href} to={link.href} className="text-sm font-bold text-foreground/80 hover:text-[var(--teal)] transition-colors">
                {link.label}
              </Link>
            ))}
            <Link to="/legal" className="text-sm font-bold text-foreground/80 hover:text-[var(--teal)] transition-colors">
              Kebijakan
            </Link>
          </div>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-extrabold uppercase tracking-wider" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>Kontak</h4>
          <div className="flex flex-col gap-2 text-sm font-medium text-foreground/80">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="font-bold hover:text-[var(--teal)] transition-colors">
              WhatsApp
            </a>
            <span>Email: muhzule@gmail.com</span>
          </div>
        </div>
      </div>
      <div className="mt-12 border-t-2 pt-6 text-center text-xs font-extrabold text-foreground/80" style={{ borderColor: 'var(--navy)' }}>
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
