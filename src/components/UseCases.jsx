import { motion } from "framer-motion";

const cases = [
  {
    title: "Sports",
    desc: "Post-game analysis, pep talks from legends",
    gradient: "from-[#0088FF] to-[#7c3aed]",
  },
  {
    title: "Influencers",
    desc: "Scale fan engagement, monetize while you sleep",
    gradient: "from-[#00D9FF] to-[#0088FF]",
  },
  {
    title: "Entertainment",
    desc: "Behind-the-scenes stories, interactive experiences",
    gradient: "from-[#7c3aed] to-[#00D9FF]",
  },
];

const Case = ({ c, i }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: i * 0.05 }}
    className={`min-w-[280px] rounded-2xl p-0.5 bg-gradient-to-br ${c.gradient}`}
  >
    <div className="rounded-2xl bg-[#0D1A33]/90 backdrop-blur-xl p-6 h-full">
      <h3 className="text-white font-semibold">{c.title}</h3>
      <p className="text-white/70 text-sm mt-1">{c.desc}</p>
    </div>
  </motion.div>
);

export default function UseCases() {
  return (
    <section className="relative py-24 bg-[#0A1628]" id="use-cases">
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Use Cases</h2>
        </div>
        <div className="overflow-x-auto no-scrollbar">
          <div className="flex gap-6 pr-6">
            {cases.map((c, i) => (
              <Case key={c.title} c={c} i={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
