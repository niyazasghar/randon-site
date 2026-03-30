import Hero from "@/components/home/Hero";
import FeaturedWork from "@/components/home/FeaturedWork";
import WhatWeBuild from "@/components/home/WhatWeBuild";
import TechStack from "@/components/home/TechStack";
import FAQ from "@/components/home/FAQ";
import ContactSection from "@/components/home/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col bg-background-dark overflow-hidden">
      <Hero />
      <FeaturedWork />
      
      {/* Studio Positioning Section */}
      <section className="bg-background-dark border-t border-white/5 relative z-10 py-32 lg:py-56">
         <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <h2 className="text-section-title text-white">
               Engineering-Led. <br />
               Startup-Focused. <br />
               <span className="text-secondary opacity-40">Future-Proof.</span>
            </h2>
            <div className="max-w-2xl">
               <p className="text-xl md:text-2xl text-brand-gray-400 leading-relaxed font-light mb-10 text-balance">
                  DevShuttle is a digital agency focused on building premium websites, scalable web applications, and modern mobile apps for startups and growing businesses.
               </p>
               <p className="text-lg text-brand-gray-500 leading-relaxed font-light text-balance">
                  From high-performance marketing websites and landing pages to custom business platforms and native mobile applications, our solutions are designed to help companies launch faster and scale their digital presence.
               </p>
               <p className="text-md text-brand-gray-600 leading-relaxed font-light mt-8 pt-8 border-t border-white/5 italic">
                  With a technical foundation led by an IIIT Graduate Software Engineer, we combine architectural depth with elite design to deliver exceptional digital products.
               </p>
            </div>
         </div>
      </section>

      <WhatWeBuild />
      <TechStack />
      <FAQ />
      <ContactSection />
    </div>
  );
}
