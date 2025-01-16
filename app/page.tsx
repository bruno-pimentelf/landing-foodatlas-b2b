import Benefits from "./components/Benefits";
import CTA from "./components/CTA";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";


export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <Header />
      <Hero />
      <About />
      <Features />
      <Benefits />
      <CTA />
      <Footer />
    </main>
  )
}

