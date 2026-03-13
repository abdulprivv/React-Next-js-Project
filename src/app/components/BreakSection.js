"use client";

import { FaBullhorn, FaChartLine, FaCogs } from "react-icons/fa";
import { useRef } from "react";

export default function BreakSection() {
  const mainbreak1Ref = useRef(null);
  const mainbreak2Ref = useRef(null);
  const mainbreak3Ref = useRef(null);

  const handleMouseMove = (e, ref) => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;

      ref.current.style.setProperty('--mouse-x', `${x}%`);
      ref.current.style.setProperty('--mouse-y', `${y}%`);
    }
  };

  const handleMouseLeave = (ref) => {
    if (ref.current) {
      ref.current.style.setProperty('--mouse-x', `50%`);
      ref.current.style.setProperty('--mouse-y', `50%`);
    }
  };

  return (
    <section className="break-section">
      <div className="break-container">
        <h2>Where Agencies Break</h2>
        <p className="break-subtext">
          Your client work scales, but your internal systems don’t, and that’s
          where growth falls apart.
        </p>
        
        <div className="break-cards">
          {/* Card 1 - Outer div par properties, inner div waisa hi */}
          <div
            ref={mainbreak1Ref}
            className="mainbreak-card"
            onMouseMove={(e) => handleMouseMove(e, mainbreak1Ref)}
            onMouseLeave={() => handleMouseLeave(mainbreak1Ref)}
          >
            <div className="break-card">
              <div className="card-icon">
                <FaBullhorn />
              </div>
              <h3>Marketing Pipeline</h3>
              <p className="card-desc">
                Demand grows, but lead quality collapses.
              </p>
              <ul>
                <li>Too many bad leads</li>
                <li>No filtering before calls</li>
                <li>Messaging too broad</li>
              </ul>
            </div>
          </div>

          {/* Card 2 */}
          <div
            ref={mainbreak2Ref}
            className="mainbreak-card"
            onMouseMove={(e) => handleMouseMove(e, mainbreak2Ref)}
            onMouseLeave={() => handleMouseLeave(mainbreak2Ref)}
          >
            <div className="break-card">
              <div className="card-icon">
                <FaChartLine />
              </div>
              <h3>Sales Pipeline</h3>
              <p className="card-desc">
                Demand grows, but lead quality collapses.
              </p>
              <ul>
                <li>Founder stuck in delivery</li>
                <li>Inconsistent client onboarding</li>
                <li>Growth tied to hiring</li>
              </ul>
            </div>
          </div>

          {/* Card 3 */}
          <div
            ref={mainbreak3Ref}
            className="mainbreak-card"
            onMouseMove={(e) => handleMouseMove(e, mainbreak3Ref)}
            onMouseLeave={() => handleMouseLeave(mainbreak3Ref)}
          >
            <div className="break-card">
              <div className="card-icon">
                <FaCogs />
              </div>
              <h3>Ops Pipeline</h3>
              <p className="card-desc">
                The business runs on people, not systems.
              </p>
              <ul>
                <li>Founder-dependent processes</li>
                <li>No single system of record</li>
                <li>A lot of scattered tools</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}