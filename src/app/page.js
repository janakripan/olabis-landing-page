"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustedBrands from "@/components/TrustedBrands";
import ValueProps from "@/components/ValueProps";
import DarkContrast from "@/components/DarkContrast";
import OrderTracking from "@/components/OrderTracking";
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
      <DarkContrast />
      <OrderTracking />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
