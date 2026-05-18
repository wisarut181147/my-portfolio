import { useState } from "react";
import "./Navbar.css";
import { useEffect } from "react";

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  useEffect(() => {
    const sections = document.querySelectorAll('div[id]')

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
  }, {threshold: 0.5})

  sections.forEach(section => observer.observe(section))

  return () => observer.disconnect()
},[])
  return (
    <nav
      style={{
        position: "sticky",
        top: "0",
        display: "flex",
        justifyContent: "space-between",
        padding: "20px 42px",
        alignItems: "center",
      }}
    >
      <div style={{ fontSize: "30px", color: "white" }}>JS.</div>
      <ul style={{ display: "flex", gap: "25px", listStyle: "none" }}>
        <a
          href="#home"
          onClick={() => setActiveSection("home")}
          className={`nav-link ${activeSection === "home" ? "active" : ""}`}
        >
          Home
        </a>
        <a
          href="#about-me"
          onClick={() => setActiveSection("about-me")}
          className={`nav-link ${activeSection === "about-me" ? "active" : ""}`}
        >
          About me
        </a>
        <a
          href="#work"
          onClick={() => setActiveSection("work")}
          className={`nav-link ${activeSection === "work" ? "active" : ""}`}
        >
          Work
        </a>
        <a
          href="#certificate"
          onClick={() => setActiveSection("certificate")}
          className={`nav-link ${activeSection === "certificate" ? "active" : ""}`}
        >
          Certificate
        </a>
        <a
          href="#contact"
          onClick={() => setActiveSection("contact")}
          className={`nav-link ${activeSection === "contact" ? "active" : ""}`}
        >
          Contact
        </a>
      </ul>
    </nav>
  );
}

export default Navbar;
