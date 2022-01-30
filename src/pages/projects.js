import SEO from "../components/SEO";
import Navbar from "../components/Navbar";
import Projects from "/public/projects.json";
import Card from "../components/Card";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="">
      <SEO title="Project" />
      <Navbar />
      <div className="min-h-screen">
        <h1 className="pt-20 text-center text-4xl font-bold">Projects</h1>
        <h3 className="pt-2 text-center text-1xl">Here&apos;s all the projects I have done.</h3>
        <div className="block md:flex flex-row mt-5 justify-center">
          {Projects.map((project) => (
            <Card
            key={project.id}
              name={project.name}
              description={project.description}
              image={project.image}
              link={project.link}
              source={project.source}
              tech={project.tech}
            />
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
