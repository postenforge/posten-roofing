import { Link } from "wouter";
import { ArrowRight, CheckCircle, CloudRain, Wind, AlertTriangle, Camera, Shield, Phone } from "lucide-react";
import SEO from "@/components/SEO";

const STORM_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663502408391/74KQnuSq8LqDRTPc7CwkAx/posten-storm-damage-d2zCF2VBV8gJTptZPvwbe5.webp";

export default function StormDamage() {
  return (
    <div>
      <SEO
        title="Storm Damage Roof Inspection | Hail & Wind Damage - Posten Roofing, Sun Prairie WI"
        description="Free storm damage roof inspection in Sun Prairie, Madison, and Dane County. Hail damage, wind damage, and severe weather assessment with photo documentation for insurance claims."
        canonical="https://postenroofing.com/storm-damage"
      />
      {/* Hero */}
      <section className="bg-[oklch(0.20_0.015_250)] pt-28 pb-16">
        <div className="container">
          <p className="text-[oklch(0.65_0.14_60)] font-semibold text-sm uppercase tracking-wider mb-3">Storm Damage</p>
          <h1 className="text-4xl md:text-5xl text-white mb-4">Had a Storm? Here's What to Do.</h1>
          <p className="text-white/70 text-lg max-w-2xl">
            Hail, wind, and severe weather can damage your roof in ways that aren't always visible from the ground. We inspect, document, and help you understand your options.
          </p>
        </div>
      </section>

      {/* After a Storm */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl text-[oklch(0.20_0.015_250)] mb-6 gold-underline">
                After a Storm - What to Look For
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                You don't need to climb on your roof. Here are ground-level signs that storm damage may have occurred:
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Shingles or pieces of shingles in the yard",
                  "Dents on gutters, downspouts, or AC units",
                  "Granules (sand-like material) in gutters or at downspout exits",
                  "Visible gaps or lifted areas on the roof",
                  "New ceiling stains or drips after rain",
                  "Neighbors getting roof work done",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <AlertTriangle className="w-5 h-5 text-[oklch(0.65_0.14_60)] shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[oklch(0.65_0.14_60)] hover:bg-[oklch(0.58_0.14_60)] text-white font-semibold px-6 py-3 rounded-md transition-all active:scale-[0.97]"
                >
                  Request Storm Inspection <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="tel:+16082175056"
                  className="inline-flex items-center gap-2 bg-[oklch(0.30_0.07_250)] hover:bg-[oklch(0.25_0.07_250)] text-white font-semibold px-6 py-3 rounded-md transition-all"
                >
                  <Phone className="w-4 h-4" /> Call Now
                </a>
              </div>
            </div>
            <div>
              <img src={STORM_IMG} alt="Storm damage on residential roof" className="rounded-xl shadow-lg w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Types of Storm Damage */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl md:text-4xl text-center text-[oklch(0.20_0.015_250)] mb-12 gold-underline-center">
            Types of Storm Damage
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-xl border border-border">
              <CloudRain className="w-10 h-10 text-[oklch(0.65_0.14_60)] mb-4" />
              <h3 className="font-bold text-foreground text-lg mb-3 font-sans">Hail Damage</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Bruised or cracked shingles</li>
                <li>• Granule loss (exposed mat)</li>
                <li>• Dented flashing and vents</li>
                <li>• Soft spots from impact</li>
                <li>• Often not visible from ground</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl border border-border">
              <Wind className="w-10 h-10 text-[oklch(0.65_0.14_60)] mb-4" />
              <h3 className="font-bold text-foreground text-lg mb-3 font-sans">Wind Damage</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Lifted or creased shingles</li>
                <li>• Broken seal strips</li>
                <li>• Missing shingles or pieces</li>
                <li>• Exposed underlayment</li>
                <li>• Ridge cap damage</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl border border-border">
              <AlertTriangle className="w-10 h-10 text-[oklch(0.65_0.14_60)] mb-4" />
              <h3 className="font-bold text-foreground text-lg mb-3 font-sans">Other Storm Damage</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Fallen tree limbs or debris</li>
                <li>• Ice dam damage</li>
                <li>• Gutter and fascia damage</li>
                <li>• Skylight or vent damage</li>
                <li>• Water intrusion from any source</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-4xl text-center text-[oklch(0.20_0.015_250)] mb-12 gold-underline-center">
            Our Storm Damage Process
          </h2>
          <div className="space-y-8">
            {[
              { icon: Camera, title: "Inspect & Document", desc: "We get on the roof and document visible damage with photos. We note what we see, where it is, and what it likely means." },
              { icon: Shield, title: "Explain Your Options", desc: "We walk you through what we found. If the damage is minor, we'll tell you. If it warrants a claim, we'll explain that too." },
              { icon: CheckCircle, title: "Support Your Claim (If Applicable)", desc: "If you file a claim, we can provide documentation and meet with your adjuster. Your insurance company makes all claim decisions - we just provide evidence." },
              { icon: AlertTriangle, title: "Complete the Work", desc: "Whether it's a targeted repair or a full replacement, we handle the work from start to finish with clean job sites and clear communication." },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex gap-5">
                  <div className="w-12 h-12 rounded-lg bg-[oklch(0.65_0.14_60)]/10 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-[oklch(0.65_0.14_60)]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg mb-1 font-sans">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Insurance Note */}
      <section className="py-16 bg-muted/30">
        <div className="container max-w-3xl">
          <div className="bg-white rounded-xl p-6 border border-border">
            <h3 className="font-bold text-foreground text-lg mb-3 font-sans">A Note About Insurance</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We help homeowners document storm damage for insurance purposes. Here's what that means:
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-[oklch(0.65_0.14_60)] shrink-0 mt-0.5" /> We document visible damage with photos</li>
              <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-[oklch(0.65_0.14_60)] shrink-0 mt-0.5" /> We provide written scope and estimates</li>
              <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-[oklch(0.65_0.14_60)] shrink-0 mt-0.5" /> We can meet with your adjuster</li>
              <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-[oklch(0.65_0.14_60)] shrink-0 mt-0.5" /> Your insurance company makes all claim decisions</li>
              <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-[oklch(0.65_0.14_60)] shrink-0 mt-0.5" /> We do not waive deductibles or provide insurance advice</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[oklch(0.65_0.14_60)]">
        <div className="container text-center">
          <h2 className="text-3xl text-white mb-4">Had a Storm Recently?</h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Get a free storm damage inspection. We'll document what we find and help you understand your next steps.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-[oklch(0.30_0.07_250)] font-bold text-lg px-8 py-4 rounded-md hover:bg-white/90 transition-all active:scale-[0.97]"
            >
              Request Storm Inspection <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+16082175056"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-lg px-8 py-4 rounded-md border border-white/30 transition-all"
            >
              <Phone className="w-5 h-5" /> Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
