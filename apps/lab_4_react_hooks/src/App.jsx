import { useEffect, useState } from "react";

import Header from "./components/Header";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Contacts from "./components/Contacts";
import Reviews from "./components/Reviews";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme");

    if (saved) {
      setTheme(saved);
    } else {
      const hour = new Date().getHours();
      setTheme(hour >= 7 && hour < 21 ? "light" : "dark");
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className="min-h-screen bg-white text-black dark:bg-[#0f0f0f] dark:text-white transition relative overflow-hidden">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute left-[-120px] bottom-[-120px] w-[320px] h-[320px] border border-black/20 dark:border-white/20 rotate-45"></div>
        <div className="absolute right-[-120px] top-[-120px] w-[320px] h-[320px] border border-black/20 dark:border-white/20 rounded-full"></div>
      </div>
      <div className="relative z-10 max-w-5xl mx-auto px-8 py-10">
        <Header toggleTheme={toggleTheme} />
        <div className="mt-6 border-t border-black dark:border-white/20 pt-6 grid grid-cols-2 gap-12">
          <div className="space-y-10">
            <Experience />
          </div>
          <div className="space-y-10">
            <Education />
            <About />
            <Contacts />
          </div>
        </div>
        <div className="mt-10">
          <Reviews />
        </div>
        <ContactForm />
        <Footer />
      </div>
    </div>
  );
}
