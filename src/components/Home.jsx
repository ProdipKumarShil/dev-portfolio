import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import Button from "../shared/Button";
const Home = () => {
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content text-center flex-col">
        <div className="max-w-md md:max-w-2xl">
          <h1 data-aos="fade-up" data-aos-duration="1000" className="text-6xl font-bold my-4">Hello</h1>
          <h1 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600" className="text-6xl font-bold my-4">I&apos;m Prodip Kumar Shil</h1>
          <h1 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1200" className="text-2xl font-bold my-4">Front End Developer</h1>
          <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1800" className="">

          <Button  text={"Download Resume"} link="/public/resume/resume.pdf"></Button>
          </div>
        </div>
        <div className="max-w-md flex items-center gap-4">
          <a data-aos="fade-right" data-aos-duration="800" data-aos-delay="2600" href="https://github.com/ProdipKumarShil" rel="noopener noreferrer" target="_blank" className="">
            <AiFillGithub className="text-4xl  hover:scale-125 duration-700 hover:animate-bounce"></AiFillGithub>
          </a>
          <a data-aos="fade-right" data-aos-duration="800" data-aos-delay="2400" href="https://www.linkedin.com/in/prodip-kumar-shil-4159b7280/" rel="noopener noreferrer" target="_blank" className="">
            <AiFillLinkedin className="text-4xl  hover:scale-125 duration-700  hover:animate-bounce"></AiFillLinkedin>
          </a>
          <a data-aos="fade-right" data-aos-duration="800" data-aos-delay="2200" href="https://www.facebook.com/prodip.kumar.7965" rel="noopener noreferrer" target="_blank" className="">
            <BsFacebook className="text-4xl  hover:scale-125 duration-700 hover:animate-bounce"></BsFacebook>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;