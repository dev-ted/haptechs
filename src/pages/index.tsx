import { Poppins } from "next/font/google";
import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Head from "next/head";
import Products from "@/components/sections/Products";
import Team from "@/components/sections/Team";
import CountDown from "@/components/ui/CountDown";
import CountDownSection from "@/components/sections/count-down-section/CountDownSection";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function Home() {
  return (
    <div className={`bg-black min-h-screen text-white ${poppins.className}`}>
      <Head>
        <title>Experience Innovation, Embrace Haptechs</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Haptechs" />
        
      </Head>
      <Header />

      <main>
        <Hero />

        <About />

        <Products />
        <Team />
     <CountDownSection />
      </main>

      <Footer />
    </div>
  );
}
