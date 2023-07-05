import Button from "./Button";


const ProjectCard = ({img, category, name, liveLink, clientLink, serverLink, technologies, description}) => {
  console.log(technologies)
  return (
    <div className="card w-full  shadow-xl bg-base-200">
      <figure><img className=" object-cover" src={img} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          <div className="badge badge-secondary uppercase">{category}</div>
        </h2>
        <p>{description}</p>
        <div className="card-actions ">
          {
            technologies.map((tech, idx) => <div key={idx} className="badge badge-outline">{tech}</div> )
          }
        </div>
        <div className="space-y-2">
          <Button text="Live Site" link={liveLink}></Button>
          <br />
          <div className="flex gap-2">
          <Button text="Client Code" link={clientLink}></Button>

          <Button text="Server Code" link={serverLink}></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;