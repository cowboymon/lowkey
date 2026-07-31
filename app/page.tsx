import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Ingredients from "@/components/Ingredients";
import ProductShowcase from "@/components/ProductShowcase";
import Philosophy from "@/components/Philosophy";
import WaitlistSection from "@/components/WaitlistSection";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ ref?: string }>;
}) {
  // ?ref=<campaign> from Instagram/TikTok bio links — stored on each signup.
  const { ref } = await searchParams;
  const source = typeof ref === "string" && ref.length > 0 ? ref : null;

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Benefits />
        <Ingredients />
        <ProductShowcase />
        <Philosophy />
        <WaitlistSection source={source} />
        <Faq />
      </main>
      <Footer source={source} />
    </>
  );
}
