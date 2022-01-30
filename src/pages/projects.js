import SEO from "../components/SEO";
import Navbar from "../components/Navbar";
import Projects from "/public/projects.json";
import Card from "../components/Card";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="">
      <SEO title="Home" />
      <Navbar />
      <div className="min-h-screen">
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
        </div>
      </div>
      <Footer />
    </main>
  );
}
