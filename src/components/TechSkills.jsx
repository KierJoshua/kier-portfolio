import React from "react";
import PageTitles from "./PageTitles";
import SkillsCarousel from "./TechnicalSkills/SkillsCarousel";

const TechSkills = () => {
  return (
    <section id="skills">
    <div className=" bg-slate-900 pb-28">
      <PageTitles name="Technical Skills" />
      {/* <div className="mx-auto w-full container flex justify-center " data-aos="fade-left" data-aos-duration = '1000'> */}
        <SkillsCarousel />
    </div>
    </section>
  );
};

export default TechSkills;
