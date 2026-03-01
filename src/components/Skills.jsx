import React, { useEffect, useRef } from "react";

const Skills = () => {
  const skills = [
    { name: "HTML5", logo: "logo-html5", level: "Intermediate", count: 80, color: "#E34F26" },
    { name: "CSS3", logo: "logo-css3", level: "Intermediate", count: 75, color: "#1572B6" },
    { name: "JavaScript", logo: "logo-javascript", level: "Intermediate", count: 85, color: "#F7DF1E" },
    { name: "React Native", logo: "logo-react", level: "Intermediate", count: 70, color: "#61DAFB" },
    { name: "Node.js", logo: "logo-nodejs", level: "Beginner", count: 60, color: "#339933" },
    { name: "Nest JS", logo: "rocket-outline", level: "Beginner", count: 50, color: "#E0234E" },
    { name: "MongoDB", logo: "leaf-outline", level: "Beginner", count: 55, color: "#47A248" },
    { name: "PostgreSQL", logo: "server-outline", level: "Beginner", count: 50, color: "#336791" },
    { name: "SQL Server", logo: "database-outline", level: "Beginner", count: 60, color: "#CC2927" },
    { name: "TypeScript", logo: "logo-ionic", level: "Beginner", count: 55, color: "#3178C6" },
    { name: "ASP.NET Core", logo: "code-working-outline", level: "Beginner", count: 50, color: "#512BD4" },
  ];

  const tools = [
    { name: "Git", logo: "logo-github", color: "#F05032" },
    { name: "GitHub", logo: "logo-github", color: "#FFFFFF" },
    { name: "Visual Studio", logo: "code-working-outline", color: "#5C2D91" },
    { name: "VS Code", logo: "logo-vimeo", color: "#007ACC" }, // logo-vimeo used as placeholder for VSCode like icon
    { name: "Tailwind", logo: "color-palette-outline", color: "#06B6D4" },
    { name: "Figma", logo: "logo-figma", color: "#F24E1E" },
  ];

  const sectionRef = useRef(null);
  const barsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            barsRef.current.forEach((bar, i) => {
              if (bar) {
                setTimeout(() => {
                  bar.style.width = (skills[i]?.count || 0) + "%";
                }, i * 120);
              }
            });
          }
        });
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [skills]);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
      style={{ background: "var(--bg-primary)" }}
    >
      {/* Background accent */}
      <div
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "linear-gradient(to right, rgba(59, 130, 246, 0.08), transparent)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-subtitle">What I know</p>
          <div className="section-line" />
          <h2 className="section-title">
            My <span>Skills</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Skill Cards */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
              <span
                className="w-1 h-5 rounded-full"
                style={{ background: "var(--orange)" }}
              />
              Technical Skills
            </h3>
            <div className="flex flex-col gap-5">
              {skills.map((skill, i) => (
                <div key={i} className="group">
                  <div className="flex items-center gap-4 mb-3">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
                      style={{
                        background: `${skill.color}15`,
                        color: skill.color,
                        border: `1px solid ${skill.color}30`
                      }}
                    >
                      <ion-icon name={skill.logo} />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col mb-2">
                        <span className="text-gray-100 font-semibold text-sm leading-none mb-1.5">{skill.name}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-orange-500 font-bold text-[10px] tracking-widest uppercase opacity-80">
                            {skill.count}%
                          </span>
                          <span className="text-gray-500 text-[10px] uppercase tracking-tighter">Proficiency</span>
                        </div>
                      </div>
                      <div className="skill-bar h-1.5">
                        <div
                          ref={(el) => (barsRef.current[i] = el)}
                          className="skill-bar-fill"
                          style={{ width: "0%" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Skill Icon Cards + Tools */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
              <span
                className="w-1 h-5 rounded-full"
                style={{ background: "var(--orange)" }}
              />
              Technologies
            </h3>
            <div className="grid grid-cols-4 gap-4 mb-8">
              {skills.map((skill, i) => (
                <div
                  key={i}
                  className="glass-card p-4 flex flex-col items-center gap-3 group cursor-default relative overflow-hidden"
                >
                  <div
                    className="text-3xl transition-all duration-500 group-hover:scale-125 group-hover:rotate-12"
                    style={{ color: skill.color }}
                  >
                    <ion-icon name={skill.logo} />
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-gray-100 text-[11px] font-bold text-center leading-tight">
                      {skill.name}
                    </span>
                    <span className="text-orange-500 text-[10px] font-bold mt-1 tracking-tighter opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      {skill.count}%
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Tools */}
            <h3 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
              <span
                className="w-1 h-5 rounded-full"
                style={{ background: "var(--orange)" }}
              />
              Tools & More
            </h3>
            <div className="grid grid-cols-4 gap-4">
              {tools.map((tool, i) => (
                <div
                  key={i}
                  className="glass-card p-4 flex flex-col items-center gap-2 group cursor-default"
                >
                  <div
                    className="text-3xl transition-all duration-300 group-hover:scale-125"
                    style={{ color: tool.color }}
                  >
                    <ion-icon name={tool.logo} />
                  </div>
                  <span className="text-gray-400 text-xs font-medium text-center leading-tight">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;