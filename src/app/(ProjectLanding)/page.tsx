"use client";

import HeroSection from "@/components/HomePage/HeroSection";
import FeatureSection from "@/components/HomePage/FeatureSection";
import TokenSaleSection from "@/components/HomePage/TokenSaleSection";
import TokenUtilsSections from "@/components/HomePage/TokenUtils";
import StartSection from "@/components/HomePage/StarSection";
import FaqSection from "@/components/HomePage/FaqSection";
import GettingStartSection from "@/components/HomePage/GettingStart";
import ContactSection from "@/components/HomePage/ContactSection";

export default function CryptoLandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <FeatureSection />
      <TokenSaleSection />
      <TokenUtilsSections />
      <StartSection />
      <FaqSection />
      <GettingStartSection />
      <ContactSection />
    </div>
  );
}
