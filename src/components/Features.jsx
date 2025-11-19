import { motion } from "framer-motion";
import { Mic2, Languages, MessageCircle, PhoneCall, ShieldCheck, Zap } from "lucide-react";

const features = [
  {
    icon: Mic2,
    title: "Realistic Voice Cloning",
    desc: "3 hours of voice data for stunning authenticity",
  },
  { icon: Languages, title: "47+ Languages", desc: "Talk in your language, hear their voice" },
  { icon: MessageCircle, title: "AI Text Chat", desc: "Free tier + Premium with memory" },
  { icon: PhoneCall, title: "Live Voice Calls", desc: "Real-time conversations that feel alive" },
  { icon: ShieldCheck, title: "Fully Compliant", desc: "GDPR-ready, ethically designed" },
  { icon: Zap, title: "Instant Access", desc: "Web-based, no downloads needed" },
];

const Card = ({ icon: Icon, title, desc, i }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: i * 0.05 }}
    className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 hover:-translate-y-1 transition-all shadow-[0_8px_30px_rgba(0,0,0,0.25)]"
  >
    <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#00D9FF] to-[#0088FF] grid place-items-center mb-4 shadow-[0_10px_30px_rgba(0,136,255,0.35)]">
      <Icon className="h-5 w-5 text-[#0A1628]" />
    </div>
    <h3 className="text-white font-semibold">{title}</h3>
    <p className="text-white/70 text-sm mt-1">{desc}</p>
  </motion.div>
);

export default function Features() {
  return (
    <section className="relative py-24 bg-[#0A1628]" id="features">
      <div className="absolute inset-0 bg-[radial-gradient(700px_200px_at_10%_10%,rgba(0,217,255,0.12),transparent),radial-gradient(700px_200px_at_90%_90%,rgba(0,136,255,0.12),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold text-white"
          >
            Powerful Features
          </motion.h2>
          <p className="text-white/70 mt-2">Everything you need to make conversations feel real.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <Card key={f.title} {...f} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
