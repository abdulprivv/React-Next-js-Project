"use client";
import React, { useState, useEffect, useRef } from "react";

const stats = [
  {
    value: "40+",
    label: "HOURS SAVED / WEEK",
    numericValue: 40,
    suffix: "+"
  },
  {
    value: "2.5x",
    label: "REVENUE CAPACITY INCREASE",
    numericValue: 2.5,
    suffix: "x"
  },
  {
    value: "35%",
    label: "MARGIN IMPROVEMENT",
    numericValue: 35,
    suffix: "%"
  },
  {
    value: "90%",
    label: "OPERATIONAL INDEPENDENCE",
    numericValue: 90,
    suffix: "%"
  },
];

const AiSystemsStats = () => {
  const [countValues, setCountValues] = useState(stats.map(() => 0));
  const [animationStarted, setAnimationStarted] = useState(false);
  const [animationCompleted, setAnimationCompleted] = useState(false);
  const animationRef = useRef();
  const sectionRef = useRef(null);

  // Scroll observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Jab section viewport mein aaye
          if (entry.isIntersecting && !animationStarted && !animationCompleted) {
            startAnimation();
          }
        });
      },
      {
        threshold: 0.3, // 30% visible hote hi trigger
        rootMargin: "0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [animationStarted, animationCompleted]);

  const startAnimation = () => {
    setAnimationStarted(true);
    const startTime = Date.now();
    const duration = 2500; // 2.5 seconds animation

    const animate = () => {
      const elapsedTime = Date.now() - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      
      // Easing function for smooth animation
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      
      // Calculate all values
      const newValues = stats.map(stat => stat.numericValue * easedProgress);
      setCountValues(newValues);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setAnimationCompleted(true);
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  };

  const formatDisplayValue = (index) => {
    const stat = stats[index];
    
    // Agar animation complete ho gayi hai to final value show karo
    if (animationCompleted) {
      return stat.value;
    }
    
    // Agar animation start hui hai to counting value show karo
    if (animationStarted) {
      const countValue = countValues[index];
      
      if (stat.suffix === "+") {
        return `${Math.round(countValue)}+`;
      } else if (stat.suffix === "x") {
        return `${countValue.toFixed(1)}x`;
      } else {
        return `${Math.round(countValue)}${stat.suffix}`;
      }
    }
    
    // Default - initial value (0)
    if (stat.suffix === "+") {
      return `0+`;
    } else if (stat.suffix === "x") {
      return `0.0x`;
    } else {
      return `0${stat.suffix}`;
    }
  };

  return (
    <section ref={sectionRef} className="ai-section">
      <div className="ai-container">
        <h2 className="ai-headline">
          AI Systems, by rebuilding internal systems
        </h2>

        <div className="ai-grid">
          {stats.map((stat, index) => (
            <div key={index} className="ai-statItem">
              <h3 className="ai-statValue">
                {formatDisplayValue(index)}
              </h3>
              <span className="ai-statLabel">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AiSystemsStats;