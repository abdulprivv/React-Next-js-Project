"use client";
import { Search, Cpu, Rocket } from "lucide-react";

export default function HowWeFixIt() {
  return (
    <section className="how-section">
      <div className="how-container">
        <h2 className="how-title">How We Fix It</h2>
        <p className="how-subtitle">
          We map, design, and build workflows that keep your agency running smoothly,
          efficiently, and without constant founder involvement.
        </p>

        <div className="how-card">
          <div className="how-iconBox">
            <Search size={26} />
          </div>
          <div className="how-content">
            <h3>Process Audit</h3>
            <p>
              We map how work actually flows through your agency, then show you where it’s breaking.
            </p>
            <div className="how-points">
              <span> Document your real workflows</span>
              <span> Spot bottlenecks and waste</span>
              <span> Build your optimization roadmap</span>
            </div>
          </div>
        </div>

        <div className="how-card">
          <div className="how-iconBox">
            <Cpu size={26} />
          </div>
          <div className="how-content">
            <h3>System Design</h3>
            <p>
              We design operations that run without you having to hold them together.
            </p>
            <div className="how-points">
              <span> Build scalable workflows</span>
              <span> Plan team capacity properly</span>
              <span> Make changes stick</span>
            </div>
          </div>
        </div>

        <div className="how-card">
          <div className="how-iconBox">
            <Rocket size={26} />
          </div>
          <div className="how-content">
            <h3>Full Implementation</h3>
            <p>
              We build and integrate the systems that turn chaos into predictable delivery.
            </p>
            <div className="how-points">
              <span> Connect your tools properly</span>
              <span> Automate repeatable work</span>
              <span> Track what actually matters</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}