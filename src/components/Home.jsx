import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
const Home = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center flex-col">
        <div className="max-w-md md:max-w-2xl">
          <h1 className="text-6xl font-bold">I&apos;m Swift River Forge</h1>
          <h1 className="text-2xl font-bold mt-4">Front End Developer</h1>
          <button className="btn bg mt-4">Download Resume</button>
        </div>
        <div className="max-w-md flex items-center gap-4">
          <a href="" target="blank" className="">
            <AiFillGithub className="text-4xl  hover:scale-125 duration-700 hover:animate-bounce"></AiFillGithub>
          </a>
          <a href="" target="blank" className="">
            <AiFillLinkedin className="text-4xl  hover:scale-125 duration-700  hover:animate-bounce"></AiFillLinkedin>
          </a>
          <a href="" target="blank" className="">
            <BsFacebook className="text-4xl  hover:scale-125 duration-700 hover:animate-bounce"></BsFacebook>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;