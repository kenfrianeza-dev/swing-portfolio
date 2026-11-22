import { Header } from "@/components/header";
import {
  Contact,
  Credentials,
  Experience,
  Footer,
  Hero,
  Rotations,
  Skills,
} from "@/components/sections";

export default function Page() {
  return (
    <>
      <Header />
      <main id="content" className="flex-1">
        <Hero />
        <Experience />
        <Skills />
        <Rotations />
        <Credentials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
