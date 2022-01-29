import Image from "next/image";
import SEO from "../components/SEO";
import Navbar from "../components/Navbar";
import Projects from "/public/projects.json";
import Card from "../components/Card";

export default function Home() {
  return (
    <main className="">
      <SEO title="Home" />
      <Navbar />
      <h1 className="pt-20 text-center text-4xl font-bold">Projects</h1>
      <div className="flex flex-row mt-5 justify-center">
          {Projects.map((project) => (
              <Card
                name={project.name}
                description={project.description}
                image={project.image}
                link={project.link}
              />
          ))}
          ;
      </div>
    </main>
  );
}
