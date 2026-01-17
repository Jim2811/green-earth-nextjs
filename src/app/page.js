import Image from "next/image";
import HeroSection from "./components/HomeSections/Hero";
import AboutSection from "./components/HomeSections/About";
import CategoriesSection from "./components/HomeSections/CategoriesSection";
import FeaturedPosts from "./components/HomeSections/FeaturedTrees";
import TestimonialsSection from "./components/HomeSections/TestimonialsSection";
import NewsletterSection from "./components/HomeSections/NewsletterSection";
import CTASection from "./components/HomeSections/CTASection";

export default function Home() {
  return (
   <>
    <HeroSection></HeroSection>
    <AboutSection></AboutSection>
    <CategoriesSection></CategoriesSection>
    <FeaturedPosts></FeaturedPosts> 
    <TestimonialsSection></TestimonialsSection>
    <NewsletterSection></NewsletterSection>
    <CTASection></CTASection>
  </>
  );
}
