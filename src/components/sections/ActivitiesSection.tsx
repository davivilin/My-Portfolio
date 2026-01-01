const activities = [
  {
    year: "2024",
    title: "President of Coding Club",
    description: "Leading weekly workshops and hackathon preparations.",
    icon: "fas fa-crown",
  },
  {
    year: "2024",
    title: "Hackathon Volunteer",
    description: "Mentored 50+ participants at regional coding competition.",
    icon: "fas fa-hands-helping",
  },
  {
    year: "2023",
    title: "Community Tech Tutor",
    description: "Teaching programming basics to middle school students.",
    icon: "fas fa-chalkboard-teacher",
  },
  {
    year: "2023",
    title: "Design Lead - Yearbook",
    description: "Managed creative direction and digital layouts.",
    icon: "fas fa-palette",
  },
];

const ActivitiesSection = () => {
  return (
    <section id="activities" className="py-24 relative gradient-mesh">
      <div className="grid-background absolute inset-0 opacity-30" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl font-pixel text-primary title-shadow">
            ./system_logs
          </h2>
          <p className="mt-4 text-foreground/70 font-mono text-sm">
            // Activities & Leadership
          </p>
        </div>

        {/* Timeline Container */}
        <div className="system-window">
          <div className="window-title-bar">
            <span className="font-pixel text-[8px] text-foreground">activities.log</span>
            <div className="window-buttons">
              <button className="window-btn text-[6px]">_</button>
              <button className="window-btn text-[6px]">□</button>
              <button className="window-btn text-[6px]">×</button>
            </div>
          </div>

          <div className="window-content">
            {/* Terminal Style Log */}
            <div className="space-y-6">
              {activities.map((activity, index) => (
                <div
                  key={index}
                  className="group relative pl-8 border-l-2 border-primary/30 hover:border-primary transition-colors"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-sm bg-primary border-2 border-card flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-primary-foreground rounded-sm" />
                  </div>

                  {/* Log Entry */}
                  <div className="terminal-box p-4 ml-4 group-hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded bg-primary/20 flex items-center justify-center">
                        <i className={`${activity.icon} text-primary text-sm`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <span className="text-primary font-pixel text-[10px]">[{activity.year}]</span>
                          <span className="terminal-text text-sm">Executed:</span>
                        </div>
                        <h3 className="font-mono text-primary-foreground text-base mb-1">
                          {activity.title.replace(/ /g, "_")}.exe
                        </h3>
                        <p className="text-muted-foreground/80 font-mono text-xs">
                          {`> ${activity.description}`}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* System Status */}
              <div className="pl-8 ml-4 pt-4 border-t border-border/50">
                <p className="terminal-text text-xs font-mono">
                  <span className="text-primary">[STATUS]</span> All processes running successfully...
                  <span className="terminal-cursor" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
