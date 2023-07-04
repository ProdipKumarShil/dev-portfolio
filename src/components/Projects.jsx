import ProjectCard from "../shared/ProjectCard";
import candy from '../assets/web/candyLandToys.png'
import chefs from '../assets/web/indianaChefs.png'
import fit from '../assets/web/getFit.png'
import Header from "../shared/Header";

const Projects = () => {
 
  return (
    <div >
      <Header text="My Projects"></Header>
      <div className="grid mx-4  md:grid-cols-3 py-4 gap-4">
        <ProjectCard img={chefs} category='react' name='Indiana Chefs' liveLink='https://ph-assignment-10-75696.web.app/' clientLink='https://github.com/ProdipKumarShil/ph-assignment-10-client' serverLink='https://github.com/ProdipKumarShil/ph-assignment-10-server' technologies={["React", "Tailwind css", "Flowbite", "Firebase"]}></ProjectCard>
        <ProjectCard img={candy} category="mern" name="Candy Land Toys" liveLink="https://candy-land-toys.web.app/" clientLink="https://github.com/ProdipKumarShil/ph-assignment-11-client" serverLink="https://github.com/ProdipKumarShil/ph-assignment-11-server" technologies={["React", "Tailwind css", "Flowbite", "Mongo DB", "ExpressJS", "Firebase"]}></ProjectCard>
        <ProjectCard img={fit} category='mern' name='Get Fit' liveLink='https://get-fit-47cf5.web.app/' clientLink='https://github.com/ProdipKumarShil/ph-assignment-12-client' serverLink='https://github.com/ProdipKumarShil/ph-assignment-12-server' technologies={["React", "Tailwind css", "Daisy ui", "Mongo DB", "ExpressJS", "Firebase"]}></ProjectCard>
      </div>
    </div>
  );
};

export default Projects;