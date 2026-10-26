import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/site/PageHeader";
import { Heart, Bike, Pizza, Star } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — PizzaHub Gurugram" },
      {
        name: "description",
        content:
          "PizzaHub Gurugram is a premier pizza and Italian cuisine destination serving wood-fired pizzas, burgers, sandwiches, pasta and shakes.",
      },
      { property: "og:title", content: "About PizzaHub Gurugram" },
      {
        property: "og:description",
        content: "Authentic Italian cuisine and wood-fired pizza in Gurugram.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="bg-[#121618] text-white min-h-screen">
      <PageHeader
        eyebrow="Our Story"
        title="About Our Pizzeria"
        bgImage="/images/bg_1.jpg"
      >
        Dedicated to serving the crispiest crusts, freshest ingredients, and warmest Italian hospitality in Gurugram.
      </PageHeader>

      {/* Main Story Section */}
      <section className="grid lg:grid-cols-2 border-b border-white/10">
        <div
          className="min-h-[400px] lg:min-h-[550px] bg-cover bg-center"
          style={{ backgroundImage: "url('/images/about.jpg')" }}
        />
        <div className="flex flex-col justify-center p-8 sm:p-14 lg:p-20 bg-[#15191b]">
          <span className="font-cursive text-2xl sm:text-3xl text-[#fac564] mb-2">
            Welcome To
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-wider text-white leading-tight mb-6">
            PizzaHub <span className="text-[#fac564]">A Restaurant</span>
          </h2>
          <p className="text-sm sm:text-base text-white/70 leading-relaxed mb-6">
            PizzaHub was founded with a straightforward mission: craft real Italian-style pizza without shortcuts. We make our dough fresh from scratch every morning, hand-toss every pie, and use only pure dairy cheese and vine-ripened tomatoes.
          </p>
          <p className="text-sm sm:text-base text-white/70 leading-relaxed mb-8">
            From our family-sized combos to our private party hall and fast 30-minute home delivery, we take pride in being Gurugram's favourite destination for celebrations and comfort food.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              variant="hero"
              size="lg"
              className="px-8 text-xs uppercase font-bold tracking-widest"
              asChild
            >
              <Link to="/menu">Explore Menu</Link>
            </Button>
            <Button
              variant="outlineWhite"
              size="lg"
              className="px-8 text-xs uppercase font-bold tracking-widest"
              asChild
            >
              <Link to="/party-hall">Party Hall</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Pillars of Quality */}
      <section className="py-20 border-b border-white/10 bg-[#0e1113]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="p-8 rounded-xl bg-[#15191b] border border-white/10 text-center">
              <span className="grid size-16 mx-auto place-items-center rounded-full bg-[#fac564]/10 text-[#fac564] border border-[#fac564]/30 mb-6">
                <Heart className="size-7" />
              </span>
              <h3 className="font-display text-lg font-bold uppercase tracking-wider text-white mb-2">
                Pure Vegetarian & Hygienic
              </h3>
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                Prepared in a sanitized, dedicated vegetarian kitchen using 100% genuine dairy cheese and clean oil.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-[#15191b] border border-white/10 text-center">
              <span className="grid size-16 mx-auto place-items-center rounded-full bg-[#fac564]/10 text-[#fac564] border border-[#fac564]/30 mb-6">
                <Bike className="size-7" />
              </span>
              <h3 className="font-display text-lg font-bold uppercase tracking-wider text-white mb-2">
                Fast & Hot Delivery
              </h3>
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                Our thermal delivery bags ensure your pizza arrives bubbling hot and crunchy every single time.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-[#15191b] border border-white/10 text-center">
              <span className="grid size-16 mx-auto place-items-center rounded-full bg-[#fac564]/10 text-[#fac564] border border-[#fac564]/30 mb-6">
                <Pizza className="size-7" />
              </span>
              <h3 className="font-display text-lg font-bold uppercase tracking-wider text-white mb-2">
                Handcrafted Crusts
              </h3>
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                Choose from cheese burst, thin crust, pan crust, or clay pot baked Kullad pizza with signature marinara.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials / Happy Foodies */}
      <section className="py-20 bg-[#121618]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-cursive text-2xl sm:text-3xl text-[#fac564]">
              Feedback
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-wider text-white mt-1">
              What Customers Say
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                name: "Rahul Verma",
                role: "Sector 4, Gurugram",
                text: "The Kullad Pizza and Tandoori Paneer pizza are unmatched in Gurugram! Fast delivery and always piping hot.",
                img: "/images/person_1.jpg",
              },
              {
                name: "Neha Sharma",
                role: "Sector 7 Foodie",
                text: "We booked the party hall for our daughter's birthday. The ₹1,500 food package was super generous and delicious!",
                img: "/images/person_2.jpg",
              },
              {
                name: "Amit Gupta",
                role: "Regular Customer",
                text: "Best crust in town. The cheese burst pizza and cold coffee combo is our go-to Friday night treat.",
                img: "/images/person_3.jpg",
              },
            ].map((t, idx) => (
              <div
                key={idx}
                className="p-8 rounded-xl bg-[#15191b] border border-white/10 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex gap-1 text-[#fac564]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="size-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-white/70 italic leading-relaxed">
                    "{t.text}"
                  </p>
                </div>
                <div className="flex items-center gap-3 pt-6 border-t border-white/10 mt-6">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="size-12 rounded-full object-cover border border-[#fac564]/40"
                  />
                  <div>
                    <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
                      {t.name}
                    </h4>
                    <span className="text-xs text-white/50">{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
