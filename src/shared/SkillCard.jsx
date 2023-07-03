import Tilt from "react-parallax-tilt";

const SkillCard = ({img, text}) => {

  return (
    <Tilt className="overflow-hidden rounded-xl shadow-xl"  scale={1.04} glareEnable={true} glareColor="#ffffff" glareMaxOpacity={0.5} glarePosition="bottom" glareBorderRadius="20">
      <div className="border rounded-xl h-56 w-64 py-4 flex items-center justify-center">
        <div className="">
          <img className='h-24 w-24 mb-2 mx-auto ' src={img} alt={text} srcSet="" />
          <p className='text-xl uppercase font-semibold text-center'>{text}</p>
        </div>
      </div>
    </Tilt>
  );
};

export default SkillCard;