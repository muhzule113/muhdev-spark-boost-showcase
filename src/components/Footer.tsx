import { Link } from "react-router-dom";
import { siteConfig, navLinks, WHATSAPP_URL } from "@/data/site";

const Footer = () => (
  <footer className="border-t border-border/50 py-12">
    <div className="container">
      <div className="grid gap-8 md:grid-cols-3">
        <div>
          <div className="text-xl font-bold text-gradient mb-2">{siteConfig.name}</div>
          <p className="text-sm text-muted-foreground">{siteConfig.description}</p>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold">Navigasi</h4>
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link key={link.href} to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {link.label}
              </Link>
            ))}
            <Link to="/legal" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Kebijakan
            </Link>
          </div>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold">Kontak</h4>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              WhatsApp
            </a>
            <span>Email: muhzule@gmail.com</span>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-border/50 pt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
