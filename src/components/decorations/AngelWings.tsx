const AngelWings = () => {
  return (
    <>
      {/* Left Wing */}
      <div className="absolute top-0 left-0 w-48 h-64 opacity-10 pointer-events-none overflow-hidden">
        <svg 
          viewBox="0 0 100 150" 
          className="w-full h-full text-primary"
          style={{ transform: "scaleX(-1)" }}
        >
          <path
            d="M90 20 Q70 40 50 80 Q40 100 30 130 Q25 140 20 150 L10 150 Q15 130 20 110 Q30 80 50 50 Q60 30 80 10 Q85 5 90 5 Q95 10 90 20"
            fill="currentColor"
            opacity="0.5"
          />
          <path
            d="M85 25 Q65 45 45 85 Q35 105 25 135 L20 135 Q30 105 50 70 Q60 45 75 20 Q80 12 85 15 Q90 18 85 25"
            fill="currentColor"
            opacity="0.3"
          />
        </svg>
      </div>
      
      {/* Right Wing */}
      <div className="absolute top-0 right-0 w-48 h-64 opacity-10 pointer-events-none overflow-hidden">
        <svg 
          viewBox="0 0 100 150" 
          className="w-full h-full text-primary"
        >
          <path
            d="M10 20 Q30 40 50 80 Q60 100 70 130 Q75 140 80 150 L90 150 Q85 130 80 110 Q70 80 50 50 Q40 30 20 10 Q15 5 10 5 Q5 10 10 20"
            fill="currentColor"
            opacity="0.5"
          />
          <path
            d="M15 25 Q35 45 55 85 Q65 105 75 135 L80 135 Q70 105 50 70 Q40 45 25 20 Q20 12 15 15 Q10 18 15 25"
            fill="currentColor"
            opacity="0.3"
          />
        </svg>
      </div>
    </>
  );
};

export default AngelWings;