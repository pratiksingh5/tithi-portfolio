import Image from "next/image";
import { Header, Footer, Hero, Fun, Work } from "@/components";
import Books from "@/components/Books";

export default function Home() {
  return (
    <div className="w-full h-full" suppressHydrationWarning>
      <Header />
      <Hero />
      <Books/>
      <Work />
      <Fun />

      <Footer />
    </div>
  );
}
