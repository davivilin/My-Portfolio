const ResumeSection = () => {
  return (
    <section id="resume" className="py-24 relative gradient-mesh">
      <div className="grid-background absolute inset-0 opacity-30" />
      
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-pixel text-primary title-shadow">
            ./file_manager
          </h2>
          <p className="mt-4 text-foreground/70 font-mono text-sm">
            // Download Resume
          </p>
        </div>

        {/* File Download Window */}
        <div className="system-window max-w-md mx-auto">
          <div className="window-title-bar">
            <span className="font-pixel text-[8px] text-foreground">resume_viewer.exe</span>
            <div className="window-buttons">
              <button className="window-btn text-[6px]">_</button>
              <button className="window-btn text-[6px]">□</button>
              <button className="window-btn text-[6px]">×</button>
            </div>
          </div>

          <div className="window-content text-center py-10">
            {/* Floppy Disk Icon */}
            <div className="relative inline-block mb-8">
              <div className="animate-float">
                <div className="w-24 h-24 mx-auto relative">
                  {/* Floppy disk body */}
                  <div className="absolute inset-0 bg-primary rounded-lg border-4 border-primary-foreground/20 shadow-lg">
                    {/* Metal slider */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-14 h-6 bg-card/90 rounded-b-sm border-b-2 border-x-2 border-border" />
                    {/* Label area */}
                    <div className="absolute bottom-2 left-2 right-2 h-8 bg-card/80 rounded border border-border">
                      <div className="h-1 bg-border/50 mx-2 mt-1.5" />
                      <div className="h-1 bg-border/50 mx-2 mt-1 w-2/3" />
                    </div>
                  </div>
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-lg animate-pulse-glow" />
                </div>
              </div>
              
              {/* File info */}
              <div className="mt-4 font-mono text-sm text-foreground/70">
                <p className="text-primary font-pixel text-[10px] mb-1">DAVINA_CV.PDF</p>
                <p className="text-xs">Size: 256 KB</p>
              </div>
            </div>

            {/* Download Button */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                // TODO: Replace with actual resume file path
                alert("Resume download coming soon!");
              }}
              className="btn-press inline-flex items-center justify-center gap-3 px-8 py-4 rounded-lg font-mono text-base bg-primary text-primary-foreground group relative overflow-hidden"
            >
              {/* Glitch overlay */}
              <div className="absolute inset-0 bg-primary-foreground/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <i className="fas fa-download text-lg group-hover:animate-bounce" />
              <span className="font-pixel text-xs sm:text-sm">DOWNLOAD_CV.PDF</span>
            </a>

            {/* System message */}
            <p className="mt-6 font-mono text-xs text-muted-foreground">
              <i className="fas fa-info-circle mr-2 text-primary" />
              Click to download resume file
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
