
import { useState } from "react";
import { motion } from "framer-motion";
import { useExchangeRate } from "../hooks/useExchangeRate";

type Currency = "USD" | "NGN";



const plans = [
  {
    name: "Starter",
    ngn: [450000, 650000],
    description: "Clean landing page for presence and clarity.",
    features: [
      "1-page responsive website",
      "Modern UI design",
      "Basic SEO setup",
      "Contact form integration",
      "1–2 revisions",
    ],
  },
  {
    name: "Standard",
    ngn: [650000, 1200000],
    description: "For brands that want structure and conversions.",
    features: [
      "Multi-section landing page",
      "Custom UI system",
      "SEO optimization",
      "Animations & interactions",
      "CMS-ready setup",
      "3 revisions",
    ],
    popular: true,
  },
  {
    name: "Premium",
    ngn: [1200000, 2500000],
    description: "High-end build for serious brands.",
    features: [
      "Full website / advanced system",
      "Framer-level animations",
      "API integrations",
      "Performance optimization",
      "CMS / dashboard setup",
      "Priority support",
    ],
  },
];

function formatPrice(range: number[], currency: Currency, rate: number) {
  if (currency === "NGN") {
    return `₦${range[0].toLocaleString()} – ₦${range[1].toLocaleString()}`;
  }

  const usd = range.map((v) => v / rate);
  return `$${usd[0].toFixed(0)} – $${usd[1].toFixed(0)}`;
}

export default function Pricing() {
  const { rate, loading } = useExchangeRate();
  const [currency, setCurrency] = useState<Currency>("USD");

  const goWhatsApp = (plan: string) => {
    const msg = encodeURIComponent(
      `Hi, I'm interested in the ${plan} package. Can we discuss details?`,
    );
    window.open(`https://wa.me/2348117530292?text=${msg}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#1C1D20] px-6 py-20 text-white">
      {/* HEADER */}
      <div className="max-w-3xl mx-auto text-center mb-14">
        <h1 className="text-5xl font-semibold tracking-tight">
          Simple pricing. Clear packages.
        </h1>

        <p className="text-gray-100 mt-4 text-lg">
          Choose a package that fits your needs. Each one is built to be fast,
          responsive, and scalable. And if you're unsure, we’ll figure it out together.
        </p>

        <p className="text-xs text-gray-300 mt-3">
          {loading
            ? "Loading live exchange rate..."
            : `1 USD ≈ ₦${rate.toLocaleString()}`}
        </p>

        {/* CURRENCY TOGGLE */}
        <div className="mt-6 inline-flex border border-gray-600 rounded-xl overflow-hidden">
          <button
            onClick={() => setCurrency("USD")}
            className={`px-4 py-2 text-sm ${
              currency === "USD" ? "bg-white text-black" : "text-gray-300"
            }`}
          >
            USD
          </button>

          <button
            onClick={() => setCurrency("NGN")}
            className={`px-4 py-2 text-sm ${
              currency === "NGN" ? "bg-white text-black" : "text-gray-300"
            }`}
          >
            NGN
          </button>
        </div>
      </div>

      {/* PRICING CARDS */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className={`relative rounded-2xl border p-6 backdrop-blur-xl bg-white/10 shadow-sm hover:shadow-2xl transition ${
              plan.popular ? "border-white scale-[1.03]" : "border-gray-700"
            }`}
          >
            {/* BADGE */}
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2  text-black text-xs px-3 py-1 rounded-full">
                {/* Most Popular */}
              </div>
            )}

            <h2 className="text-2xl font-semibold">{plan.name}</h2>

            <p className="text-xl font-medium mt-2">
              {formatPrice(plan.ngn, currency, rate)}
            </p>

            <p className="text-gray-300 mt-3">{plan.description}</p>

            <ul className="mt-6 space-y-2 text-sm text-gray-300">
              {plan.features.map((f) => (
                <li key={f} className="flex gap-2">
                  <span>✓</span>
                  {f}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-8 space-y-2">
              <button
                onClick={() => goWhatsApp(plan.name)}
                className="w-full py-3 rounded-xl bg-white text-black hover:bg-gray-200 transition"
              >
                Get Started
              </button>

              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener"
                className="block text-center text-sm text-gray-400 hover:underline"
              >
                Book a call
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CUSTOM / ENTERPRISE SECTION */}
      <div className="text-center mt-20 max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold">Custom / Enterprise</h2>

        <p className="text-gray-100 mt-2">
          For complex systems, SaaS products, dashboards, and long-term builds.
          Pricing is defined after a discovery call.
        </p>

        <button
          onClick={() => window.open("https://calendly.com", "_blank")}
          className="mt-6 px-6 py-3 bg-white text-black rounded-xl hover:bg-gray-200 transition"
        >
          Book Discovery Call
        </button>
      </div>
         <div className="text-center mt-20 text-gray-100 text-sm">
        * Prices do not include domain or hosting costs. Revisions are defined as changes to the design or content after the initial delivery. For custom requests, please contact us directly.
      </div>
    </div>
  );
}
