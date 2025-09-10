import Footer from "@/components/landing/footer";
import HeroSection from "@/components/landing/hero-section";
import NavigationBar from "@/components/landing/navigation-bar";
import TrustedBy from "@/components/landing/trusted-by";

export default function Home() {
  return (
    <div
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(251, 191, 36, 0.25), transparent 70%), #000000",
      }}
      className="min-h-screen overflow-x-hidden"
    >
      <div className="bg-transparent px-4 ">
        <NavigationBar />
        <div className="flex flex-col gap-y-12">
          <HeroSection />
          <TrustedBy />
          <Footer />
        </div>
      </div>
    </div>
  );
}
