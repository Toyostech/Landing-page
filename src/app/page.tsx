import Award from "@/component/award/Award";
import Featured from "@/component/featured/Featured";

import Header from "@/component/header/Header";
import HeroSection from "@/component/HeroSecion/HeroSection";
import Price from "@/component/price/Price";
import Recent from "@/component/recent/Recent";
import Team from "@/component/team/Team";




export default function Home() {
  return (
    <>

      <div className="" >
        <HeroSection />
        <Featured/> 
       
        <Recent/>
        <Award/>
        <Team/>
        {/* <Price/> */}
      </div>

    </>
  );
}
