import { Link } from "wouter";
import { ArrowRight, CheckCircle, Wrench, Droplets, AlertTriangle } from "lucide-react";

const STORM_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663502408391/74KQnuSq8LqDRTPc7CwkAx/posten-storm-damage-d2zCF2VBV8gJTptZPvwbe5.webp";

export default function RoofRepair() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[oklch(0.20_0.015_250)] pt-28 pb-16">
        <div className="container">
          <p className="text-[oklch(0.65_0.14_60)] font-semibold text-sm uppercase tracking-wider mb-3">Roof Repair</p>
          <h1 className="text-4xl md:text-5xl text-white mb-4">Fix It Before It Gets Worse</h1>
          <p className="text-white/70 text-lg max-w-2xl">
            Not every roof issue means a full replacement. We repair what can be repaired — and we'll tell you honestly when it can't.
          </p>
        </div>
      </section>

      {/* When to repair */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl text-[oklch(0.20_0.015_250)] mb-6 gold-underline">
                When Does Repair Make Sense?
              </h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                Repair is usually the right call when the damage is localized and the rest of the roof still has life left. Here are common situations where repair makes sense:
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "A few missing or lifted shingles",
                  "Small leak around a pipe boot or flashing",
                  "Wind damage to one section",
                  "Cracked or curling shingles in one area",
                  "Gutter or edge damage from ice or debris",
                  "Minor wear on a roof that's otherwise solid",
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
                Request Repair Inspection <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div>
              <img src={STORM_IMG} alt="Roof damage showing missing shingles" className="rounded-xl shadow-lg w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Common Repairs */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl md:text-4xl text-center text-[oklch(0.20_0.015_250)] mb-12 gold-underline-center">
            Common Roof Repairs We Handle
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Wrench, title: "Shingle Replacement", desc: "Replace missing, cracked, or wind-damaged shingles to restore protection." },
              { icon: Droplets, title: "Leak Repair", desc: "Track down the source of a leak and fix it — pipe boots, flashing, valleys, or penetrations." },
              { icon: AlertTriangle, title: "Flashing Repair", desc: "Fix or replace flashing around chimneys, walls, skylights, and vents." },
              { icon: Wrench, title: "Ridge Cap Repair", desc: "Replace blown-off or damaged ridge cap shingles along the roof peak." },
              { icon: Droplets, title: "Pipe Boot Repair", desc: "Replace cracked or deteriorated pipe boot seals — a very common leak source." },
              { icon: AlertTriangle, title: "Emergency Tarping", desc: "Temporary protection to prevent further water damage until permanent repair is possible." },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="bg-white p-6 rounded-xl border border-border">
                  <Icon className="w-8 h-8 text-[oklch(0.65_0.14_60)] mb-3" />
                  <h3 className="font-bold text-foreground mb-2 font-sans">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Repair vs Replace */}
      <section className="py-20 bg-white">
        <div className="container max-w-3xl">
          <h2 className="text-3xl md:text-4xl text-center text-[oklch(0.20_0.015_250)] mb-8 gold-underline-center">
            Repair vs. Replace — How We Help You Decide
          </h2>
          <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
            <p>
              We don't push replacement when repair makes sense. But we also won't patch a roof that's past its useful life just to save you money today — because that usually costs more in the long run.
            </p>
            <p>
              Here's our general approach: if the damage is localized, the surrounding shingles are in decent shape, and the roof has meaningful life left, repair is usually the right call. If the damage is widespread, the roof is aging, or we're seeing systemic issues (multiple leak points, widespread granule loss, soft decking), replacement may be the more practical path.
            </p>
            <p>
              Either way, we'll show you what we found, explain what it means, and give you clear options so you can make an informed decision.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[oklch(0.65_0.14_60)]">
        <div className="container text-center">
          <h2 className="text-3xl text-white mb-4">Think Your Roof Needs Repair?</h2>
          <p className="text-white/80 text-lg mb-8">We'll inspect it, document what we find, and give you honest options.</p>
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
