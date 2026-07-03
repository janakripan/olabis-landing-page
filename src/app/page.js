"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustedBrands from "@/components/TrustedBrands";
import ValueProps from "@/components/ValueProps";
import HowItWorks from "@/components/HowItWorks";
import CustomizeMenu from "@/components/CustomizeMenu";
import FeatureSplit from "@/components/FeatureSplit";
import DemoShowcase from "@/components/DemoShowcase";
import BentoFeatures from "@/components/BentoFeatures";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <TrustedBrands />
      <ValueProps />
      <HowItWorks />
      <CustomizeMenu />
      <FeatureSplit />
      <DemoShowcase />
      <BentoFeatures />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
