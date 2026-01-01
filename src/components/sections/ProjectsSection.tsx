import SystemWindow from "../ui/SystemWindow";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    id: "1",
    title: "Interactive 3D Solar System Simulation",
    description:
      "A web-based 3D model of the solar system using Three.js, allowing users to explore planets and their orbits.",
    image: "https://i.pinimg.com/originals/6d/42/55/6d4255e2907ff6855f4b3d46cacaf52c.gif",
    link: "project1.html",
  },
  {
    id: "2",
    title: "Code.org App Lab Projects",
    description:
      "Two interactive educational applications built using Code.org's App Lab: a Biology EOC Quiz App and a Logical Fallacies Quiz App.",
    image: "https://i.pinimg.com/originals/37/99/89/37998934519670dc8e6ab016bee033a6.gif",
    link: "project2.html",
  },
  {
    id: "3",
    title: "Animal Cell & Plant Cell 3D Model Showcase",
    description:
      "A 3D model showcase of animal and plant cells created using Tinkercad, highlighting each cellular structure.",
    image: "https://i.pinimg.com/originals/25/07/9d/25079d1239fe0485fe8f97039e348253.gif",
    link: "project3.html",
  },
  {
    id: "4",
    title: "UI/UX Design Gallery",
    description: "Contains a collection of my UI/UX design work.",
    image: "https://i.pinimg.com/originals/39/0b/f6/390bf6020d2540564bfdcd20d06a2c94.gif",
    link: "project4.html",
  },
  {
    id: "5",
    title: "Graphic Design Gallery",
    description: "Filled with a collection of my graphic design work.",
    image: "https://i.pinimg.com/originals/be/6d/ed/be6ded46b365626b0812a41b75875d59.gif",
    link: "project5.html",
  },
  {
    id: "6",
    title: "CropIt Hackathon Startup Project",
    description: "Cropit empowers farmers to future-proof their land while growing profits by using AI to guide decisions instantly revealing the impact of every choice.",
    image: "https://i.pinimg.com/originals/22/81/be/2281bebe739a719571736eae5d2ef721.gif",
    link: "project6.html",
  },
];

const ProjectCard = ({ project }: { project: Project }) => (
  <SystemWindow title={`project_${project.id}.exe`} className="group hover:-translate-y-1 transition-all duration-300">
    <div className="relative overflow-hidden rounded-lg mb-4">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
        loading="lazy"
      />
    </div>
    <h3 className="text-sm font-pixel text-primary mb-2 leading-relaxed">{project.title}</h3>
    <p className="text-foreground/70 mb-4 text-xs font-mono">{project.description}</p>
    <a
      href={project.link}
      className="btn-press inline-flex items-center px-4 py-2 rounded-lg text-xs font-mono bg-secondary text-foreground border border-border"
    >
      <i className="fas fa-external-link-alt mr-2" /> ./open
    </a>
  </SystemWindow>
);

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 gradient-mesh">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-pixel text-center text-primary mb-12 title-shadow">
          $ ls ~/projects/
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
