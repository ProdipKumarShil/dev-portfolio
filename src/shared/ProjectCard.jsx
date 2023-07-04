

const ProjectCard = ({img, category, name, liveLink, clientLink, serverLink, technologies, description}) => {
  console.log(technologies)
  return (
    <div className="card w-full  shadow-xl">
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
          <a target="_blank" rel="noopener noreferrer" className='btn' href={liveLink}>Live Site</a>
          <br />
          <a target="_blank" rel="noopener noreferrer" className='btn mr-2' href={clientLink}>Client Code</a>
          <a target="_blank" rel="noopener noreferrer" className='btn' href={serverLink}>Server Code</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;