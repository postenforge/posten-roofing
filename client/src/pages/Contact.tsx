import { useState } from "react";
import { Phone, Mail, Clock, CheckCircle } from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    city: "",
    zip: "",
    service: "",
    urgent: "",
    homeowner: "",
    insuranceContacted: "",
    contactMethod: "",
    timeOfDay: "",
    message: "",
    consent: false,
    honeypot: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return; // spam check
    // TODO: Connect to form backend (Resend, SendGrid, HubSpot, Airtable, etc.)
    setSubmitted(true);
    toast.success("Request submitted! We'll be in touch soon.");
  };

  const updateField = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted/30 pt-20">
        <div className="container max-w-lg text-center py-20">
          <div className="w-16 h-16 bg-[oklch(0.65_0.14_60)]/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-[oklch(0.65_0.14_60)]" />
          </div>
          <h1 className="text-3xl text-[oklch(0.20_0.015_250)] mb-4">Thank You</h1>
          <p className="text-muted-foreground text-lg mb-4">
            We received your request and will be in touch soon.
          </p>
          <div className="bg-white rounded-xl p-6 border border-border text-left mt-8">
            <h3 className="font-bold text-foreground mb-3 font-sans">What happens next:</h3>
            <ol className="space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2"><span className="font-bold text-[oklch(0.65_0.14_60)]">1.</span> We review your request and any photos.</li>
              <li className="flex gap-2"><span className="font-bold text-[oklch(0.65_0.14_60)]">2.</span> We contact you by your preferred method.</li>
              <li className="flex gap-2"><span className="font-bold text-[oklch(0.65_0.14_60)]">3.</span> We schedule a roof inspection if needed.</li>
              <li className="flex gap-2"><span className="font-bold text-[oklch(0.65_0.14_60)]">4.</span> We document visible issues with photos.</li>
              <li className="flex gap-2"><span className="font-bold text-[oklch(0.65_0.14_60)]">5.</span> You get clear repair or replacement options.</li>
            </ol>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-[oklch(0.20_0.015_250)] pt-28 pb-16">
        <div className="container">
          <p className="text-[oklch(0.65_0.14_60)] font-semibold text-sm uppercase tracking-wider mb-3">Contact Us</p>
          <h1 className="text-4xl md:text-5xl text-white mb-4">Request a Free Roof Inspection</h1>
          <p className="text-white/70 text-lg max-w-2xl">
            Tell us what's going on. We'll get back to you quickly with clear next steps - no pressure, no obligation.
          </p>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-white rounded-xl p-6 md:p-8 border border-border shadow-sm">
                {/* Honeypot */}
                <input
                  type="text"
                  name="website"
                  value={formData.honeypot}
                  onChange={(e) => updateField("honeypot", e.target.value)}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">First Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => updateField("firstName", e.target.value)}
                      className="w-full px-4 py-2.5 border border-border rounded-md focus:ring-2 focus:ring-[oklch(0.65_0.14_60)] focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Last Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => updateField("lastName", e.target.value)}
                      className="w-full px-4 py-2.5 border border-border rounded-md focus:ring-2 focus:ring-[oklch(0.65_0.14_60)] focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Phone *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => updateField("phone", e.target.value)}
                      className="w-full px-4 py-2.5 border border-border rounded-md focus:ring-2 focus:ring-[oklch(0.65_0.14_60)] focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      className="w-full px-4 py-2.5 border border-border rounded-md focus:ring-2 focus:ring-[oklch(0.65_0.14_60)] focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Property City</label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => updateField("city", e.target.value)}
                      className="w-full px-4 py-2.5 border border-border rounded-md focus:ring-2 focus:ring-[oklch(0.65_0.14_60)] focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">ZIP Code</label>
                    <input
                      type="text"
                      value={formData.zip}
                      onChange={(e) => updateField("zip", e.target.value)}
                      className="w-full px-4 py-2.5 border border-border rounded-md focus:ring-2 focus:ring-[oklch(0.65_0.14_60)] focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-foreground mb-1.5">What do you need help with?</label>
                  <select
                    value={formData.service}
                    onChange={(e) => updateField("service", e.target.value)}
                    className="w-full px-4 py-2.5 border border-border rounded-md focus:ring-2 focus:ring-[oklch(0.65_0.14_60)] focus:border-transparent outline-none transition-all bg-white"
                  >
                    <option value="">Select one...</option>
                    <option value="inspection">Free roof inspection</option>
                    <option value="repair">Roof repair</option>
                    <option value="replacement">Roof replacement</option>
                    <option value="storm">Storm damage</option>
                    <option value="hail">Hail damage</option>
                    <option value="wind">Wind damage</option>
                    <option value="leak">Roof leak</option>
                    <option value="insurance">Insurance claim help</option>
                    <option value="unsure">Not sure</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Is this urgent?</label>
                    <select
                      value={formData.urgent}
                      onChange={(e) => updateField("urgent", e.target.value)}
                      className="w-full px-4 py-2.5 border border-border rounded-md focus:ring-2 focus:ring-[oklch(0.65_0.14_60)] focus:border-transparent outline-none transition-all bg-white"
                    >
                      <option value="">-</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Preferred contact</label>
                    <select
                      value={formData.contactMethod}
                      onChange={(e) => updateField("contactMethod", e.target.value)}
                      className="w-full px-4 py-2.5 border border-border rounded-md focus:ring-2 focus:ring-[oklch(0.65_0.14_60)] focus:border-transparent outline-none transition-all bg-white"
                    >
                      <option value="">-</option>
                      <option value="call">Call</option>
                      <option value="text">Text</option>
                      <option value="email">Email</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5">Best time</label>
                    <select
                      value={formData.timeOfDay}
                      onChange={(e) => updateField("timeOfDay", e.target.value)}
                      className="w-full px-4 py-2.5 border border-border rounded-md focus:ring-2 focus:ring-[oklch(0.65_0.14_60)] focus:border-transparent outline-none transition-all bg-white"
                    >
                      <option value="">-</option>
                      <option value="morning">Morning</option>
                      <option value="afternoon">Afternoon</option>
                      <option value="evening">Evening</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-foreground mb-1.5">Message (optional)</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => updateField("message", e.target.value)}
                    placeholder="Tell us what's going on with your roof, or any questions you have..."
                    className="w-full px-4 py-2.5 border border-border rounded-md focus:ring-2 focus:ring-[oklch(0.65_0.14_60)] focus:border-transparent outline-none transition-all resize-none"
                  />
                </div>

                <div className="mb-6">
                  <label className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      required
                      checked={formData.consent}
                      onChange={(e) => updateField("consent", e.target.checked)}
                      className="mt-1 w-4 h-4 rounded border-border text-[oklch(0.65_0.14_60)] focus:ring-[oklch(0.65_0.14_60)]"
                    />
                    <span className="text-sm text-muted-foreground">
                      I agree to be contacted by Posten Roofing about my request.
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[oklch(0.65_0.14_60)] hover:bg-[oklch(0.58_0.14_60)] text-white font-bold py-4 rounded-md transition-all duration-150 active:scale-[0.98] text-lg"
                >
                  Request Free Roof Inspection
                </button>
              </form>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border border-border">
                <h3 className="font-bold text-foreground mb-4 font-sans">Quick Contact</h3>
                <div className="space-y-4">
                  <a href="tel:+16082175056" className="flex items-center gap-3 text-foreground hover:text-[oklch(0.65_0.14_60)] transition-colors">
                    <Phone className="w-5 h-5 text-[oklch(0.65_0.14_60)]" />
                    <span className="font-medium">(608) 217-5056</span>
                  </a>
                  <a href="mailto:info@postenroofing.com" className="flex items-center gap-3 text-foreground hover:text-[oklch(0.65_0.14_60)] transition-colors">
                    <Mail className="w-5 h-5 text-[oklch(0.65_0.14_60)]" />
                    <span className="font-medium">info@postenroofing.com</span>
                  </a>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Clock className="w-5 h-5 text-[oklch(0.65_0.14_60)]" />
                    <span className="text-sm">We respond within 1 business day</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-border">
                <h3 className="font-bold text-foreground mb-3 font-sans">What happens after you submit?</h3>
                <ol className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2"><span className="font-bold text-[oklch(0.65_0.14_60)]">1.</span> We review your request.</li>
                  <li className="flex gap-2"><span className="font-bold text-[oklch(0.65_0.14_60)]">2.</span> We reach out by your preferred method.</li>
                  <li className="flex gap-2"><span className="font-bold text-[oklch(0.65_0.14_60)]">3.</span> We schedule an inspection if needed.</li>
                  <li className="flex gap-2"><span className="font-bold text-[oklch(0.65_0.14_60)]">4.</span> You get photos and clear options.</li>
                </ol>
              </div>

              <div className="bg-[oklch(0.30_0.07_250)] rounded-xl p-6 text-white">
                <h3 className="font-bold mb-3 font-sans">Service Area</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  Serving Sun Prairie, Madison, DeForest, Waunakee, Cottage Grove, Windsor, Marshall, and nearby communities within ~35 minutes of Sun Prairie, WI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
