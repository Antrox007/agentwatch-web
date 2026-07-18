import { Architecture } from "@/components/Architecture";
import { DashboardMockup } from "@/components/DashboardMockup";
import { DownloadSection } from "@/components/DownloadSection";
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
        <DashboardMockup />
        <FeatureGrid />
        <Architecture />
        <DownloadSection />
      </main>
      <Footer />
    </>
  );
}
