import { motion } from "framer-motion";
import { Wand2, MessageSquare, Crown } from "lucide-react";

const Step = ({ icon: Icon, title, desc, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay }}
    className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.45)] transition-all"
  >
    <div className="absolute -top-4 left-6 h-8 w-8 rounded-xl bg-gradient-to-br from-[#00D9FF] to-[#0088FF] grid place-items-center shadow-[0_10px_30px_rgba(0,136,255,0.4)]">
      <Icon className="h-4 w-4 text-[#0A1628]" />
    </div>
    <div className="pt-2">
      <h3 className="text-white font-semibold mb-1">{title}</h3>
      <p className="text-white/70 text-sm">{desc}</p>
    </div>
  </motion.div>
);

export default function HowItWorks() {
  return (
    <section className="relative py-24 bg-[#0A1628]" id="how">
      <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_10%_10%,rgba(0,136,255,0.15),transparent),radial-gradient(600px_200px_at_90%_20%,rgba(124,58,237,0.12),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold text-white"
          >
            How It Works
          </motion.h2>
          <p className="text-white/70 mt-2">Three simple steps to start your first conversation.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 relative">
          <div className="absolute left-1/6 right-1/6 top-16 h-0.5 bg-gradient-to-r from-[#00D9FF]/40 via-white/10 to-[#0088FF]/40 hidden md:block" />
          <Step icon={Wand2} title="Choose Your Hero" desc="Pick from a growing library of celebrities, athletes, and creators." delay={0} />
          <Step icon={MessageSquare} title="Start Chatting" desc="Text or speak — our AI responds in their voice in real-time." delay={0.1} />
          <Step icon={Crown} title="Upgrade for More" desc="Unlock memory, personalization, and exclusive content." delay={0.2} />
        </div>
      </div>
    </section>
  );
}
