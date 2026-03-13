import React from "react";
import Image from "next/image";

const AiStackSection = () => {

  const technologies = [
    { name: "n8n", img: "/n8n.png" },
    { name: "zapier", img: "/zapier.png" },
    { name: "make", img: "/make.png" },
    { name: "LangChain", img: "/langchain.png" },
    { name: "clay", img: "/clay.png" },
    { name: "OpenAI", img: "/openai.png" },
    { name: "ANTHROPIC", img: "/anthropic.png" },
    { name: "Airtable", img: "/airtable.png" },
    { name: "botpress", img: "/botpress.png" }
  ];

  const sliderItems = [...technologies, ...technologies, ...technologies];

  return (
    <section className="ai-stack-section">
      <div className="ai-stack-container">
        
        <div className="ai-stack-header">
          <h2 className="ai-stack-title">
            Built on the world's most powerful AI stack
          </h2>
          <p className="ai-stack-description">
            We don't just use tools; we engineer systems. We integrate the leading AI and automation platforms to create a seamless operational engine for your agency.
          </p>
        </div>

        
        <div className="slider-container">
          <div className="slider-track">
            {sliderItems.map((tech, index) => (
              <div key={index} className="slider-item">
                <Image 
                  src={tech.img} 
                  alt={`${tech.name} logo`}
                  width={120}  
                  height={40}  
                  className="tech-logo"
                  priority={index < 9} 
                  style={{
                    width: 'auto',
                    height: '60px'
                  }}
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AiStackSection;