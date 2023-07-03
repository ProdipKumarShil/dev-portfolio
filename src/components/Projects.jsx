import ProjectCard from "../shared/ProjectCard";


const Projects = () => {
 
  return (
    <div >
      <h1 className="text-5xl font-bold">My Projects</h1>
      <div className="grid  md:grid-cols-3 py-4 gap-4">
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
      </div>
    </div>
  );
};

export default Projects;