"use client";

import React from "react";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-grid-bg">
        <img src="/hero1.png" alt="Math Grid" />
      </div>

      <div className="hero-shaded-overlay">
        <img src="/shaded.png" alt="Shaded Effect" />
      </div>
      
      <div className="hero-content">
        <div className="ai-cons" >
          <span className="green-circle" > </span>
          <span className="sub-text">AI Systems & Consulting for 6–7 Figure Agencies</span>
        </div>
        <h1>
          Your team is working hard but <br />
          <span className="highlight-1">Revenue</span> 
          <span className="highlight-3"> isn't{" "} </span>
          <span className="highlight-2">increasing</span>
        </h1>
        <p>
          We design and build AI systems to optimize your internal systems
          <br />
          which will scale your revenue and agency
        </p>
        <a 
          href="https://calendly.com/your-link"  
          target="_blank"                         
          rel="noopener noreferrer"                
          className="btn-hero"
        >
          Book a free consultation
        </a>
      </div>
    </section>
  );
}