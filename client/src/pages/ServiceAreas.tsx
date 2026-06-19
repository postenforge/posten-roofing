import { Link } from "wouter";
import { ArrowRight, MapPin } from "lucide-react";

const NEIGHBORHOOD_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663502408391/74KQnuSq8LqDRTPc7CwkAx/posten-wisconsin-home-7oHFGdYUiax7D3ka6GgMmJ.webp";

const primaryAreas = [
  { name: "Sun Prairie", desc: "Our home base. We know Sun Prairie roofs - the neighborhoods, the weather patterns, and the common issues homeowners face here." },
  { name: "Madison", desc: "Serving Madison's diverse housing stock from older homes near the isthmus to newer construction on the edges." },
  { name: "DeForest", desc: "Growing community with a mix of newer builds and established homes. We're right down the road." },
  { name: "Waunakee", desc: "Quality homes that deserve quality roofing care. We serve Waunakee and surrounding areas regularly." },
  { name: "Cottage Grove", desc: "East side of Dane County - close to us and well within our primary service area." },
  { name: "Windsor", desc: "Right between Sun Prairie and DeForest. We're in this area frequently." },
  { name: "Marshall", desc: "Small community, big commitment to doing right by our neighbors here." },
];

const additionalAreas = [
  { name: "Columbus", desc: "Just north of our primary area. We're happy to help Columbus homeowners with roofing needs." },
  { name: "Beaver Dam", desc: "A bit further out but within reach for the right projects." },
  { name: "Lake Mills", desc: "Lake-area homes face unique wind exposure. We can help." },
  { name: "Waterloo", desc: "Between Sun Prairie and our extended service area - easy for us to reach." },
  { name: "Cambridge", desc: "South of Sun Prairie and within our comfortable drive range." },
  { name: "Deerfield", desc: "Close to our core area. Happy to serve Deerfield homeowners." },
];

export default function ServiceAreas() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-28 pb-16">
        <div className="absolute inset-0">
          <img src={NEIGHBORHOOD_IMG} alt="Wisconsin residential neighborhood" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[oklch(0.12_0.02_250)]/85" />
        </div>
        <div className="container relative z-10">
          <p className="text-[oklch(0.65_0.14_60)] font-semibold text-sm uppercase tracking-wider mb-3">Service Areas</p>
          <h1 className="text-4xl md:text-5xl text-white mb-4">Where We Work</h1>
          <p className="text-white/70 text-lg max-w-2xl">
            Serving Sun Prairie, Madison, Dane County, and select nearby communities within about 35–40 minutes of Sun Prairie, Wisconsin.
          </p>
        </div>
      </section>

      {/* Primary Areas */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-3xl md:text-4xl text-[oklch(0.20_0.015_250)] mb-4 gold-underline">
            Primary Service Area
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl">
            These are the communities we serve most frequently. If you're here, we're close by.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {primaryAreas.map((area) => (
              <div key={area.name} className="p-5 rounded-xl border border-border hover:border-[oklch(0.65_0.14_60)]/50 hover:shadow-md transition-all">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-[oklch(0.65_0.14_60)]" />
                  <h3 className="font-bold text-foreground font-sans">{area.name}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Areas */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl md:text-4xl text-[oklch(0.20_0.015_250)] mb-4 gold-underline">
            Additional Service Areas
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl">
            We also serve select nearby communities within about 35–40 minutes of Sun Prairie.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalAreas.map((area) => (
              <div key={area.name} className="p-5 rounded-xl border border-border hover:border-[oklch(0.65_0.14_60)]/50 hover:shadow-md transition-all bg-white">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-[oklch(0.65_0.14_60)]" />
                  <h3 className="font-bold text-foreground font-sans">{area.name}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Not sure */}
      <section className="py-16 bg-white">
        <div className="container max-w-2xl text-center">
          <h2 className="text-2xl text-[oklch(0.20_0.015_250)] mb-4">Not sure if you're in our area?</h2>
          <p className="text-muted-foreground mb-6">
            If you're in or near Dane County, there's a good chance we can help. Just reach out and we'll let you know.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[oklch(0.65_0.14_60)] hover:bg-[oklch(0.58_0.14_60)] text-white font-semibold px-6 py-3 rounded-md transition-all active:scale-[0.97]"
          >
            Contact Us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
