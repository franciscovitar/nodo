// page.jsx - Página principal
"use client";

import { useEffect, useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Steps from "../components/Steps";
import Services from "../components/Services";
import Plans from "../components/Plans";
import Results from "../components/Results";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Resources from "../components/Resources";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

// Forzar renderizado dinámico
export const dynamic = "force-dynamic";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // o un loading spinner
  }

  return (
    <>
      <Header />
      <main>
        <Hero />

        <Services />
        <Steps />
        <Plans />
        <Results />
        <Testimonials />
        <FAQ />
        {/* <Resources /> */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
