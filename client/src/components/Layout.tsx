import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Phone, Menu, X, ChevronDown } from "lucide-react";

const LOGO_URL = "/manus-storage/posten-logo-gray-bg_a698a77a.png";

const navLinks = [
  { href: "/", label: "Home" },
  {
    label: "Services",
    children: [
      { href: "/services", label: "All Services" },
      { href: "/roof-repair", label: "Roof Repair" },
      { href: "/storm-damage", label: "Storm Damage" },
    ],
  },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-[#d3d3d5] shadow-md"
    >
      <div className="container flex items-center h-20 lg:h-24">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <img src={LOGO_URL} alt="Posten Roofing" className="h-18 lg:h-22 w-auto" />
        </Link>

        {/* Desktop Nav + CTA — all to the right */}
        <nav className="hidden lg:flex items-center gap-7 ml-auto">
          {navLinks.map((item) =>
            item.children ? (
              <div key={item.label} className="relative group">
                <button
                  className="flex items-center gap-1 font-medium text-sm transition-colors text-foreground hover:text-[oklch(0.65_0.14_60)]"
                >
                  {item.label}
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-white rounded-lg shadow-xl border border-border p-2 min-w-[180px]">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-3 py-2 text-sm text-foreground hover:bg-muted rounded-md transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href!}
                className="font-medium text-sm transition-colors text-foreground hover:text-[oklch(0.65_0.14_60)]"
              >
                {item.label}
              </Link>
            )
          )}
          {/* Divider */}
          <div className="w-px h-6 bg-border mx-1" />
          <a
            href="tel:+1XXXXXXXXXX"
            className="flex items-center gap-2 font-semibold text-sm text-foreground"
          >
            <Phone className="w-4 h-4" />
            (XXX) XXX-XXXX
          </a>
          <Link
            href="/contact"
            className="bg-[oklch(0.65_0.14_60)] hover:bg-[oklch(0.58_0.14_60)] text-white font-semibold text-sm px-5 py-2.5 rounded-md transition-all duration-150 active:scale-[0.97]"
          >
            Free Inspection
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-foreground ml-auto"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-border shadow-lg">
          <nav className="container py-4 flex flex-col gap-1">
            {navLinks.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="flex items-center justify-between w-full px-3 py-2.5 text-foreground font-medium"
                  >
                    {item.label}
                    <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                  </button>
                  {servicesOpen && (
                    <div className="pl-4">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href!}
                  className="px-3 py-2.5 text-foreground font-medium hover:text-[oklch(0.65_0.14_60)]"
                >
                  {item.label}
                </Link>
              )
            )}
            <div className="mt-3 pt-3 border-t border-border flex flex-col gap-2">
              <a
                href="tel:+1XXXXXXXXXX"
                className="flex items-center justify-center gap-2 bg-[oklch(0.30_0.07_250)] text-white font-semibold py-3 rounded-md"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
              <Link
                href="/contact"
                className="flex items-center justify-center bg-[oklch(0.65_0.14_60)] text-white font-semibold py-3 rounded-md"
              >
                Request Free Inspection
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-[oklch(0.18_0.015_250)] text-white/80">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <img src={LOGO_URL} alt="Posten Roofing" className="h-16 w-auto" />
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              Residential roofing services for Sun Prairie, Madison, Dane County, and surrounding Wisconsin communities.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/roof-repair" className="hover:text-[oklch(0.65_0.14_60)] transition-colors">Roof Repair</Link></li>
              <li><Link href="/services" className="hover:text-[oklch(0.65_0.14_60)] transition-colors">Roof Replacement</Link></li>
              <li><Link href="/storm-damage" className="hover:text-[oklch(0.65_0.14_60)] transition-colors">Storm Damage</Link></li>
              <li><Link href="/services" className="hover:text-[oklch(0.65_0.14_60)] transition-colors">Insurance Claims Help</Link></li>
              <li><Link href="/services" className="hover:text-[oklch(0.65_0.14_60)] transition-colors">Roof Leak Help</Link></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Service Areas</h4>
            <ul className="space-y-2 text-sm">
              <li>Sun Prairie</li>
              <li>Madison</li>
              <li>DeForest</li>
              <li>Waunakee</li>
              <li>Cottage Grove</li>
              <li>Windsor & Marshall</li>
              <li><Link href="/service-areas" className="text-[oklch(0.65_0.14_60)] hover:underline">View All Areas →</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[oklch(0.65_0.14_60)]" />
                <a href="tel:+1XXXXXXXXXX" className="hover:text-white transition-colors">(XXX) XXX-XXXX</a>
              </li>
              <li className="text-white/60 text-xs mt-4">
                Service-area business serving Dane County and nearby communities within ~35 minutes of Sun Prairie, WI.
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Posten Roofing. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-white/40">
            <Link href="/contact" className="hover:text-white/70 transition-colors">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-white/70 transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function MobileStickyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white border-t border-border shadow-[0_-4px_20px_rgba(0,0,0,0.1)] p-3 flex gap-2">
      <a
        href="tel:+1XXXXXXXXXX"
        className="flex-1 flex items-center justify-center gap-2 bg-[oklch(0.30_0.07_250)] text-white font-semibold py-3 rounded-md text-sm"
      >
        <Phone className="w-4 h-4" />
        Call
      </a>
      <Link
        href="/contact"
        className="flex-1 flex items-center justify-center bg-[oklch(0.65_0.14_60)] text-white font-semibold py-3 rounded-md text-sm"
      >
        Free Inspection
      </Link>
    </div>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <MobileStickyBar />
    </div>
  );
}
