import React from "react";
import Image from "next/image";
import Link from "next/link"; 

const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  const bookingLink = "https://calendly.com/your-username/30min"; 
  const isExternal = true; 

  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="cta-content">
          <h2 className="cta-title">
            Ready to transform your agency?
          </h2>
          <p className="cta-description">
            Let's work together to improve your internal systems, make your processes easier, 
            and help your business grow using intelligent AI Systems.
          </p>
          
          
          {isExternal ? (
            <a 
              href={bookingLink}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button"
            >
              Book a free consultation
            </a>
          ) : (
            <Link href="/consultation" className="cta-button">
              Book a free consultation
            </Link>
          )}
        </div>

        <div className="bottom-footer">
          <div className="foot-logo">
            <div className="foot-img">
              <Image 
                src="/logo.png"  
                alt="logo" 
                width={45} 
                height={45}
              />
            </div>
            <h2>
              Invent Tomorrow
            </h2>
          </div>
          <div className="copyright">
            © {currentYear} Invent Tomorrow, Inc. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;