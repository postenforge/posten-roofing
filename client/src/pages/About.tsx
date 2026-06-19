import { Link } from "wouter";
import { ArrowRight, CheckCircle, Heart } from "lucide-react";
import SEO from "@/components/SEO";

const PROFILE_IMG = "/manus-storage/profile-pic_9f76902a.jpg";
const COUPLE_IMG = "/manus-storage/family-couple_90724bc6.jpg";
const SON_IMG = "/manus-storage/family-son_a61fab77.jpg";
const DAUGHTER_DOG_IMG = "/manus-storage/family-dog3_39ca85b7.jpg";
const COCONUT_IMG = "/manus-storage/family-dog1_a3c2e8ce.jpg";
const BERNEDOODLE_COUCH_IMG = "/manus-storage/family-dog2_73b9b218.jpg";
const BERNEDOODLE_CAR_IMG = "/manus-storage/family-bernedoodle_f392f069.jpg";

export default function About() {
  return (
    <div>
      <SEO
        title="About Matt Posten | Posten Roofing - Sun Prairie & Madison, WI"
        description="Meet Matt Posten - originally from Texas, raised in the family roofing business since 2003. Now serving Sun Prairie, Madison, and Dane County, Wisconsin with honest residential roofing."
        canonical="https://postenroofing.com/about"
      />
      {/* Hero */}
      <section className="bg-[oklch(0.20_0.015_250)] pt-28 pb-16">
        <div className="container">
          <p className="text-[oklch(0.65_0.14_60)] font-semibold text-sm uppercase tracking-wider mb-3">About</p>
          <h1 className="text-4xl md:text-5xl text-white mb-4">Meet Matt Posten</h1>
          <p className="text-white/70 text-lg max-w-2xl">
            Roofing since 2003. Family man. Community-first.
          </p>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            {/* Photo */}
            <div className="lg:col-span-2">
              <div className="sticky top-28">
                <img
                  src={PROFILE_IMG}
                  alt="Matt Posten, owner of Posten Roofing"
                  className="rounded-xl shadow-lg w-full max-w-sm mx-auto lg:mx-0"
                />
                <div className="mt-6 text-center lg:text-left">
                  <p className="font-bold text-xl text-[oklch(0.20_0.015_250)]">Matt Posten</p>
                  <p className="text-muted-foreground">Owner, Posten Roofing</p>
                </div>
              </div>
            </div>

            {/* Story */}
            <div className="lg:col-span-3">
              <h2 className="text-3xl md:text-4xl text-[oklch(0.20_0.015_250)] mb-6 gold-underline">
                My Story
              </h2>
              <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
                <p>
                  I'm originally from Texas, where I grew up in my family's roofing and construction business - Above All Roofing & Construction. I've been around roofing since 2003. From climbing ladders as a teenager to managing full projects, this trade is in my blood.
                </p>
                <p>
                  I married my wife Jennifer in 2008, and together we have two kids - Braden and Elaina. We also have a full house with three Bernedoodles (Ruthy, Bear, and Maverick) and a Bichon Frise named Coconut. Life is busy and we wouldn't have it any other way.
                </p>
                <p>
                  Posten Roofing was created out of a passion for roofing and a desire to serve our community here in Wisconsin. After years of doing this work in Texas, I wanted to bring that same hands-on, honest approach to Sun Prairie and the Madison metro area.
                </p>
                <p>
                  I believe in doing right by people. That means honest inspections, clear communication, and recommending repair when repair makes sense - not pushing a full replacement when you don't need one.
                </p>
              </div>

              {/* Community Section */}
              <div className="mt-12 p-6 bg-[oklch(0.97_0.005_80)] rounded-xl border border-[oklch(0.65_0.14_60)]/20">
                <div className="flex items-start gap-4">
                  <Heart className="w-8 h-8 text-[oklch(0.65_0.14_60)] shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-xl text-[oklch(0.20_0.015_250)] mb-2">Giving Back</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      A portion of Posten Roofing's proceeds will be used to provide humanitarian services to those in need in our local community. This business isn't just about roofs - it's about building something that makes a difference where we live.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Family Gallery */}
      <section className="py-20 bg-[oklch(0.97_0.003_250)]">
        <div className="container">
          <h2 className="text-3xl md:text-4xl text-center text-[oklch(0.20_0.015_250)] mb-4 gold-underline-center">
            The Family Behind the Business
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            When I'm not on a roof, I'm with my family. They're the reason I do what I do.
          </p>

          {/* Photo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {/* Large couple photo */}
            <div className="col-span-2 md:col-span-1 md:row-span-2">
              <img
                src={COUPLE_IMG}
                alt="Matt and Jennifer Posten"
                className="rounded-xl shadow-md w-full h-full object-cover"
              />
            </div>
            {/* Braden */}
            <div>
              <img
                src={SON_IMG}
                alt="Braden Posten"
                className="rounded-xl shadow-md w-full h-64 object-cover object-top"
              />
              <p className="text-sm text-muted-foreground mt-2 text-center">Braden</p>
            </div>
            {/* Elaina with dog */}
            <div>
              <img
                src={DAUGHTER_DOG_IMG}
                alt="Elaina Posten hiking with one of the Bernedoodles"
                className="rounded-xl shadow-md w-full h-64 object-cover object-top"
              />
              <p className="text-sm text-muted-foreground mt-2 text-center">Elaina</p>
            </div>
            {/* Coconut */}
            <div>
              <img
                src={COCONUT_IMG}
                alt="Coconut the Bichon Frise"
                className="rounded-xl shadow-md w-full h-64 object-cover object-center"
              />
              <p className="text-sm text-muted-foreground mt-2 text-center">Coconut</p>
            </div>
            {/* Bernedoodle on couch */}
            <div>
              <img
                src={BERNEDOODLE_COUCH_IMG}
                alt="One of the Bernedoodles relaxing on the couch"
                className="rounded-xl shadow-md w-full h-64 object-cover object-top"
              />
              <p className="text-sm text-muted-foreground mt-2 text-center">Bear</p>
            </div>
            {/* Bernedoodle in car */}
            <div className="col-span-2 md:col-span-1">
              <img
                src={BERNEDOODLE_CAR_IMG}
                alt="Ruthy the Bernedoodle"
                className="rounded-xl shadow-md w-full h-64 object-cover object-top"
              />
              <p className="text-sm text-muted-foreground mt-2 text-center">Ruthy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-4xl text-center text-[oklch(0.20_0.015_250)] mb-12 gold-underline-center">
            How I Run This Business
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Honest Inspections", desc: "I document what I see with photos and explain it in plain language. If your roof is fine, I'll tell you." },
              { title: "Repair-First Mindset", desc: "Not every roof issue needs a full replacement. When repair makes sense, that's what I recommend." },
              { title: "Clear Communication", desc: "You'll know what's happening at every step. No ghosting, no runaround, no confusing jargon." },
              { title: "Clean Job Sites", desc: "We pick up after ourselves - nails, debris, packaging, all of it. Your property should look better when we leave." },
              { title: "20+ Years of Experience", desc: "I've been around roofing since 2003. This isn't something I picked up recently - it's a trade I grew up in." },
              { title: "Local Accountability", desc: "I live here. My family lives here. Our reputation in this community matters to us personally." },
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
            I'm happy to answer questions, schedule a free inspection, or just point you in the right direction.
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
