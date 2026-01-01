import { useState, useEffect } from "react";
import Sparkles from "../decorations/Sparkles";
import FloatingClouds from "../decorations/FloatingClouds";

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  
  const bootSequence = [
    "> Initializing DreamOS v2.0...",
    "> Loading user profile...",
    "> User Davina detected.",
    "> Welcome to my portfolio.",
  ];

  useEffect(() => {
    let lineIndex = 0;
    let charIndex = 0;
    let currentText = "";

    const typeChar = () => {
      if (lineIndex < bootSequence.length) {
        if (charIndex < bootSequence[lineIndex].length) {
          currentText += bootSequence[lineIndex][charIndex];
          setDisplayText(currentText);
          charIndex++;
          setTimeout(typeChar, 30);
        } else {
          currentText += "\n";
          setDisplayText(currentText);
          lineIndex++;
          charIndex = 0;
          setTimeout(typeChar, 500);
        }
      }
    };

    setTimeout(typeChar, 500);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden gradient-mesh"
    >
      {/* Grid Background */}
      <div className="grid-background absolute inset-0 opacity-50" />
      <div className="perspective-grid" />
      
      {/* Decorations */}
      <FloatingClouds />
      <Sparkles count={12} />

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20 relative z-10">
        {/* Terminal Boot Sequence */}
        <div className="terminal-box mb-8 max-w-2xl mx-auto">
          <pre className="terminal-text text-sm sm:text-base whitespace-pre-wrap text-left">
            {displayText}
            <span className="terminal-cursor" />
          </pre>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-pixel text-primary leading-tight title-shadow neon-glow">
          DreamOS
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-foreground/80 max-w-2xl mx-auto font-mono">
          High School Senior | Designer | Creative Developer
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          <a
            href="#projects"
            className="btn-press inline-flex items-center justify-center px-6 py-3 rounded-lg font-mono text-base bg-primary text-primary-foreground"
          >
            <i className="fas fa-folder mr-2" /> ./view_projects
          </a>
          <a
            href="#about"
            className="btn-press inline-flex items-center justify-center px-6 py-3 rounded-lg font-mono text-base bg-card text-primary border-2 border-border"
          >
            <i className="fas fa-user mr-2" /> ./about_me
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
