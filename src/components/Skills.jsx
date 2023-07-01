import html from '../assets/logos/html.png'
import SkillCard from '../shared/SkillCard';
import Tilt from "react-parallax-tilt";

const Skills = () => {
  return (
    <div className="px-2">
      <h1 className="text-5xl font-bold border-l-8 p-2 ">Skills</h1>
      <div className="flex flex-wrap px-8 gap-4 justify-center py-6">
        {/* skill card */}
        <SkillCard img={html} text="html"></SkillCard>
        <SkillCard img={html} text="html"></SkillCard>
        <SkillCard img={html} text="html"></SkillCard>
        <SkillCard img={html} text="html"></SkillCard>
        <SkillCard img={html} text="html"></SkillCard>
        <SkillCard img={html} text="html"></SkillCard>
        <SkillCard img={html} text="html"></SkillCard>
        
        
        
      </div>
    </div>
  );
};

export default Skills;