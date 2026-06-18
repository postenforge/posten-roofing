import { Link } from "wouter";
import { ArrowRight, Wrench, HomeIcon, CloudRain, Shield, Droplets, FileCheck, Wind, Settings } from "lucide-react";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663502408391/74KQnuSq8LqDRTPc7CwkAx/posten-hero-roof-9ohrRJktbi5872z2iuTsQg.webp";

const allServices = [
  {
    title: "Roof Replacement",
    desc: "When repair isn't enough, we handle full tear-off and replacement with quality materials and clean workmanship. We'll walk you through material options, timeline, and what to expect.",
    icon: HomeIcon,
    href: "/services",
  },
  {
    title: "Roof Repair",
    desc: "Missing shingles, small leaks, flashing issues, and minor damage — fixed before they become expensive problems.",
    icon: Wrench,
    href: "/roof-repair",
  },
  {
    title: "Storm Damage Inspection",
    desc: "After hail, wind, or severe weather, we inspect and document damage with photos so you know exactly what happened.",
    icon: CloudRain,
    href: "/storm-damage",
  },
  {
    title: "Hail Damage",
    desc: "Hail can bruise shingles, crack them, and strip granules — often without being visible from the ground. We know what to look for.",
    icon: CloudRain,
    href: "/storm-damage",
  },
  {
    title: "Wind Damage",
    desc: "High winds lift, crease, and tear shingles. Even if nothing blew off, the seal can be broken. We check for hidden wind damage.",
    icon: Wind,
    href: "/storm-damage",
  },
  {
    title: "Roof Leak Help",
    desc: "Active leak or ceiling stain? We help identify the likely source and stop it before it spreads to decking, insulation, or drywall.",
    icon: Droplets,
    href: "/roof-repair",
  },
  {
    title: "Insurance Claims Documentation",
    desc: "We document visible damage with photos and provide a written scope/estimate. We can meet with your adjuster when appropriate. Your insurance company makes claim decisions — we just provide the evidence.",
    icon: FileCheck,
    href: "/services",
  },
  {
    title: "Preventative Maintenance",
    desc: "Catch small issues before they become big ones. Periodic inspections can extend your roof's life and prevent surprise repairs.",
    icon: Settings,
    href: "/services",
  },
];

export default function Services() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-28 pb-16">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Beautiful home with quality roofing" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[oklch(0.12_0.02_250)]/85" />
        </div>
        <div className="container relative z-10">
          <p className="text-[oklch(0.65_0.14_60)] font-semibold text-sm uppercase tracking-wider mb-3">Our Services</p>
          <h1 className="text-4xl md:text-5xl text-white mb-4">Residential Roofing Services</h1>
          <p className="text-white/70 text-lg max-w-2xl">
            From repairs to full replacements, storm damage inspections to insurance documentation — we handle residential roofing for Sun Prairie, Madison, and surrounding communities.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {allServices.map((svc) => {
              const Icon = svc.icon;
              return (
                <Link
                  key={svc.title}
                  href={svc.href}
                  className="group p-6 rounded-xl border border-border hover:border-[oklch(0.65_0.14_60)]/50 hover:shadow-lg transition-all duration-200"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[oklch(0.65_0.14_60)]/10 flex items-center justify-center shrink-0 group-hover:bg-[oklch(0.65_0.14_60)]/20 transition-colors">
                      <Icon className="w-6 h-6 text-[oklch(0.65_0.14_60)]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2 font-sans">{svc.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-3">{svc.desc}</p>
                      <span className="inline-flex items-center gap-1 text-[oklch(0.65_0.14_60)] text-sm font-semibold group-hover:gap-2 transition-all">
                        Learn More <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Insurance Disclaimer */}
      <section className="py-16 bg-muted/30">
        <div className="container max-w-3xl">
          <h2 className="text-2xl text-[oklch(0.20_0.015_250)] mb-4 gold-underline-center text-center">
            About Insurance Claims
          </h2>
          <div className="bg-white rounded-xl p-6 border border-border mt-8">
            <p className="text-muted-foreground leading-relaxed mb-4">
              We help homeowners document roof damage for insurance purposes. Here's what that means and what it doesn't:
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2"><Shield className="w-4 h-4 text-[oklch(0.65_0.14_60)] shrink-0 mt-0.5" /> We can document visible roof damage with photos.</li>
              <li className="flex gap-2"><Shield className="w-4 h-4 text-[oklch(0.65_0.14_60)] shrink-0 mt-0.5" /> We can provide a written scope and estimate.</li>
              <li className="flex gap-2"><Shield className="w-4 h-4 text-[oklch(0.65_0.14_60)] shrink-0 mt-0.5" /> We can meet with your adjuster when appropriate.</li>
              <li className="flex gap-2"><Shield className="w-4 h-4 text-[oklch(0.65_0.14_60)] shrink-0 mt-0.5" /> Your insurance company makes all claim decisions.</li>
              <li className="flex gap-2"><Shield className="w-4 h-4 text-[oklch(0.65_0.14_60)] shrink-0 mt-0.5" /> We do not waive deductibles.</li>
              <li className="flex gap-2"><Shield className="w-4 h-4 text-[oklch(0.65_0.14_60)] shrink-0 mt-0.5" /> We do not provide insurance or legal advice.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[oklch(0.65_0.14_60)]">
        <div className="container text-center">
          <h2 className="text-3xl text-white mb-4">Need Roofing Help?</h2>
          <p className="text-white/80 text-lg mb-8">Free inspection. Honest answers. No obligation.</p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-white text-[oklch(0.30_0.07_250)] font-bold text-lg px-8 py-4 rounded-md hover:bg-white/90 transition-all active:scale-[0.97]"
          >
            Request Free Inspection <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
