import { Project } from "../components/Project";
import { projectSamples } from "../constants";

const Work = () => {
  return (
    <div className="mx-auto mt-10 pb-60 h-full max-w-5xl w-screen">
      <h1 className="pageHeading mb-3">Recent Projects</h1>
      <div className="px-6 py-10 flex flexCenter items-center">
      
        <div className="grid md:grid-cols-2 gap-8 grid-cols-1 ">
          {projectSamples.map((project)=> (
            <Project key={project.title} title={project.title} imageUrl={project.imageUrl} githubUrl={project.githubUrl} liveSiteUrl={project.liveSiteUrl} description={project.description} />

          ))}
      
      
        </div>
      </div>




    </div>
  )
}
export default Work;


