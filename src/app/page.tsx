import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Industries } from "@/components/Industries";
import { WhyOrbit } from "@/components/WhyOrbit";
import { Founder } from "@/components/Founder";
import { EuropeanCoverage } from "@/components/EuropeanCoverage";
import { JoinNetwork } from "@/components/JoinNetwork";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Industries />
        <WhyOrbit />
        <Founder />
        <EuropeanCoverage />
        <JoinNetwork />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
