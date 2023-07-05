
import myPic2 from '../assets/myPic/linked.png'
import Header from '../shared/Header';

const About = () => {
  return (
    <div id='about' className="my-12">
      <Header text="About Me"></Header>
    <div className="grid grid-cols-1 md:grid-cols-2 items-center">
      
        <div data-aos="fade-up-right" className="p-8">
          <p className="text-lg text-justify">Welcome to my portfolio! I&apos;m Prodip Kumar Shil, a passionate Front End Developer with a foundation in full stack web development. I recently completed an intensive web development course with Programming Hero, dedicating six months of hard work and dedication to honing my skills.

          Throughout this transformative journey, I have successfully completed over 20 diverse projects, gaining valuable experience and knowledge along the way. These projects have allowed me to tackle various challenges, refine my problem-solving abilities, and develop a keen eye for creating visually appealing and user-friendly websites.</p>
      </div>
        <div data-aos="fade-up-left" className="">
        <img className=' object-cover rounded-full p-8 ' src={myPic2} alt="" />
      </div>
    </div>
    </div>
  );
};

export default About;