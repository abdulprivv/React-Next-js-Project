"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "./assets/a.png";

export default function Navbar() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  const bookingLink = "https://calendly.com/your-username/30min";
  const isExternal = true;

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>

      <div className="nav-left">
        <Image src={logo} alt="Invent Tomorrow Logo" width={40} height={40}/>
        <span className="logo">Invent Tomorrow</span>
      </div>

      {isExternal ? (
        <a
          href={bookingLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-consult"
        >
          Book a consultation
        </a>
      ) : (
        <Link href="/consultation" className="btn-consult">
          Book a consultation
        </Link>
      )}

    </nav>
  );
}