import { Link } from "wouter";
import { Phone, Shield, Camera, CloudRain, Wrench, Home as HomeIcon, FileCheck, Droplets, Wind, CheckCircle, ArrowRight } from "lucide-react";
import { useState } from "react";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663502408391/74KQnuSq8LqDRTPc7CwkAx/posten-hero-roof-9ohrRJktbi5872z2iuTsQg.webp";
const INSPECTION_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663502408391/74KQnuSq8LqDRTPc7CwkAx/posten-inspection-UsK9uo47qb7LeJgt325783.webp";
const STORM_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663502408391/74KQnuSq8LqDRTPc7CwkAx/posten-storm-damage-d2zCF2VBV8gJTptZPvwbe5.webp";
const NEIGHBORHOOD_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663502408391/74KQnuSq8LqDRTPc7CwkAx/posten-wisconsin-home-7oHFGdYUiax7D3ka6GgMmJ.webp";

const triageOptions = [
  { id: "leak", label: "I have a roof leak", icon: Droplets },
  { id: "shingles", label: "I lost shingles", icon: Wind },
  { id: "hail", label: "I had hail recently", icon: CloudRain },
  { id: "wind", label: "I had high winds", icon: Wind },
  { id: "old", label: "My roof looks old", icon: HomeIcon },
  { id: "buying", label: "I'm buying or selling a home", icon: FileCheck },
  { id: "insurance", label: "Insurance asked for an estimate", icon: Shield },
  { id: "unsure", label: "I'm not sure what I need", icon: Wrench },
];

const services = [
  { title: "Roof Repair", desc: "Fix leaks, missing shingles, and minor damage before it gets worse.", href: "/roof-repair", icon: Wrench },
  { title: "Roof Replacement", desc: "Full tear-off and replacement when repair isn't enough.", href: "/services", icon: HomeIcon },
  { title: "Storm Damage", desc: "Hail, wind, and storm damage inspections and documentation.", href: "/storm-damage", icon: CloudRain },
  { title: "Hail Damage", desc: "Identify and document hail bruising, granule loss, and cracked shingles.", href: "/storm-damage", icon: CloudRain },
  { title: "Insurance Claims Help", desc: "Photo documentation and written scope to support your claim.", href: "/services", icon: FileCheck },
  { title: "Roof Leak Help", desc: "Track down the source and stop it before it spreads.", href: "/roof-repair", icon: Droplets },
];

const serviceAreas = ["Sun Prairie", "Madison", "DeForest", "Waunakee", "Cottage Grove", "Windsor", "Marshall", "Columbus", "Beaver Dam", "Lake Mills"];

function TriageTool() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl text-[oklch(0.20_0.015_250)] mb-4 gold-underline-center">
            What's Going On With Your Roof?
          </h2>
          <p className="text-muted-foreground text-lg">
            Select what best describes your situation. We'll help you figure out the next step.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-4xl mx-auto">
          {triageOptions.map((opt) => {
            const Icon = opt.icon;
            return (
              <button
                key={opt.id}
                onClick={() => setSelected(opt.id)}
                className={`flex items-center gap-3 p-4 rounded-lg border-2 text-left transition-all duration-150 active:scale-[0.97] ${
                  selected === opt.id
                    ? "border-[oklch(0.65_0.14_60)] bg-[oklch(0.65_0.14_60)]/5"
                    : "border-border hover:border-[oklch(0.65_0.14_60)]/50 hover:bg-muted/50"
                }`}
              >
                <Icon className={`w-5 h-5 shrink-0 ${selected === opt.id ? "text-[oklch(0.65_0.14_60)]" : "text-muted-foreground"}`} />
                <span className="text-sm font-medium">{opt.label}</span>
              </button>
            );
          })}
        </div>

        {selected && (
          <div className="mt-8 max-w-2xl mx-auto text-center p-6 bg-muted/50 rounded-xl border border-border animate-in fade-in duration-300">
            <p className="text-foreground mb-4">
              We can help. A free inspection will give you a clear picture of your roof's condition - no pressure, no obligation.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[oklch(0.65_0.14_60)] hover:bg-[oklch(0.58_0.14_60)] text-white font-semibold px-6 py-3 rounded-md transition-all duration-150 active:scale-[0.97]"
              >
                Request Free Inspection
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+16082175056"
                className="inline-flex items-center justify-center gap-2 bg-[oklch(0.30_0.07_250)] hover:bg-[oklch(0.25_0.07_250)] text-white font-semibold px-6 py-3 rounded-md transition-all duration-150"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              This doesn't replace an in-person inspection. We'll give you clear next steps, not scare tactics.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Beautiful home with new roof at sunset" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.12_0.02_250)]/90 via-[oklch(0.12_0.02_250)]/70 to-transparent" />
        </div>
        <div className="container relative z-10 pt-24 pb-16">
          <div className="max-w-2xl">
            <p className="text-[oklch(0.65_0.14_60)] font-semibold text-sm uppercase tracking-wider mb-4">
              Serving Sun Prairie, Wisconsin & the Madison Metro
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Not Sure If Your Roof Needs Repair or Replacement?
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-8 leading-relaxed">
              Get a free roof inspection with honest answers. We'll document what we find, explain your options, and recommend repair when repair makes sense.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[oklch(0.65_0.14_60)] hover:bg-[oklch(0.58_0.14_60)] text-white font-bold text-lg px-8 py-4 rounded-md transition-all duration-150 active:scale-[0.97] shadow-lg"
              >
                Check My Roof
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+16082175056"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold text-lg px-8 py-4 rounded-md border border-white/20 transition-all duration-150"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-[oklch(0.30_0.07_250)] py-5">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { icon: Camera, text: "Free Inspections" },
              { icon: Shield, text: "Honest Assessments" },
              { icon: CloudRain, text: "Storm Damage Help" },
              { icon: Wrench, text: "Repair-First Approach" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.text} className="flex items-center justify-center gap-2 text-white/90">
                  <Icon className="w-4 h-4 text-[oklch(0.65_0.14_60)]" />
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Triage Tool */}
      <TriageTool />

      {/* Services Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl text-[oklch(0.20_0.015_250)] mb-4 gold-underline-center">
              Roofing Services
            </h2>
            <p className="text-muted-foreground text-lg">
              Residential roofing help for Sun Prairie, Madison, and surrounding Dane County communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc) => {
              const Icon = svc.icon;
              return (
                <Link
                  key={svc.title}
                  href={svc.href}
                  className="group bg-white p-6 rounded-xl border border-border hover:border-[oklch(0.65_0.14_60)]/50 hover:shadow-lg transition-all duration-200"
                >
                  <div className="w-12 h-12 rounded-lg bg-[oklch(0.65_0.14_60)]/10 flex items-center justify-center mb-4 group-hover:bg-[oklch(0.65_0.14_60)]/20 transition-colors">
                    <Icon className="w-6 h-6 text-[oklch(0.65_0.14_60)]" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2 font-sans">{svc.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{svc.desc}</p>
                  <span className="inline-flex items-center gap-1 text-[oklch(0.65_0.14_60)] text-sm font-semibold mt-4 group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Repair or Replace */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={STORM_IMG}
                alt="Storm damage on a residential roof showing missing shingles"
                className="rounded-xl shadow-lg w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl text-[oklch(0.20_0.015_250)] mb-4 gold-underline">
                Not Sure If You Need a Repair or a Full Replacement?
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Start with an honest inspection. We'll show you what we find, explain what it means, and help you understand whether repair, replacement, or just monitoring makes the most sense.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Missing or lifted shingles",
                  "Leaks or ceiling stains",
                  "Hail marks or granule loss",
                  "Soft spots or sagging areas",
                  "Aging roof nearing end of life",
                  "Recent storm damage",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[oklch(0.65_0.14_60)] shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[oklch(0.65_0.14_60)] hover:bg-[oklch(0.58_0.14_60)] text-white font-semibold px-6 py-3 rounded-md transition-all duration-150 active:scale-[0.97]"
              >
                Check My Roof
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-[oklch(0.20_0.015_250)]">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl text-white mb-4 gold-underline-center">
              How It Works
            </h2>
            <p className="text-white/70 text-lg">
              From first call to finished job - here's what to expect.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Request Inspection", desc: "Call, text, or fill out our form. We'll get back to you quickly." },
              { step: "02", title: "We Check the Roof", desc: "We inspect and document visible issues with photos." },
              { step: "03", title: "Get Clear Options", desc: "You get photos, a written explanation, and honest recommendations." },
              { step: "04", title: "Schedule Work", desc: "If repair or replacement makes sense, we handle it start to finish." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="text-[oklch(0.65_0.14_60)] text-4xl font-bold font-sans mb-3">{item.step}</div>
                <h3 className="text-white font-bold text-lg mb-2 font-sans">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inspection Image + Objection Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl text-[oklch(0.20_0.015_250)] mb-4 gold-underline">
                Worried a Roofer Will Just Try to Sell You a New Roof?
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                We get it. Many homeowners delay calling because they don't want a high-pressure sales pitch. We start with the actual roof issue - what happened, what we can see, what it likely means, and whether repair, replacement, or monitoring is the practical next step.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "We explain before we recommend",
                  "We document visible damage with photos",
                  "We don't promise insurance outcomes",
                  "We don't push replacement when repair makes sense",
                  "We help you understand your options clearly",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[oklch(0.65_0.14_60)] shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img
                src={INSPECTION_IMG}
                alt="Roofing contractor performing a thorough roof inspection"
                className="rounded-xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-muted/30">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-4xl text-center text-[oklch(0.20_0.015_250)] mb-12 gold-underline-center">
            A Different Kind of Roofing Call
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 border border-border">
              <h3 className="font-bold text-lg text-muted-foreground mb-4 font-sans uppercase text-sm tracking-wider">Typical Roofing Call</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2"><span className="text-destructive mt-0.5">✕</span> Vague estimate over the phone</li>
                <li className="flex items-start gap-2"><span className="text-destructive mt-0.5">✕</span> Pressure to replace immediately</li>
                <li className="flex items-start gap-2"><span className="text-destructive mt-0.5">✕</span> Confusing insurance talk</li>
                <li className="flex items-start gap-2"><span className="text-destructive mt-0.5">✕</span> Generic sales pitch</li>
                <li className="flex items-start gap-2"><span className="text-destructive mt-0.5">✕</span> Hard to reach after the sale</li>
              </ul>
            </div>
            <div className="bg-[oklch(0.30_0.07_250)] rounded-xl p-6 border border-[oklch(0.65_0.14_60)]/30">
              <h3 className="font-bold text-lg text-[oklch(0.65_0.14_60)] mb-4 font-sans uppercase text-sm tracking-wider">Posten Roofing</h3>
              <ul className="space-y-3 text-white/90">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[oklch(0.65_0.14_60)] mt-0.5 shrink-0" /> Photo-based explanation of issues</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[oklch(0.65_0.14_60)] mt-0.5 shrink-0" /> Repair-first when appropriate</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[oklch(0.65_0.14_60)] mt-0.5 shrink-0" /> Careful documentation, no promises</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[oklch(0.65_0.14_60)] mt-0.5 shrink-0" /> Clear next steps you can understand</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[oklch(0.65_0.14_60)] mt-0.5 shrink-0" /> Call, text, or form - your choice</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="relative py-20">
        <div className="absolute inset-0">
          <img src={NEIGHBORHOOD_IMG} alt="Wisconsin residential neighborhood" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[oklch(0.12_0.02_250)]/85" />
        </div>
        <div className="container relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-3xl md:text-4xl text-white mb-4 gold-underline-center">
              Serving Sun Prairie, Madison & Surrounding Communities
            </h2>
            <p className="text-white/70 text-lg">
              Local roofing help for Dane County and select nearby communities within about 35–40 minutes of Sun Prairie, Wisconsin.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {serviceAreas.map((area) => (
              <span
                key={area}
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium"
              >
                {area}
              </span>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/service-areas"
              className="inline-flex items-center gap-2 text-[oklch(0.65_0.14_60)] hover:text-white font-semibold transition-colors"
            >
              View All Service Areas <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-20 bg-white">
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl text-[oklch(0.20_0.015_250)] mb-6 gold-underline-center">
            Built on a Family Roofing Background
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Posten Roofing is built on hands-on experience helping run a family roofing company. That background means we understand what good work looks like - from the initial inspection through final cleanup. We brought that same standard to Wisconsin.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-[oklch(0.65_0.14_60)] hover:text-[oklch(0.58_0.14_60)] font-semibold transition-colors"
          >
            Learn More About Us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-[oklch(0.65_0.14_60)]">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl text-white mb-4">
            Ready to Get Your Roof Checked?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Free inspection. Honest answers. No pressure. Serving Sun Prairie, Madison, and surrounding communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-[oklch(0.30_0.07_250)] font-bold text-lg px-8 py-4 rounded-md hover:bg-white/90 transition-all duration-150 active:scale-[0.97]"
            >
              Request Free Inspection
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+16082175056"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-lg px-8 py-4 rounded-md border border-white/30 transition-all duration-150"
            >
              <Phone className="w-5 h-5" />
              (608) 217-5056
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
