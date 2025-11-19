import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";
import { Sparkles, ArrowRight, Users } from "lucide-react";

const FloatingCard = ({ name, role, color }) => (
  <motion.div
    initial={{ opacity: 0, y: 20, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-4 shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.45)] transition-all duration-300 hover:-translate-y-1"
  >
    <div className="flex items-center gap-3">
      <div
        className="w-12 h-12 rounded-xl grid place-items-center text-white font-semibold"
        style={{
          background: `linear-gradient(135deg, ${color} 0%, rgba(10,22,40,0.6) 100%)`,
        }}
      >
        {name.charAt(0)}
      </div>
      <div>
        <p className="text-white/90 font-semibold leading-tight">{name}</p>
        <p className="text-white/60 text-xs">{role}</p>
      </div>
    </div>
    <div className="mt-3 flex items-end gap-1 h-6">
      {[...Array(12)].map((_, i) => (
        <span
          key={i}
          className="w-1 rounded-full bg-cyan-400/70"
          style={{ height: `${6 + Math.sin(i) * 4 + 8}px`, opacity: 0.6 }}
        />
      ))}
    </div>
  </motion.div>
);

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-[#0A1628]">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0A1628]/20 via-[#0A1628]/40 to-[#0A1628]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-white/5 px-3 py-1 text-xs text-cyan-200/90 backdrop-blur-md"
            >
              <Sparkles size={14} /> Live AI Voice Platform
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] text-white"
            >
              Talk to Your Heroes in Their Own Voice
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-4 text-lg text-white/70 max-w-xl"
            >
              Experience authentic AI-powered conversations with your favorite celebrities, athletes, and influencers — in 47+ languages, 24/7.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <a
                href="#pricing"
                className="group inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#00D9FF] to-[#0088FF] text-[#0A1628] font-semibold px-6 py-3 shadow-[0_10px_40px_rgba(0,217,255,0.35)] hover:shadow-[0_14px_50px_rgba(0,217,255,0.5)] transition-all"
              >
                Start Free Chat
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#talents"
                className="inline-flex items-center justify-center rounded-xl border border-cyan-400/40 text-cyan-200 px-6 py-3 bg-white/5 hover:bg-white/10 backdrop-blur-md"
              >
                Explore Talents
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 flex items-center gap-4 text-white/70"
            >
              <Users className="h-4 w-4 text-cyan-300" />
              <p className="text-sm">Loved by fans and creators worldwide</p>
            </motion.div>
          </div>

          <div className="relative h-[520px]">
            <div className="absolute -top-6 right-0 w-72">
              <FloatingCard name="Ava Hart" role="Global Pop Star" color="#7c3aed" />
            </div>
            <div className="absolute top-28 left-0 w-72">
              <FloatingCard name="Leo Cruz" role="World Champion" color="#00D9FF" />
            </div>
            <div className="absolute bottom-0 right-12 w-72">
              <FloatingCard name="Mia Chen" role="Digital Creator" color="#0088FF" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[#0A1628]" />
    </section>
  );
}
