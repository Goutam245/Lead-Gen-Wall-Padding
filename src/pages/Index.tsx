import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { VideoShowcase } from "@/components/VideoShowcase";
import { ProductGallery } from "@/components/ProductGallery";
import { Features } from "@/components/Features";
import { SocialProof } from "@/components/SocialProof";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <VideoShowcase />
        <section id="gallery">
          <ProductGallery />
        </section>
        <section id="features">
          <Features />
        </section>
        <SocialProof />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
