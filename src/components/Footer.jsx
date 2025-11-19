import { Instagram, Twitter, Youtube, Shield } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0A1628] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-semibold">MIMIC</h3>
            <p className="text-white/70 text-sm mt-2">AI-powered voice interactions with celebrities and creators.</p>
          </div>
          <div>
            <h4 className="text-white font-medium">Product</h4>
            <ul className="mt-3 space-y-2 text-white/70 text-sm">
              <li><a href="#features" className="hover:text-white">Features</a></li>
              <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
              <li><a href="#use-cases" className="hover:text-white">Use Cases</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium">Company</h4>
            <ul className="mt-3 space-y-2 text-white/70 text-sm">
              <li><a href="#talents" className="hover:text-white">Partners</a></li>
              <li><a href="#trust" className="hover:text-white">Trust</a></li>
              <li><a href="#" className="hover:text-white">Legal</a></li>
              <li><a href="#" className="hover:text-white">Privacy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium">Stay in the loop</h4>
            <div className="mt-3 flex gap-2">
              <input className="flex-1 rounded-xl bg-white/5 border border-white/10 px-3 py-2 text-white placeholder-white/50 outline-none" placeholder="Email address" />
              <button className="rounded-xl bg-gradient-to-r from-[#00D9FF] to-[#0088FF] text-[#0A1628] font-semibold px-4">Join</button>
            </div>
            <div className="flex gap-3 mt-4 text-white/60">
              <a href="#" className="hover:text-white"><Twitter size={18} /></a>
              <a href="#" className="hover:text-white"><Instagram size={18} /></a>
              <a href="#" className="hover:text-white"><Youtube size={18} /></a>
            </div>
          </div>
        </div>
        <div className="mt-10 flex items-center justify-between text-white/60 text-sm">
          <p>Powered by VELENTIS AI</p>
          <div className="flex items-center gap-2"><Shield size={16} /> GDPR Ready</div>
        </div>
      </div>
    </footer>
  );
}
