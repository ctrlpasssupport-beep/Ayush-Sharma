import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Bike,
  Clock,
  Heart,
  MapPin,
  MessageCircle,
  Phone,
  Pizza,
  Plus,
  Send,
  Sparkles,
  Utensils,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MenuCard } from "@/components/site/MenuCard";
import { OffersGrid } from "@/components/site/Offers";
import { useMenu, usePartyHall } from "@/lib/catalog";
import { site, telHref } from "@/data/site";
import { waLink } from "@/lib/whatsapp";
import { useCart } from "@/lib/cart";
import { toast } from "sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PizzaHub - Subday Pizza | Authentic Italian Style Pizzeria" },
      {
        name: "description",
        content:
          "Delicious handcrafted pizzas, burgers, pastas and shakes made with fresh dough and original recipes in Gurugram.",
      },
      {
        property: "og:title",
        content: "PizzaHub - Subday Pizza | Authentic Italian Style Pizzeria",
      },
      {
        property: "og:description",
        content:
          "Delicious handcrafted pizzas, burgers, pastas and shakes made with fresh dough and original recipes in Gurugram.",
      },
    ],
  }),
  component: Index,
});

export function Index() {
  const menu = useMenu();
  const party = usePartyHall();
  const { add } = useCart();
  const [activeTab, setActiveTab] = useState<"pizza" | "drinks" | "burgers" | "pasta">("pizza");
  const [activeSlide, setActiveSlide] = useState(0);

  // Form state for contact / booking
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState("");

  const slides = [
    {
      subheading: "Delicious",
      heading: "Italian Cuisine",
      desc: "Freshly hand-tossed dough, melted mozzarella, signature Italian herbs, and authentic wood-fired crusts crafted daily in Gurugram.",
      img: "/images/bg_1.png",
      bg: "/images/bg_1.jpg",
    },
    {
      subheading: "Crunchy",
      heading: "Italian Pizza",
      desc: "Loaded with fresh vegetables, farm-fresh paneer, golden corn, and aromatic spices cooked to golden perfection.",
      img: "/images/bg_2.png",
      bg: "/images/bg_1.jpg",
    },
    {
      subheading: "Welcome",
      heading: "We Cook Your Desired Recipe",
      desc: "From signature 8-Flavoured pizzas and Kullad clay pot pizzas to juicy burgers and creamy cold coffees.",
      img: "/images/bg_1.png",
      bg: "/images/bg_3.jpg",
    },
  ];

  // Hot Pizza Meals (6 curated items)
  const hotMeals = [
    { name: "Italian Four Season", price: 200, img: "/images/pizza-1.jpg", desc: "Farm-fresh capsicum, golden corn, black olives, and juicy paneer bites on hand-tossed crust." },
    { name: "Greek Farmhouse", price: 150, img: "/images/pizza-2.jpg", desc: "Crisp capsicum, sweet corn, fresh tomatoes, and seasoned herbs with melted mozzarella." },
    { name: "Tandoori Paneer Pizza", price: 150, img: "/images/pizza-3.jpg", desc: "Tandoori marinated paneer cubes, red paprika, sliced onions, and garlic butter glaze." },
    { name: "American Country Feast", price: 150, img: "/images/pizza-4.jpg", desc: "Zesty special sauce, onion, mushroom, sweet corn, and triple blend Italian cheese." },
    { name: "Kullad Claypot Pizza", price: 120, img: "/images/pizza-5.jpg", desc: "Baked inside authentic clay kullad overflowing with molten cheese, veggies, and herb sauce." },
    { name: "Margherita Classic", price: 100, img: "/images/pizza-6.jpg", desc: "Simplicity at its best with single mozzarella cheese, rich pomodoro sauce, and basil." },
  ];

  // Pricing menu entries (2 columns of 4 items)
  const pricingCol1 = [
    { name: "Italian Pizza", price: "₹200", img: "/images/pizza-1.jpg", desc: "Hand-tossed crust, black olives, corn, capsicum" },
    { name: "Hawaiian Special", price: "₹290", img: "/images/pizza-2.jpg", desc: "Sweet pineapple, fresh mozzarella, signature red sauce" },
    { name: "Greek Farmhouse", price: "₹150", img: "/images/pizza-3.jpg", desc: "Crispy capsicum, farm onion, ripe tomato, oregano" },
    { name: "Bacon Crispy Thins", price: "₹200", img: "/images/pizza-4.jpg", desc: "Crisp thin crust with smoky flavour and extra cheese" },
  ];

  const pricingCol2 = [
    { name: "Tandoori Paneer", price: "₹150", img: "/images/pizza-5.jpg", desc: "Spicy marinated paneer, red paprika, onion slice" },
    { name: "Ultimate Overload", price: "₹350", img: "/images/pizza-6.jpg", desc: "All toppings combined with double cheese burst" },
    { name: "Zesty Special Veg", price: "₹150", img: "/images/pizza-7.jpg", desc: "Zesty Italian herbs, green chili, spicy seasoning" },
    { name: "8-Flavoured in One", price: "₹650", img: "/images/pizza-8.jpg", desc: "Eight distinct signature pizza slices in one massive pie" },
  ];

  // Filter items for interactive category tabs
  const tabItems = menu.filter((item) => {
    if (activeTab === "pizza") return item.category.includes("pizza") || item.category === "kullad";
    if (activeTab === "drinks") return item.category.includes("shake") || item.category.includes("coffee") || item.category.includes("mojito");
    if (activeTab === "burgers") return item.category.includes("burger") || item.category.includes("sandwich");
    if (activeTab === "pasta") return item.category.includes("pasta") || item.category.includes("bread") || item.category.includes("wrap");
    return true;
  }).slice(0, 6);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi PizzaHub! I want to contact you:\nName: ${firstName} ${lastName}\nMessage: ${message}`;
    window.open(waLink(text), "_blank");
  };

  return (
    <div className="bg-[#121618] text-white overflow-hidden">
      {/* 1. HERO SLIDER SECTION */}
      <section className="relative min-h-[640px] lg:min-h-[720px] flex items-center justify-center overflow-hidden border-b border-white/10">
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out"
          style={{ backgroundImage: `url('${slides[activeSlide].bg}')` }}
        />
        <div className="absolute inset-0 bg-black/75 backdrop-blur-[1px]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-20 w-full">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left Column Content */}
            <div className="fade-up z-10 text-center lg:text-left">
              <span className="font-cursive text-3xl sm:text-4xl text-[#fac564] tracking-wide block mb-2">
                {slides[activeSlide].subheading}
              </span>
              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-wider text-white leading-tight mb-4">
                {slides[activeSlide].heading}
              </h1>
              <p className="text-white/75 text-sm sm:text-base max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8">
                {slides[activeSlide].desc}
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <Button
                  variant="hero"
                  size="xl"
                  className="px-8 py-3.5 text-xs font-bold uppercase tracking-widest"
                  asChild
                >
                  <Link to="/menu">Order Now</Link>
                </Button>
                <Button
                  variant="outlineWhite"
                  size="xl"
                  className="px-8 py-3.5 text-xs font-bold uppercase tracking-widest"
                  asChild
                >
                  <Link to="/menu">View Menu</Link>
                </Button>
              </div>

              {/* Slider Dots */}
              <div className="flex items-center justify-center lg:justify-start gap-2.5 mt-10">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveSlide(i)}
                    aria-label={`Slide ${i + 1}`}
                    className={`size-3 rounded-full transition-all ${
                      i === activeSlide
                        ? "bg-[#fac564] w-8"
                        : "bg-white/30 hover:bg-white/60"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Right Column Floating Pizza PNG */}
            <div className="relative flex items-center justify-center z-10">
              <div className="relative size-72 sm:size-96 lg:size-[460px] animate-[pulse_6s_ease-in-out_infinite]">
                <img
                  src={slides[activeSlide].img}
                  alt="Delicious Italian Pizza"
                  className="size-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] transition-all duration-700 ease-out hover:rotate-6"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TOP INFO BAR */}
      <section className="border-b border-white/10 bg-[#0e1113]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6">
          <div className="grid gap-6 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {/* Phone */}
            <div className="flex items-center gap-4 pt-4 md:pt-0">
              <span className="grid size-12 shrink-0 place-items-center rounded-full bg-[#fac564]/10 text-[#fac564] border border-[#fac564]/30">
                <Phone className="size-5" />
              </span>
              <div>
                <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
                  {site.phone}
                </h3>
                <p className="text-xs text-white/60">Call to order or book table</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4 pt-4 md:pt-0 md:pl-6">
              <span className="grid size-12 shrink-0 place-items-center rounded-full bg-[#fac564]/10 text-[#fac564] border border-[#fac564]/30">
                <MapPin className="size-5" />
              </span>
              <div>
                <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
                  Sector 4, Gurugram
                </h3>
                <p className="text-xs text-white/60">Free delivery within 3 km</p>
              </div>
            </div>

            {/* Timing */}
            <div className="flex items-center gap-4 pt-4 md:pt-0 md:pl-6">
              <span className="grid size-12 shrink-0 place-items-center rounded-full bg-[#fac564]/10 text-[#fac564] border border-[#fac564]/30">
                <Clock className="size-5" />
              </span>
              <div>
                <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
                  Open Daily
                </h3>
                <p className="text-xs text-white/60">11:00 AM – 11:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ABOUT SECTION - SPLIT HALF WITH ABOUT.JPG */}
      <section className="grid md:grid-cols-2 border-b border-white/10">
        <div
          className="min-h-[360px] md:min-h-[480px] bg-cover bg-center"
          style={{ backgroundImage: "url('/images/about.jpg')" }}
        />
        <div className="flex flex-col justify-center p-8 sm:p-14 lg:p-20 bg-[#15191b]">
          <span className="font-cursive text-2xl sm:text-3xl text-[#fac564] mb-2">
            Welcome
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-wider text-white leading-tight mb-6">
            Welcome to <span className="text-[#fac564]">PizzaHub</span> A Restaurant
          </h2>
          <p className="text-sm sm:text-base text-white/70 leading-relaxed mb-6">
            At PizzaHub Gurugram, we believe authentic Italian cuisine starts with tradition. Our dough is hand-crafted from premium wheat, slow-proofed for 24 hours, and baked to a crisp golden crunch.
          </p>
          <p className="text-sm sm:text-base text-white/70 leading-relaxed mb-8">
            Whether you crave classic Country Feast, fiery Tandoori Paneer, cheese-laden pastas, or our famous Gurugram special Kullad Pizza, every bite is cooked with passion and pure ingredients.
          </p>
          <div>
            <Button
              variant="outlineWhite"
              size="lg"
              className="text-xs uppercase font-bold tracking-widest px-8"
              asChild
            >
              <Link to="/about">Our Story</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 4. OUR SERVICES SECTION */}
      <section className="py-20 border-b border-white/10 bg-[#121618]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-cursive text-2xl sm:text-3xl text-[#fac564]">
              Experience
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-wider text-white mt-1">
              Our Services
            </h2>
            <p className="text-sm text-white/60 mt-3">
              Crafted for pizza lovers who expect nothing less than authentic taste and swift hospitality.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Service 1 */}
            <div className="flex flex-col items-center text-center p-8 rounded-xl bg-[#15191b] border border-white/10 hover:border-[#fac564]/40 transition-colors">
              <span className="grid size-16 place-items-center rounded-full bg-[#fac564]/10 text-[#fac564] border border-[#fac564]/30 text-2xl mb-6">
                <Heart className="size-7" />
              </span>
              <h3 className="font-display text-lg font-bold uppercase tracking-wider text-white mb-2">
                Healthy Foods
              </h3>
              <p className="text-xs sm:text-sm text-white/65 leading-relaxed">
                Made with unbleached flour, farm-fresh local vegetables, high-protein paneer, and 100% dairy mozzarella with no artificial colours.
              </p>
            </div>

            {/* Service 2 */}
            <div className="flex flex-col items-center text-center p-8 rounded-xl bg-[#15191b] border border-white/10 hover:border-[#fac564]/40 transition-colors">
              <span className="grid size-16 place-items-center rounded-full bg-[#fac564]/10 text-[#fac564] border border-[#fac564]/30 text-2xl mb-6">
                <Bike className="size-7" />
              </span>
              <h3 className="font-display text-lg font-bold uppercase tracking-wider text-white mb-2">
                Fastest Delivery
              </h3>
              <p className="text-xs sm:text-sm text-white/65 leading-relaxed">
                Hot and fresh to your doorstep within 30 minutes. Free home delivery on orders of ₹399+ within 3 km in Gurugram.
              </p>
            </div>

            {/* Service 3 */}
            <div className="flex flex-col items-center text-center p-8 rounded-xl bg-[#15191b] border border-white/10 hover:border-[#fac564]/40 transition-colors">
              <span className="grid size-16 place-items-center rounded-full bg-[#fac564]/10 text-[#fac564] border border-[#fac564]/30 text-2xl mb-6">
                <Pizza className="size-7" />
              </span>
              <h3 className="font-display text-lg font-bold uppercase tracking-wider text-white mb-2">
                Original Recipes
              </h3>
              <p className="text-xs sm:text-sm text-white/65 leading-relaxed">
                Secret Italian herb blends, slow-cooked marinara, signature 8-Flavoured pizza, and clay pot Kullad pizzas you won't find anywhere else.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. HOT PIZZA MEALS (ALTERNATING 6-GRID FROM TEMPLATE) */}
      <section className="py-20 border-b border-white/10 bg-[#0e1113]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-cursive text-2xl sm:text-3xl text-[#fac564]">
              Freshly Baked
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-wider text-white mt-1">
              Hot Pizza Meals
            </h2>
            <p className="text-sm text-white/60 mt-3">
              Straight out of the oven — crispy crusts and golden molten cheese.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {hotMeals.map((meal, i) => (
              <div
                key={meal.name}
                className="flex overflow-hidden rounded-xl bg-[#15191b] border border-white/10 hover:border-[#fac564]/40 transition-all group"
              >
                <div className={`w-2/5 shrink-0 overflow-hidden ${i >= 3 ? "order-last" : ""}`}>
                  <img
                    src={meal.img}
                    alt={meal.name}
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    <h3 className="font-display text-base font-bold uppercase tracking-wider text-white group-hover:text-[#fac564] transition-colors line-clamp-1">
                      {meal.name}
                    </h3>
                    <p className="mt-1.5 text-xs text-white/60 line-clamp-2">
                      {meal.desc}
                    </p>
                  </div>
                  <div className="mt-4 flex items-center justify-between pt-3 border-t border-white/10">
                    <span className="font-display text-lg font-bold text-[#fac564]">
                      ₹{meal.price}
                    </span>
                    <Button
                      variant="outlineWhite"
                      size="sm"
                      className="h-8 text-[11px] uppercase font-bold tracking-wider px-3"
                      onClick={() => {
                        add({
                          id: `hot-meal-${i}`,
                          name: meal.name,
                          size: "Regular",
                          price: meal.price,
                        });
                        toast.success(`${meal.name} added to cart`);
                      }}
                    >
                      Order
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. OUR MENU PRICING (CLASSIC 2-COLUMN DOTTED LIST) */}
      <section className="py-20 border-b border-white/10 bg-[#121618]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-cursive text-2xl sm:text-3xl text-[#fac564]">
              Signature Selection
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-wider text-white mt-1">
              Our Menu Pricing
            </h2>
            <div className="mx-auto mt-4 h-0.5 w-16 bg-[#fac564]" />
          </div>

          <div className="grid gap-x-12 gap-y-6 md:grid-cols-2">
            {/* Column 1 */}
            <div className="space-y-6">
              {pricingCol1.map((p) => (
                <div key={p.name} className="flex items-center gap-4 group">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="size-16 rounded-full object-cover border-2 border-white/15 group-hover:border-[#fac564] transition-colors shrink-0"
                  />
                  <div className="flex-1">
                    <div className="flex items-baseline justify-between gap-2 border-b border-dashed border-white/20 pb-1">
                      <h3 className="font-display text-base font-bold uppercase tracking-wider text-white group-hover:text-[#fac564] transition-colors">
                        {p.name}
                      </h3>
                      <span className="font-display font-bold text-[#fac564] text-lg">
                        {p.price}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-white/50">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Column 2 */}
            <div className="space-y-6">
              {pricingCol2.map((p) => (
                <div key={p.name} className="flex items-center gap-4 group">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="size-16 rounded-full object-cover border-2 border-white/15 group-hover:border-[#fac564] transition-colors shrink-0"
                  />
                  <div className="flex-1">
                    <div className="flex items-baseline justify-between gap-2 border-b border-dashed border-white/20 pb-1">
                      <h3 className="font-display text-base font-bold uppercase tracking-wider text-white group-hover:text-[#fac564] transition-colors">
                        {p.name}
                      </h3>
                      <span className="font-display font-bold text-[#fac564] text-lg">
                        {p.price}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-white/50">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button
              variant="outlineWhite"
              size="lg"
              className="px-8 text-xs uppercase font-bold tracking-widest"
              asChild
            >
              <Link to="/menu">Explore Full 60+ Item Menu →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 7. PHOTO GALLERY (EDGE-TO-EDGE 4-GRID) */}
      <section className="border-b border-white/10">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {[
            { img: "/images/gallery-1.jpg", title: "Fresh Tossed Dough" },
            { img: "/images/gallery-2.jpg", title: "Wood-Fired Pizza" },
            { img: "/images/gallery-3.jpg", title: "Artisan Burger" },
            { img: "/images/gallery-4.jpg", title: "Creamy Thick Shakes" },
          ].map((g, idx) => (
            <div
              key={idx}
              className="relative aspect-square overflow-hidden group cursor-pointer bg-black/60"
            >
              <img
                src={g.img}
                alt={g.title}
                loading="lazy"
                className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4 text-center">
                <span className="font-cursive text-xl text-[#fac564]">Delicious</span>
                <span className="font-display text-sm font-bold uppercase tracking-wider text-white mt-1">
                  {g.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. FUN FACTS STATS COUNTER SECTION (PARALLAX WITH BG_2.JPG) */}
      <section
        className="relative py-24 bg-cover bg-center border-b border-white/10"
        style={{ backgroundImage: "url('/images/bg_2.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/80 backdrop-blur-[2px]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {/* Stat 1 */}
            <div className="space-y-2">
              <span className="text-4xl block">🍕</span>
              <p className="font-display text-4xl sm:text-5xl font-extrabold text-[#fac564]">
                60+
              </p>
              <span className="text-xs uppercase font-bold tracking-[0.2em] text-white/80 block">
                Menu Varieties
              </span>
            </div>

            {/* Stat 2 */}
            <div className="space-y-2">
              <span className="text-4xl block">🏆</span>
              <p className="font-display text-4xl sm:text-5xl font-extrabold text-[#fac564]">
                8
              </p>
              <span className="text-xs uppercase font-bold tracking-[0.2em] text-white/80 block">
                Signature Crusts
              </span>
            </div>

            {/* Stat 3 */}
            <div className="space-y-2">
              <span className="text-4xl block">😊</span>
              <p className="font-display text-4xl sm:text-5xl font-extrabold text-[#fac564]">
                10,500+
              </p>
              <span className="text-xs uppercase font-bold tracking-[0.2em] text-white/80 block">
                Happy Customers
              </span>
            </div>

            {/* Stat 4 */}
            <div className="space-y-2">
              <span className="text-4xl block">⚡</span>
              <p className="font-display text-4xl sm:text-5xl font-extrabold text-[#fac564]">
                30 Min
              </p>
              <span className="text-xs uppercase font-bold tracking-[0.2em] text-white/80 block">
                Express Delivery
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 9. INTERACTIVE MENU CATEGORY TABS (WITH USEMENU LIVE BACKEND) */}
      <section className="py-20 border-b border-white/10 bg-[#121618]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-cursive text-2xl sm:text-3xl text-[#fac564]">
              Taste The Best
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-wider text-white mt-1">
              Explore By Category
            </h2>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
            {[
              { id: "pizza", label: "Pizza & Kullad", icon: "🍕" },
              { id: "drinks", label: "Drinks & Shakes", icon: "🥤" },
              { id: "burgers", label: "Burgers & Sandwiches", icon: "🍔" },
              { id: "pasta", label: "Pasta, Breads & Wraps", icon: "🍝" },
            ].map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id as any)}
                className={`flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-widest transition-all ${
                  activeTab === t.id
                    ? "bg-[#fac564] text-[#121618] shadow-lg shadow-[#fac564]/20"
                    : "bg-[#15191b] border border-white/10 text-white/70 hover:border-[#fac564]/50 hover:text-white"
                }`}
              >
                <span>{t.icon}</span>
                <span>{t.label}</span>
              </button>
            ))}
          </div>

          {/* Tab Content Cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tabItems.map((item) => (
              <MenuCard key={item.id} item={item} showCategory />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              variant="hero"
              size="lg"
              className="px-8 text-xs uppercase font-bold tracking-widest"
              asChild
            >
              <Link to="/menu">View All Items in {activeTab.toUpperCase()}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 10. COMBOS & VALUE OFFERS SECTION */}
      <section className="py-20 border-b border-white/10 bg-[#0e1113]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-cursive text-2xl sm:text-3xl text-[#fac564]">
              Big Savings
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-wider text-white mt-1">
              Combos Made For Sharing
            </h2>
            <p className="text-sm text-white/60 mt-3">
              Value meals loaded with pizzas, garlic bread, fries, and chilled beverages.
            </p>
          </div>

          <OffersGrid />
        </div>
      </section>

      {/* 11. PARTY HALL & CELEBRATION BOOKING BANNER */}
      <section
        className="relative py-24 bg-cover bg-center border-b border-white/10"
        style={{ backgroundImage: "url('/images/bg_3.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/85 backdrop-blur-[2px]" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 text-center">
          <span className="font-cursive text-2xl sm:text-3xl text-[#fac564]">
            Celebration
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-wider text-white mt-2">
            Make Every Celebration Delicious
          </h2>
          <p className="mt-4 text-sm sm:text-base text-white/70 max-w-2xl mx-auto leading-relaxed">
            Host your birthdays, kitty parties, anniversaries, and family get-togethers in our air-conditioned party hall with custom food packages.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-6 max-w-2xl mx-auto">
            <div className="rounded-xl bg-[#15191b]/90 border border-white/15 p-4 sm:p-6 backdrop-blur">
              <span className="font-display text-2xl sm:text-3xl font-extrabold text-[#fac564]">
                ₹{party.packagePrice.toLocaleString("en-IN")}
              </span>
              <p className="mt-1 text-[11px] uppercase font-bold tracking-wider text-white/70">
                Food Package
              </p>
            </div>

            <div className="rounded-xl bg-[#15191b]/90 border border-white/15 p-4 sm:p-6 backdrop-blur">
              <span className="font-display text-2xl sm:text-3xl font-extrabold text-[#fac564]">
                ₹{party.hourlyRate.toLocaleString("en-IN")}
              </span>
              <p className="mt-1 text-[11px] uppercase font-bold tracking-wider text-white/70">
                Per Hour
              </p>
            </div>

            <div className="rounded-xl bg-[#15191b]/90 border border-white/15 p-4 sm:p-6 backdrop-blur">
              <span className="font-display text-2xl sm:text-3xl font-extrabold text-[#fac564]">
                ₹{party.threeHourRate.toLocaleString("en-IN")}
              </span>
              <p className="mt-1 text-[11px] uppercase font-bold tracking-wider text-white/70">
                3 Hours Slot
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button
              variant="hero"
              size="xl"
              className="px-8 text-xs uppercase font-bold tracking-widest"
              asChild
            >
              <Link to="/party-hall">Party Hall Details</Link>
            </Button>
            <Button
              variant="whatsapp"
              size="xl"
              className="px-8 text-xs uppercase font-bold tracking-widest"
              asChild
            >
              <a
                href={waLink("Hi Subday Pizza! I would like to enquire about party hall booking.")}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle className="size-4 mr-2" /> WhatsApp Enquiry
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* 12. APPOINTMENT / CONTACT FORM SECTION WITH MAP OVERVIEW */}
      <section className="py-20 bg-[#121618]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Direct Directions & Store Highlights */}
            <div className="space-y-6">
              <div>
                <span className="font-cursive text-2xl sm:text-3xl text-[#fac564]">
                  Location & Dine-In
                </span>
                <h2 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-wider text-white mt-1">
                  Visit Us in Gurugram
                </h2>
              </div>
              <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                Experience the authentic smell of baking crust and fresh oregano. Relax with your family in our cosy dining space or grab express takeaway.
              </p>
              
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-4">
                  <span className="grid size-10 shrink-0 place-items-center rounded bg-[#fac564]/10 text-[#fac564] border border-[#fac564]/30 mt-0.5">
                    <MapPin className="size-5" />
                  </span>
                  <div>
                    <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
                      Restaurant Address
                    </h4>
                    <p className="text-xs text-white/60 mt-0.5">
                      Subday Pizza, Sector 4, Gurugram, Haryana - 122006
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="grid size-10 shrink-0 place-items-center rounded bg-[#fac564]/10 text-[#fac564] border border-[#fac564]/30 mt-0.5">
                    <Phone className="size-5" />
                  </span>
                  <div>
                    <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white">
                      Direct Ordering Hotlines
                    </h4>
                    <p className="text-xs text-white/60 mt-0.5">
                      {site.phone} / WhatsApp Order Active
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Button
                  variant="outlineWhite"
                  size="lg"
                  className="px-6 text-xs uppercase font-bold tracking-widest"
                  asChild
                >
                  <a href={site.mapsUrl} target="_blank" rel="noreferrer">
                    <MapPin className="size-4 mr-2 text-[#fac564]" /> Open Google Maps Directions
                  </a>
                </Button>
              </div>
            </div>

            {/* Right Column: Contact & Message Box */}
            <div className="p-8 sm:p-10 rounded-xl bg-[#15191b] border border-white/10 shadow-xl">
              <span className="font-cursive text-xl text-[#fac564]">
                Reach Out
              </span>
              <h3 className="font-display text-2xl font-bold uppercase tracking-wider text-white mt-1 mb-6">
                Contact Us
              </h3>

              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      required
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="First Name"
                      className="w-full bg-[#0e1113] border border-white/15 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-[#fac564] focus:outline-none"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder="Last Name"
                      className="w-full bg-[#0e1113] border border-white/15 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-[#fac564] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Your message, party date or order request..."
                    className="w-full bg-[#0e1113] border border-white/15 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-[#fac564] focus:outline-none resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full py-3.5 text-xs uppercase font-bold tracking-widest"
                >
                  <Send className="size-4 mr-2" /> Send Message On WhatsApp
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
