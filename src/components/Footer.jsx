import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navLinks = ["Home", "About", "Skills", "Projects", "Education", "Contact"];

  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background: "rgba(3,7,18,0.98)",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-9 h-9 rounded-xl bg-orange-500 flex items-center justify-center font-bold text-white shadow-lg shadow-orange-500/20">
                S
              </div>
              <span className="text-xl font-bold text-white">
                Shah<span className="text-orange-500">baz</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Building exceptional digital experiences with passion for clean
              code and beautiful design.
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center">
            {navLinks.map((link, i) => (
              <a
                key={i}
                href={`#${link.toLowerCase()}`}
                className="text-gray-500 hover:text-cyan-400 transition-colors text-sm"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Social */}
          <div className="flex gap-3 md:justify-end">
            {[
              { icon: "logo-github", href: "https://github.com/muhammadshahbaz176" },
              { icon: "logo-linkedin", href: "https://www.linkedin.com/in/muhammad-shahbaz-5a9b3b2b1/" },
              { icon: "logo-instagram", href: "https://www.instagram.com/muhammadshahbaz176/" },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-lg text-gray-500 hover:text-cyan-400 transition-all duration-300 text-base"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(249, 115, 22, 0.5)";
                  e.currentTarget.style.background = "rgba(249, 115, 22, 0.1)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                  e.currentTarget.style.transform = "";
                }}
              >
                <ion-icon name={social.icon} />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div
          className="mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p className="text-gray-600 text-sm">
            © {currentYear} <span className="text-gray-500">Muhammad Shahbaz</span>. All rights reserved.
          </p>
          <p className="text-gray-600 text-sm">
            Made with{" "}
            <span className="text-red-400">♥</span>{" "}
            using <span className="text-orange-500">React</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
