
import myPic2 from '../assets/myPic/linked.png'

const About = () => {
  return (
    <div className="my-12">
      <h1 className="text-5xl font-bold border-l-8 p-2 pt-4 mb-4">About Me</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 items-center">
      
      <div className="p-8">
        <p className="text-lg text-justify">Welcome to my portfolio! I'm Prodip Kumar Shil, a passionate Front End Developer with a foundation in full stack web development. I recently completed an intensive web development course with Programming Hero, dedicating six months of hard work and dedication to honing my skills.

          Throughout this transformative journey, I have successfully completed over 20 diverse projects, gaining valuable experience and knowledge along the way. These projects have allowed me to tackle various challenges, refine my problem-solving abilities, and develop a keen eye for creating visually appealing and user-friendly websites.</p>
      </div>
      <div className="">
        <img className=' object-cover rounded-full p-8 ' src={myPic2} alt="" />
      </div>
    </div>
    </div>
  );
};

export default About;