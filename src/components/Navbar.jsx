import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const menuLinks = [
    { name: "Home", link: "#home", id: "home" },
    { name: "About", link: "#about", id: "about" },
    { name: "Skills", link: "#skills", id: "skills" },
    { name: "Projects", link: "#projects", id: "projects" },
    { name: "Education", link: "#education", id: "education" },
    { name: "Contact", link: "#contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);

      // Active section detection
      const sections = menuLinks.map((m) => document.getElementById(m.id));
      const scrollPos = window.scrollY + 120;
      sections.forEach((section) => {
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;
          if (scrollPos >= top && scrollPos < bottom) {
            setActiveSection(section.id);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full left-0 top-0 z-[999] transition-all duration-500 ${sticky
        ? "backdrop-blur-xl bg-[rgba(3,7,18,0.85)] border-b border-white/5 py-3"
        : "bg-transparent py-5"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="group flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center font-bold text-white text-lg shadow-lg shadow-orange-500/20 group-hover:scale-110 transition-transform duration-300">
            S
          </div>
          <span className="text-xl font-bold text-white">
            Shah<span className="text-orange-500">baz</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-1">
          {menuLinks.map((menu, i) => (
            <li key={i}>
              <a
                href={menu.link}
                className={`nav-link px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${activeSection === menu.id
                  ? "text-orange-500 bg-orange-500/10"
                  : "text-gray-400 hover:text-white"
                  }`}
              >
                {menu.name}
              </a>
            </li>
          ))}
          <li className="ml-4">
            <a
              href="#contact"
              className="btn-primary text-sm px-5 py-2.5"
              style={{ borderRadius: "8px", padding: "10px 22px" }}
            >
              Hire Me
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-white/5 transition-colors"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""
              }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? "opacity-0" : ""
              }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""
              }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full backdrop-blur-xl border-b border-white/5 transition-all duration-300 overflow-hidden ${open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        style={{ background: "rgba(3,7,18,0.98)" }}
      >
        <ul className="flex flex-col gap-1 px-6 py-4">
          {menuLinks.map((menu, i) => (
            <li key={i}>
              <a
                href={menu.link}
                onClick={() => setOpen(false)}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${activeSection === menu.id
                  ? "text-orange-500 bg-orange-500/10"
                  : "text-gray-400 hover:text-white"
                  }`}
              >
                {menu.name}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-primary text-sm w-full justify-center"
              style={{ borderRadius: "8px", padding: "12px" }}
            >
              Hire Me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
