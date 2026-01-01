import SystemWindow from "../ui/SystemWindow";

const skills = [
  "JavaScript",
  "UI/UX Design",
  "Node.js",
  "Adobe CC",
  "Figma",
  "HTML/CSS",
  "Python",
  "3D Modeling",
  "Block Code",
  "Canva",
  "Graphic Design",
  "React.js",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background grid-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SystemWindow title="about_me.txt" className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
            {/* Avatar placeholder */}
            <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-border flex items-center justify-center">
              <span className="text-6xl">🪻</span>
            </div>

            <div className="flex-1 max-w-2xl text-center md:text-left">
              <h2 className="text-xl sm:text-2xl font-pixel text-primary mb-4 title-shadow">
                $ cat about_me
              </h2>

              <p className="text-base text-foreground/80 mb-3 font-mono">
                Hello! I'm a student in high school interested in design, tech, and business. I've always been fascinated by how technology can solve real-world problems.
              </p>
              <p className="text-base text-foreground/80 font-mono">
                When I'm not coding, you can find me reading, designing, or exploring video games. Always eager to learn and collaborate.
              </p>

              {/* Skills */}
              <div className="mt-6">
                <h3 className="text-lg font-pixel text-primary mb-3">$ ls skills/</h3>
                <div className="flex flex-wrap justify-center md:justify-start gap-2">
                  {skills.map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </SystemWindow>
      </div>
    </section>
  );
};

export default AboutSection;
