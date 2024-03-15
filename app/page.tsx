import Homepage from "@/contexts/Homepage/Homepage";
import AboutUsSectionOne from "@/corePage/aboutUs/AboutUsSectionOne";
import AboutUsSectionFour from "@/corePage/aboutUs/modules/AboutUsSectionFour/AboutUsSectionFour";
import AboutUsSectionThree from "@/corePage/aboutUs/modules/AboutUsSectionThree/AboutUsSectionThree";
import AboutUsSectionTwo from "@/corePage/aboutUs/modules/AboutUsSectionTwo/AboutUsSectionTwo";
import Herobox from "@/corePage/herobox/Herobox";

export default function Home() {
  return (
    <main>
      <Herobox />
      <AboutUsSectionOne />
      <AboutUsSectionTwo />
      <AboutUsSectionThree />
      <AboutUsSectionFour />
    </main>
  );
}
