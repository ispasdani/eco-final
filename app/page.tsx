import Homepage from "@/contexts/Homepage/Homepage";
import AboutUsSectionOne from "@/corePage/aboutUs/AboutUsSectionOne";
import Herobox from "@/corePage/herobox/Herobox";
import WhyUs from "@/corePage/whyUs/WhyUs";

export default function Home() {
  return (
    <main>
      <Herobox />
      <AboutUsSectionOne />
    </main>
  );
}
