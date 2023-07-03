import img from '../assets/web/candyLandToys.png'

const ProjectCard = () => {
  return (
    <div className="card w-full  shadow-xl">
      <figure><img src={img} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">
          Candy Land Toys
          <div className="badge badge-secondary">MERN</div>
        </h2>
        <p>This is my mern stack project</p>
        <div className="card-actions ">
          <div className="badge badge-outline">React</div>
          <div className="badge badge-outline">Tailwind css</div>
          <div className="badge badge-outline">Flowbite</div>
          <div className="badge badge-outline">Mongo DB</div>
          <div className="badge badge-outline">Express</div>
          <div className="badge badge-outline">Firebase</div>
        </div>
        <div className="space-y-2">
          <a className='btn' href="">Live Site</a>
          <br />
          <a className='btn mr-2' href="">Client Code</a>
          <a className='btn' href="">Server Code</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;