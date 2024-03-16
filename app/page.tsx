import AboutUsSectionOne from "@/corePage/aboutUs/AboutUsSectionOne";
import AboutUsSectionFive from "@/corePage/aboutUs/modules/AboutUsSectionFive/AboutUsSectionFive";
import AboutUsSectionFour from "@/corePage/aboutUs/modules/AboutUsSectionFour/AboutUsSectionFour";
import AboutUsSectionThree from "@/corePage/aboutUs/modules/AboutUsSectionThree/AboutUsSectionThree";
import AboutUsSectionTwo from "@/corePage/aboutUs/modules/AboutUsSectionTwo/AboutUsSectionTwo";
import Herobox from "@/corePage/herobox/Herobox";
import WhatWeDo from "@/corePage/whatWeDo/WhatWeDo";
import CategoriesSectionFive from "@/corePage/whatWeDo/modules/CategoriesSectionFive/CategoriesSectionFive";
import CategoriesSectionFour from "@/corePage/whatWeDo/modules/CategoriesSectionFour/CategoriesSectionFour";
import CategoriesSectionOne from "@/corePage/whatWeDo/modules/CategoriesSectionOne/CategoriesSectionOne";
import CategoriesSectionSix from "@/corePage/whatWeDo/modules/CategoriesSectionSix/CategoriesSectionSix";
import CategoriesSectionThree from "@/corePage/whatWeDo/modules/CategoriesSectionThree/CategoriesSectionThree";
import CategoriesSectionTwo from "@/corePage/whatWeDo/modules/CategoriesSectionTwo/CategoriesSectionTwo";
import WhyUs from "@/corePage/whyUs/WhyUs";
import WhyUsSectionTwo from "@/corePage/whyUs/modules/WhyUsSectionTwo/WhyUsSectionTwo";

export default function Home() {
  return (
    <main>
      <Herobox />
      <AboutUsSectionOne />
      <AboutUsSectionTwo />
      <AboutUsSectionThree />
      <AboutUsSectionFour />
      <AboutUsSectionFive />
      <WhyUs />
      <WhyUsSectionTwo />
      <WhatWeDo />
      <CategoriesSectionOne />
      <CategoriesSectionTwo />
      <CategoriesSectionThree />
      <CategoriesSectionFour />
      <CategoriesSectionFive />
      <CategoriesSectionSix />
    </main>
  );
}
