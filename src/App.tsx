import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { QuantResearch } from "./components/QuantResearch";
import { Skills } from "./components/Skills";

export default function App() {
  return (
    <div className="min-h-screen bg-ink text-slate-100">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <QuantResearch />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
