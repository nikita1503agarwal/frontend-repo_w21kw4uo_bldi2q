import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'
import Pricing from './components/Pricing'
import UseCases from './components/UseCases'
import Trust from './components/Trust'
import Partners from './components/Partners'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#0A1628] text-white">
      <header className="fixed top-0 inset-x-0 z-50 bg-[#0A1628]/70 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-extrabold tracking-tight text-white">MIMIC</a>
          <nav className="hidden md:flex items-center gap-6 text-white/70">
            <a href="#how" className="hover:text-white">How it works</a>
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#use-cases" className="hover:text-white">Use Cases</a>
            <a href="#trust" className="hover:text-white">Trust</a>
            <a href="#talents" className="hover:text-white">For Talents</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#pricing" className="hidden sm:inline-flex rounded-xl border border-cyan-400/40 text-cyan-200 px-4 py-2 bg-white/5 hover:bg-white/10 backdrop-blur-md">See Talents</a>
            <a href="#pricing" className="inline-flex rounded-xl bg-gradient-to-r from-[#00D9FF] to-[#0088FF] text-[#0A1628] font-semibold px-4 py-2">Start Free Chat</a>
          </div>
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <HowItWorks />
        <Features />
        <Pricing />
        <UseCases />
        <Trust />
        <Partners />
      </main>

      <Footer />
    </div>
  )
}

export default App
