import html from '../assets/logos/html.png'
import css from '../assets/logos/css.png'
import bootstrap from '../assets/logos/bootstrap.png'
import express from '../assets/logos/express.png'
import firebase from '../assets/logos/firebase.png'
import js from '../assets/logos/js.png'
import mongodb from '../assets/logos/mongodb.png'
import nodejs from '../assets/logos/nodejs.png'
import react from '../assets/logos/react.png'
import tailwindcss from '../assets/logos/tailwindcss.png'
import SkillCard from '../shared/SkillCard';

const Skills = () => {
  return (
    <div className="px-2">
      <h1 className="text-5xl font-bold border-l-8 p-2 ">Skills</h1>
      <div className="flex flex-wrap px-8 gap-4 justify-center py-6">
        {/* skill card */}
        <SkillCard img={html} text="html"></SkillCard>
        <SkillCard img={css} text="css"></SkillCard>
        <SkillCard img={js} text="javascript"></SkillCard>
        <SkillCard img={bootstrap} text="bootstrap"></SkillCard>
        <SkillCard img={tailwindcss} text="tailwind"></SkillCard>
        <SkillCard img={react} text="react"></SkillCard>
        <SkillCard img={nodejs} text="node js"></SkillCard>
        <SkillCard img={express} text="express js"></SkillCard>
        <SkillCard img={firebase} text="firebase"></SkillCard>
        <SkillCard img={mongodb} text="mongodb"></SkillCard>
        
      </div>
    </div>
  );
};

export default Skills;