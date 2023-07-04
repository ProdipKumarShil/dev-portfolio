import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
const Home = () => {
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content text-center flex-col">
        <div className="max-w-md md:max-w-2xl">
          <h1 className="text-6xl font-bold">I&apos;m Prodip Kumar Shil</h1>
          <h1 className="text-2xl font-bold mt-4">Front End Developer</h1>

          <a href="/public/resume/resume.pdf" download="resume.pdf" className="btn bg mt-4">Download Resume</a>

        </div>
        <div className="max-w-md flex items-center gap-4">
          <a href="https://github.com/ProdipKumarShil" rel="noopener noreferrer" target="_blank" className="">
            <AiFillGithub className="text-4xl  hover:scale-125 duration-700 hover:animate-bounce"></AiFillGithub>
          </a>
          <a href="https://www.linkedin.com/in/prodip-kumar-shil-4159b7280/" rel="noopener noreferrer" target="_blank" className="">
            <AiFillLinkedin className="text-4xl  hover:scale-125 duration-700  hover:animate-bounce"></AiFillLinkedin>
          </a>
          <a href="https://www.facebook.com/prodip.kumar.7965" rel="noopener noreferrer" target="_blank" className="">
            <BsFacebook className="text-4xl  hover:scale-125 duration-700 hover:animate-bounce"></BsFacebook>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;