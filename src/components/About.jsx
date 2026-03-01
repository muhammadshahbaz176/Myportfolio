import React from "react";
import my2 from "../assets/images/myimage.jpg";
import cvFile from "../assets/images/Shahbaz Cv .pdf";

const About = () => {
  const stats = [
    { count: "05", label: "Projects Done", icon: "code-slash" },
    { count: "01", label: "Company Worked", icon: "business" },
    { count: "1", label: "Years Coding", icon: "time" },
  ];

  const highlights = [
    { icon: "checkmark-circle", text: "React Native Developer" },
    { icon: "checkmark-circle", text: "Frontend Specialist" },
    { icon: "checkmark-circle", text: "Node.js & Firebase,Nest.js" },
    { icon: "checkmark-circle", text: "TypeScript Proficient" },
  ];



  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "linear-gradient(to right, rgba(59, 130, 246, 0.08), transparent)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="section-subtitle">Get to know me</p>
          <div className="section-line" />
          <h2 className="section-title">
            About <span>Me</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <div className="flex justify-center">
            <div className="relative aboutImg">
              <div
                className="overflow-hidden rounded-2xl"
                style={{
                  width: "340px",
                  maxWidth: "100%",
                  boxShadow:
                    "0 30px 80px rgba(0,0,0,0.5), 0 0 40px rgba(249, 115, 22, 0.1)",
                }}
              >
                <img
                  src={my2}
                  alt="Muhammad Shahbaz"
                  className="w-full h-auto object-cover"
                  style={{ display: "block" }}
                />
              </div>

              {/* Stats floating card */}
              <div
                className="absolute glass-card p-4 text-center"
                style={{
                  bottom: "30px",
                  right: "-30px",
                  minWidth: "130px",
                }}
              >
                <div className="text-3xl font-bold gradient-text">5+</div>
                <div className="text-gray-400 text-xs mt-1">Projects</div>
              </div>

              {/* Tech badge */}
              <div
                className="absolute glass-card px-3 py-2 flex items-center gap-2"
                style={{ top: "20px", left: "-20px" }}
              >
                <ion-icon
                  name="logo-react"
                  style={{ color: "#ffffff", fontSize: "1.2rem" }}
                />
                <ion-icon
                  name="logo-angular"
                  style={{ color: "#9ca3af", fontSize: "1.2rem" }}
                />
                <ion-icon
                  name="logo-javascript"
                  style={{ color: "#ffffff", opacity: 0.8, fontSize: "1.2rem" }}
                />
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <h3
              className="font-bold mb-4"
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                color: "var(--text-primary)",
              }}
            >
              Building <span className="text-orange-500">Exceptional Digital</span> Experiences
            </h3>

            <p className="text-gray-400 leading-relaxed mb-4">
              I am a passionate software developer focused on building exceptional digital experiences.{" "}
              <span className="text-orange-500 font-medium">
                My expertise lies in developing clean, maintainable, and high-performance web and mobile applications.
              </span>{" "}
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              I enjoy solving real-world problems through code and continuously learning modern technologies to deliver scalable and user-friendly solutions.{" "}
              <span className="text-orange-500 font-medium">
                Mobile App Developer
              </span>
              , with hands-on experience in building scalable and high-performance applications using React Native. I work extensively with Firebase, MongoDB, and PostgreSQL for robust backend and data management, while using GitHub for efficient version control and collaboration. I focus on writing clean, maintainable code and delivering smooth, user-friendly mobile experiences across platforms.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {highlights.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <ion-icon
                    name={item.icon}
                    style={{ color: "#f97316", fontSize: "1rem", flexShrink: 0 }}
                  />
                  <span className="text-gray-300 text-sm">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="flex gap-6 mb-8">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="text-center px-4 py-3 rounded-xl"
                  style={{
                    background: "rgba(249, 115, 22, 0.05)",
                    border: "1px solid rgba(249, 115, 22, 0.15)",
                  }}
                >
                  <div className="text-2xl font-bold gradient-text">
                    {stat.count}
                  </div>
                  <div className="text-gray-500 text-xs mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex gap-4 flex-wrap">
              <button
                onClick={() => {
                  const a = document.createElement('a');
                  a.href = cvFile;
                  a.download = 'Muhammad_Shahbaz_CV.pdf';
                  a.click();
                }}
                className="btn-primary"
              >
                <ion-icon name="document-text-outline" />
                Download CV
              </button>
              <a href="#contact" className="btn-outline">
                <ion-icon name="chatbubble-outline" />
                Let's Talk
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
