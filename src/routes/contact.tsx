import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/site/PageHeader";
import { site, telHref } from "@/data/site";
import { waLink } from "@/lib/whatsapp";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us & Directions — PizzaHub Gurugram" },
      {
        name: "description",
        content:
          "Call PizzaHub on 8796130029, order on WhatsApp, or get directions to Sector 4, Gurugram.",
      },
      { property: "og:title", content: "Contact PizzaHub Gurugram" },
      {
        property: "og:description",
        content: "Call, WhatsApp or find PizzaHub on Google Maps.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [name, setName] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [subject, setSubject] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi PizzaHub!\nName: ${name}\nPhone: ${phoneNum}\nSubject: ${subject}\nMessage: ${msg}`;
    window.open(waLink(text), "_blank");
  };

  return (
    <div className="bg-[#121618] text-white min-h-screen">
      <PageHeader
        eyebrow="Get In Touch"
        title="Contact Us"
        bgImage="/images/bg_2.jpg"
      >
        We'd love to hear from you. Stop by, give us a call, or send us a WhatsApp message.
      </PageHeader>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
        {/* Contact Info Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-16">
          <div className="p-6 rounded-xl bg-[#15191b] border border-white/10 hover:border-[#fac564]/50 transition-colors">
            <span className="grid size-12 place-items-center rounded-full bg-[#fac564]/10 text-[#fac564] border border-[#fac564]/30 mb-4">
              <MapPin className="size-5" />
            </span>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Address
            </h4>
            <p className="mt-1 text-xs text-white/60">
              Sector 4, Gurugram, Haryana - 122006
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#15191b] border border-white/10 hover:border-[#fac564]/50 transition-colors">
            <span className="grid size-12 place-items-center rounded-full bg-[#fac564]/10 text-[#fac564] border border-[#fac564]/30 mb-4">
              <Phone className="size-5" />
            </span>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Phone
            </h4>
            <a href={telHref} className="mt-1 text-xs text-white/60 hover:text-[#fac564] block">
              {site.phone}
            </a>
          </div>

          <div className="p-6 rounded-xl bg-[#15191b] border border-white/10 hover:border-[#fac564]/50 transition-colors">
            <span className="grid size-12 place-items-center rounded-full bg-[#fac564]/10 text-[#fac564] border border-[#fac564]/30 mb-4">
              <MessageCircle className="size-5 text-[#25d366]" />
            </span>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              WhatsApp
            </h4>
            <a
              href={waLink("Hi PizzaHub!")}
              target="_blank"
              rel="noreferrer"
              className="mt-1 text-xs text-white/60 hover:text-[#25d366] block"
            >
              Direct Chat Active
            </a>
          </div>

          <div className="p-6 rounded-xl bg-[#15191b] border border-white/10 hover:border-[#fac564]/50 transition-colors">
            <span className="grid size-12 place-items-center rounded-full bg-[#fac564]/10 text-[#fac564] border border-[#fac564]/30 mb-4">
              <Clock className="size-5" />
            </span>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Hours
            </h4>
            <p className="mt-1 text-xs text-white/60">
              Everyday: 11:00 AM – 11:00 PM
            </p>
          </div>
        </div>

        {/* Form and Map Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="p-8 sm:p-10 rounded-xl bg-[#15191b] border border-white/10 shadow-xl">
            <span className="font-cursive text-xl text-[#fac564]">
              Leave A Note
            </span>
            <h3 className="font-display text-2xl font-bold uppercase tracking-wider text-white mt-1 mb-6">
              Send Us A Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                    className="w-full bg-[#0e1113] border border-white/15 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-[#fac564] focus:outline-none"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    required
                    value={phoneNum}
                    onChange={(e) => setPhoneNum(e.target.value)}
                    placeholder="Phone Number"
                    className="w-full bg-[#0e1113] border border-white/15 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-[#fac564] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <input
                  type="text"
                  required
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Subject (Party booking, Home delivery, Feedback)"
                  className="w-full bg-[#0e1113] border border-white/15 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-[#fac564] focus:outline-none"
                />
              </div>

              <div>
                <textarea
                  rows={5}
                  required
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                  placeholder="How can we help you?"
                  className="w-full bg-[#0e1113] border border-white/15 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-[#fac564] focus:outline-none resize-none"
                />
              </div>

              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full py-3.5 text-xs uppercase font-bold tracking-widest"
              >
                <Send className="size-4 mr-2" /> Send To Restaurant On WhatsApp
              </Button>
            </form>
          </div>

          {/* Map Overview Card */}
          <div className="space-y-6">
            <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#15191b] p-8 text-center space-y-4">
              <span className="grid size-16 mx-auto place-items-center rounded-full bg-[#fac564]/10 text-[#fac564] border border-[#fac564]/30">
                <MapPin className="size-8" />
              </span>
              <h3 className="font-display text-2xl font-bold uppercase tracking-wider text-white">
                Find Us on Google Maps
              </h3>
              <p className="text-sm text-white/70 max-w-md mx-auto leading-relaxed">
                Located conveniently in Sector 4, Gurugram. Ample parking space available for dine-in and takeout customers.
              </p>
              <div className="pt-2">
                <Button
                  variant="outlineWhite"
                  size="lg"
                  className="px-8 text-xs uppercase font-bold tracking-widest"
                  asChild
                >
                  <a href={site.mapsUrl} target="_blank" rel="noreferrer">
                    Launch Navigation
                  </a>
                </Button>
              </div>
            </div>

            <div className="relative aspect-video overflow-hidden rounded-xl border border-white/10">
              <img
                src="/images/bg_4.jpg"
                alt="Restaurant Location Ambience"
                className="size-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <span className="font-display text-lg uppercase font-bold tracking-widest bg-black/80 px-6 py-2.5 border border-[#fac564] text-[#fac564]">
                  Sector 4, Gurugram
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
