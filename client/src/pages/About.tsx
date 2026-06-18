import { Link } from "wouter";
import { ArrowRight, CheckCircle } from "lucide-react";

const INSPECTION_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663502408391/74KQnuSq8LqDRTPc7CwkAx/posten-inspection-UsK9uo47qb7LeJgt325783.webp";

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[oklch(0.20_0.015_250)] pt-28 pb-16">
        <div className="container">
          <p className="text-[oklch(0.65_0.14_60)] font-semibold text-sm uppercase tracking-wider mb-3">About Us</p>
          <h1 className="text-4xl md:text-5xl text-white mb-4">Family Roofing Background.<br />Wisconsin Service.</h1>
          <p className="text-white/70 text-lg max-w-2xl">
            Posten Roofing is a service-area residential roofing company serving Sun Prairie, Madison, Dane County, and nearby communities.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl text-[oklch(0.20_0.015_250)] mb-6 gold-underline">
                How We Got Here
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Matt Posten helped build and operate a family roofing company — learning the trade from the ground up. From climbing ladders to managing full replacement projects, that experience shaped how Posten Roofing operates today.
                </p>
                <p>
                  When it came time to bring that same approach to Wisconsin, the priority was simple: do honest work, communicate clearly, and treat every homeowner's roof like it matters — because it does.
                </p>
                <p>
                  Posten Roofing focuses on residential roofing in and around Sun Prairie and Madison. We handle repairs, replacements, storm damage inspections, and insurance documentation support. We don't cut corners, and we don't push services people don't need.
                </p>
              </div>
            </div>
            <div>
              <img
                src={INSPECTION_IMG}
                alt="Roofing professional conducting a thorough inspection"
                className="rounded-xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/30">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-4xl text-center text-[oklch(0.20_0.015_250)] mb-12 gold-underline-center">
            What We Stand For
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Honest Inspections", desc: "We document what we see with photos and explain it in plain language. If your roof is fine, we'll tell you." },
              { title: "Repair-First Mindset", desc: "Not every roof issue needs a full replacement. When repair makes sense, that's what we recommend." },
              { title: "Clear Communication", desc: "You'll know what's happening at every step. No ghosting, no runaround, no confusing jargon." },
              { title: "Clean Job Sites", desc: "We pick up after ourselves — nails, debris, packaging, all of it. Your property should look better when we leave." },
              { title: "Family Background", desc: "Roofing isn't just a job we picked up. It's a trade we learned hands-on through a family business." },
              { title: "Local Accountability", desc: "We serve the communities around us. Our reputation here matters to us personally." },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-[oklch(0.65_0.14_60)] shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-foreground mb-1 font-sans">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[oklch(0.65_0.14_60)]">
        <div className="container text-center">
          <h2 className="text-3xl text-white mb-4">Want to Talk About Your Roof?</h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            We're happy to answer questions, schedule a free inspection, or just point you in the right direction.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-white text-[oklch(0.30_0.07_250)] font-bold text-lg px-8 py-4 rounded-md hover:bg-white/90 transition-all active:scale-[0.97]"
          >
            Get In Touch <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
