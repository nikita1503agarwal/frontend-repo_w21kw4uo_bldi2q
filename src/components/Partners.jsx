import { motion } from "framer-motion";

export default function Partners() {
  return (
    <section className="relative py-24 bg-[#0A1628]" id="talents">
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Turn Your Voice Into a Revenue Stream</h2>
            <p className="text-white/70 mt-3">Launch your own AI voice safely. Engage fans 24/7, unlock new revenue, and keep full control with consent-first tools.</p>
            <ul className="mt-6 space-y-2 text-white/80">
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-cyan-400" /> White-label integrations</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-cyan-400" /> Revenue sharing options</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-cyan-400" /> Priority onboarding & support</li>
            </ul>
            <a href="#" className="mt-6 inline-flex items-center justify-center rounded-xl border border-cyan-400/40 text-cyan-200 px-6 py-3 bg-white/5 hover:bg-white/10 backdrop-blur-md">Partner With Us</a>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl p-0.5 bg-gradient-to-br from-[#00D9FF] to-[#0088FF]"
          >
            <div className="rounded-2xl bg-[#0D1A33]/90 backdrop-blur-xl p-6">
              <div className="aspect-[16/10] rounded-xl bg-[radial-gradient(400px_200px_at_50%_50%,rgba(0,136,255,0.25),transparent)] border border-white/10 grid place-items-center text-white/70">
                Talent Console Preview
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
