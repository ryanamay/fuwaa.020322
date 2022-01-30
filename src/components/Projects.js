import projects from "/public/projects.json";
import Card from "../components/Card";
import { BsArrowRightShort } from "react-icons/bs";

export default function Projects() {
    return (<div className="flex flex-col flex-grow lg:mx-12 sm:mx-0">
        <div className="flex flex-2 flex-col px-12 justify-center text-center item-center">
            <div className="flex flex-col px-12 pb-12 justify-center">
                <h1 className="mt-20 text-4xl font-bold text-5xl text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-indigo-600">Projects</h1>
                <h3>Some of the best.</h3>
                <div className="flex flex-row justify-center m-5 ">
                    {projects.map((project) => (
                        <Card
                          name={project.name}
                          description={project.description}
                          image={project.image}
                          link={project.link}
                        />
                    ))}
                </div>
                <button href="" className="rounded bg-blue-300 p-1 px-3 mx-auto flex items-center">See All Projects <BsArrowRightShort className="ml-2" /></button>
            </div>
        </div>
      </div>)
}