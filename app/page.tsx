import { Architecture } from "@/components/Architecture";
import { DownloadSection } from "@/components/DownloadSection";
import { ExplainerVisual } from "@/components/ExplainerVisual";
import { FeatureGrid } from "@/components/FeatureGrid";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ExplainerVisual />
        <FeatureGrid />
        <Architecture />
        <DownloadSection />
      </main>
      <Footer />
    </>
  );
}
