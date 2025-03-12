import Image from "next/image";
import { Header, Footer, Hero, Drawings, Blogs , Books} from "@/components";

export default function Home() {
  return (
    <div className="w-full h-full" suppressHydrationWarning>
      <Header />
      <Hero />
      <Books />
      <Blogs />
      <Drawings />
      <Footer />
    </div>
  );
}
