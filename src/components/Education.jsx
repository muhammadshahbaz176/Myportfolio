import React from "react";

const Education = () => {
  const educationDetails = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Karachi Instituite of economy and technology (KIET),Karachi",
      grades: "CGPA: 3.2",
      year: "2022 —2026 ",
      desc: "Currently pursuing BSCS. Completed 5 semesters with a strong foundation in software engineering, data structures, web technologies, and database management.",
      icon: "school",
      color: "#f97316",
      current: true,
    },
    {
      degree: "Intermediate",
      institution: "Govt. National College,Karachi",
      grades: "Grade: 70%",
      year: "2021 — 2022",
      desc: "Completed Higher Secondary education with Science (PCM) stream, building strong analytical and mathematical foundations.",
      icon: "book",
      color: "#fb923c",
      current: false,
    },
    {
      degree: "Matriculation",
      institution: "Pacific Grammar School,Karachi",
      grades: "Grade: 72%",
      year: "2004-2019",
      desc: "Completed Higher Secondary education with Science (PCM) stream, building strong analytical and mathematical foundations.",
      icon: "book",
      color: "#9ca3af",
      current: false,
    },
  ];

  return (
    <section id="education" className="py-24 relative overflow-hidden"
      style={{ background: "rgba(10, 22, 40, 0.5)" }}>
      {/* Background accent */}
      <div
        className="absolute top-0 left-0 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, rgba(59, 130, 246, 0.05), transparent)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-subtitle">Academic Journey</p>
          <div className="section-line" />
          <h2 className="section-title">
            My <span>Education</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-px md:left-1/2"
            style={{
              background: "linear-gradient(to bottom, #f97316, rgba(59, 130, 246, 0.3), transparent)",
            }}
          />

          <div className="flex flex-col gap-12">
            {educationDetails.map((edu, i) => (
              <div
                key={i}
                className={`relative flex items-start gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-row`}
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-6 md:left-1/2 flex items-center justify-center w-12 h-12 rounded-full text-white text-xl font-bold z-10"
                  style={{
                    transform: "translateX(calc(-50%))",
                    background: `linear-gradient(135deg, ${edu.color}, ${edu.color}80)`,
                    boxShadow: `0 0 20px ${edu.color}60`,
                    border: `3px solid var(--bg-primary)`,
                    left: "1.5rem",
                  }}
                >
                  <ion-icon name={edu.icon} style={{ fontSize: "1.2rem" }} />
                </div>

                {/* Card - Mobile: always right of dot, Desktop: alternating */}
                <div
                  className={`ml-20 md:ml-0 flex-1 glass-card p-6 ${i % 2 === 0 ? "md:mr-[calc(50%+2rem)]" : "md:ml-[calc(50%+2rem)]"
                    }`}
                  style={{
                    borderLeft: `3px solid ${edu.color}`,
                  }}
                >
                  {/* Current badge */}
                  {edu.current && (
                    <span
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-3"
                      style={{
                        background: "rgba(249, 115, 22, 0.15)",
                        color: "#fb923c",
                        border: "1px solid rgba(249, 115, 22, 0.3)",
                      }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-orange-500"
                        style={{ animation: "pulse 1.5s infinite" }}
                      />
                      Currently Pursuing
                    </span>
                  )}

                  <h3 className="text-white font-bold text-lg mb-1 leading-tight">
                    {edu.degree}
                  </h3>
                  <p className="font-semibold mb-3" style={{ color: edu.color }}>
                    {edu.institution}
                  </p>

                  <div className="flex flex-wrap gap-3 mb-3">
                    <span
                      className="flex items-center gap-1.5 text-xs px-3 py-1 rounded-full"
                      style={{
                        background: "rgba(255,255,255,0.06)",
                        color: "#94a3b8",
                        border: "1px solid rgba(255,255,255,0.1)",
                      }}
                    >
                      <ion-icon name="calendar-outline" style={{ fontSize: "0.85rem" }} />
                      {edu.year}
                    </span>
                    <span
                      className="flex items-center gap-1.5 text-xs px-3 py-1 rounded-full"
                      style={{
                        background: "rgba(255,255,255,0.06)",
                        color: "#94a3b8",
                        border: "1px solid rgba(255,255,255,0.1)",
                      }}
                    >
                      <ion-icon name="trophy-outline" style={{ fontSize: "0.85rem" }} />
                      {edu.grades}
                    </span>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed">{edu.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
