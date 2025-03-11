import Image from "next/image";
import { Header, Footer, Hero, Fun, Work } from "@/components";

export default function Home() {
  return (
    <div className="w-full h-full" suppressHydrationWarning>
      <Header />
      <Hero />
      <Work />
      <Fun />

      <Footer />
    </div>
  );
}
