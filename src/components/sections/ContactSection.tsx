import SystemWindow from "../ui/SystemWindow";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-background grid-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SystemWindow title="contact.sh" className="text-center">
          <h2 className="text-xl sm:text-2xl font-pixel text-primary mb-4 title-shadow">
            $ ./connect_with_me
          </h2>
          <p className="text-base text-foreground/80 max-w-2xl mx-auto mb-8 font-mono">
            {">"} Ready to collaborate? Send a signal to any of these endpoints:
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="mailto:davivilin@gmail.com"
              className="btn-press inline-flex items-center justify-center px-5 py-3 rounded-lg font-mono text-sm bg-primary text-primary-foreground"
            >
              <i className="fas fa-envelope mr-2" /> email
            </a>

            <a
              href="https://www.linkedin.com/in/davina-lin-654121398/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-press inline-flex items-center justify-center px-5 py-3 rounded-lg font-mono text-sm bg-card text-foreground border-2 border-border"
            >
              <i className="fab fa-linkedin mr-2" /> linkedin
            </a>

            <a
              href="https://github.com/davivilin"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-press inline-flex items-center justify-center px-5 py-3 rounded-lg font-mono text-sm bg-card text-foreground border-2 border-border"
            >
              <i className="fab fa-github mr-2" /> github
            </a>
          </div>

          <p className="mt-8 text-xs text-muted-foreground font-mono">
            {">"} Connection timeout: never | Status: always_online
          </p>
        </SystemWindow>
      </div>
    </section>
  );
};

export default ContactSection;
