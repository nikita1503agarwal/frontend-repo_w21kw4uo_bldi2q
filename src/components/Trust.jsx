import { motion } from "framer-motion";
import { ShieldCheck, BadgeCheck, Lock } from "lucide-react";

const items = [
  { icon: ShieldCheck, text: "Voice cloning with explicit consent only" },
  { icon: BadgeCheck, text: "AI-generated content clearly labeled" },
  { icon: Lock, text: "Enterprise-grade security" },
];

export default function Trust() {
  return (
    <section className="relative py-24 bg-[#0A1628]" id="trust">
      <div className="absolute inset-0 bg-[radial-gradient(700px_200px_at_80%_20%,rgba(124,58,237,0.12),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Trust & Security</h2>
          <p className="text-white/70 mt-2">GDPR compliant and ethically designed from the ground up.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.text}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6"
            >
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#00D9FF] to-[#0088FF] grid place-items-center mb-4">
                <it.icon className="h-5 w-5 text-[#0A1628]" />
              </div>
              <p className="text-white/80">{it.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
