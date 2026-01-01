import PixelCloud from "./PixelCloud";

const FloatingClouds = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <PixelCloud 
        size="lg" 
        className="absolute top-[10%] left-[5%] opacity-60 animate-float-slow" 
      />
      <PixelCloud 
        size="md" 
        className="absolute top-[20%] right-[10%] opacity-50 animate-float" 
        style={{ animationDelay: "2s" }}
      />
      <PixelCloud 
        size="sm" 
        className="absolute top-[40%] left-[15%] opacity-40 animate-float-slow" 
        style={{ animationDelay: "4s" }}
      />
      <PixelCloud 
        size="lg" 
        className="absolute bottom-[20%] right-[8%] opacity-50 animate-float" 
        style={{ animationDelay: "1s" }}
      />
      <PixelCloud 
        size="md" 
        className="absolute bottom-[35%] left-[20%] opacity-40 animate-float-slow" 
        style={{ animationDelay: "3s" }}
      />
    </div>
  );
};

export default FloatingClouds;