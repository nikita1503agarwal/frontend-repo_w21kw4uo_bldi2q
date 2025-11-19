import { motion } from "framer-motion";
import { Crown, Sparkles, PhoneCall } from "lucide-react";

const tiers = [
  {
    name: "Free",
    price: "$0",
    highlight: false,
    features: [
      "Basic AI text chat",
      "Limited daily messages",
      "Guardrails & safety features",
    ],
    cta: "Start Free",
    icon: Sparkles,
    border: "from-white/10 to-white/5",
  },
  {
    name: "Premium",
    price: "€20/mo",
    highlight: true,
    features: [
      "Unlimited text chat with memory",
      "Personalized conversations",
      "AI remembers your history",
      "Priority responses",
    ],
    cta: "Go Premium",
    icon: Crown,
    border: "from-[#00D9FF] to-[#0088FF]",
  },
  {
    name: "Voice Access",
    price: "Custom",
    highlight: false,
    features: [
      "Everything in Premium",
      "Voice call minutes included",
      "Real-time voice conversations",
      "Exclusive content access",
    ],
    cta: "Talk Now",
    icon: PhoneCall,
    border: "from-purple-400/40 to-cyan-400/40",
  },
];

const Tier = ({ t, i }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: i * 0.05 }}
    className={`relative rounded-2xl p-0.5 bg-gradient-to-br ${t.highlight ? "from-[#00D9FF] to-[#0088FF]" : "from-white/10 to-white/5"}`}
  >
    <div className="rounded-2xl bg-[#0D1A33]/90 backdrop-blur-xl h-full p-6 border border-white/10">
      <div className="flex items-center gap-3">
        <div className={`h-10 w-10 rounded-xl grid place-items-center ${t.highlight ? "bg-white" : "bg-gradient-to-br from-white/10 to-white/5"}`}>
          <t.icon className={`h-5 w-5 ${t.highlight ? "text-[#0A1628]" : "text-white/80"}`} />
        </div>
        <div>
          <h3 className="text-white font-semibold">{t.name}</h3>
          <p className="text-white/60 text-sm">{t.price}</p>
        </div>
      </div>
      <ul className="mt-6 space-y-2">
        {t.features.map((f) => (
          <li key={f} className="text-white/80 text-sm flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" /> {f}
          </li>
        ))}
      </ul>
      <a
        href="#"
        className={`mt-6 inline-flex w-full items-center justify-center rounded-xl px-4 py-2 font-semibold transition-all ${
          t.highlight
            ? "bg-white text-[#0A1628] shadow-[0_10px_40px_rgba(0,217,255,0.35)]"
            : "border border-white/10 text-white hover:bg-white/10"
        }`}
      >
        {t.cta}
      </a>
    </div>
  </motion.div>
);

export default function Pricing() {
  return (
    <section className="relative py-24 bg-[#0A1628]" id="pricing">
      <div className="absolute inset-0 bg-[radial-gradient(700px_200px_at_10%_90%,rgba(0,217,255,0.08),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold text-white"
          >
            Pricing
          </motion.h2>
          <p className="text-white/70 mt-2">Choose the plan that fits your experience.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <Tier key={t.name} t={t} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
