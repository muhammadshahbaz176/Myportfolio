import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import E_locker from "../assets/images/E_locker.png";
import smart_order from "../assets/images/smart_order.png";
import stampapp from "../assets/images/stampapp.png";
import BioScope_1 from "../assets/images/Bioscope_1.png";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const Project = () => {
  const projects = [
    {
      img: BioScope_1,
      name: "BioScope",
      desc: "A 3D-based educational mobile application designed to help students explore and understand human body systems using interactive models, animations, and quiz-based learning.",
      tech: ["React Native", "Unity 3D", "Firebase", "REST APIs"],
      github_link: null,
      live_link: null,
    },
    {
      img: E_locker,
      name: "E-Locker App",
      desc: "A secure digital document storage application that allows users to upload, manage, and share files with role-based access control and JWT-based authentication.",
      tech: ["React Native", "Node.js", "Express.js", "MongoDB", "JWT", "Cloud Storage"],
      github_link: null,
      live_link: null,
    },
    {
      img: smart_order,
      name: "Smart Order App",
      desc: "A smart order management system that provides real-time order tracking, inventory monitoring, and status updates to streamline business operations.",
      tech: ["React", "Node.js", "Express.js", "MongoDB", "Socket.IO"],
      github_link: null,
      live_link: null,
    },
    {
      img: stampapp,
      name: "StampMap App",
      desc: "A location-based mobile application that allows users to create, view, and explore digital stamps on an interactive map. The app features OTP-based authentication, real-time stamp creation, and navigation directions from the user’s current location.",
tech: ["React Native", "Express.js", "Node.js", "RESTful API", "MongoDB", "Maps API", "OTP Authentication"],
      github_link: null,
      live_link: null,
    },


  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, rgba(59, 130, 246, 0.05), transparent)",
          filter: "blur(80px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-subtitle">What I've built</p>
          <div className="section-line" />
          <h2 className="section-title">
            My <span>Projects</span>
          </h2>
        </div>

        <Swiper
          slidesPerView={1}
          spaceBetween={24}
          breakpoints={{
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2.5 },
          }}
          loop={true}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          style={{ paddingBottom: "50px" }}
        >
          {projects.map((project, i) => (
            <SwiperSlide key={i}>
              <div className="project-card group">
                {/* Image */}
                <div className="relative overflow-hidden" style={{ height: "220px" }}>
                  <img
                    src={project.img}
                    alt={project.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  {/* Overlay */}
                  <div className="project-overlay">
                    <div className="flex gap-3">
                      <a
                        href={project.github_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-white text-sm font-medium px-4 py-2 rounded-lg transition-all"
                        style={{ background: "rgba(31, 41, 55, 0.8)", backdropFilter: "blur(10px)" }}
                        onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(249, 115, 22, 0.5)")}
                        onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(31, 41, 55, 0.8)")}
                      >
                        <ion-icon name="logo-github" style={{ fontSize: "1rem" }} />
                        Code
                      </a>
                      {project.live_link && (
                        <a
                          href={project.live_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-white text-sm font-medium px-4 py-2 rounded-lg transition-all"
                          style={{ background: "rgba(249, 115, 22, 0.8)", backdropFilter: "blur(10px)" }}
                          onMouseEnter={(e) => (e.currentTarget.style.background = "#ea580c")}
                          onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(249, 115, 22, 0.8)")}
                        >
                          <ion-icon name="open-outline" style={{ fontSize: "1rem" }} />
                          Live
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Number badge */}
                  <div
                    className="absolute top-3 left-3 w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold"
                    style={{
                      background: "#f97316",
                      color: "white",
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    0{i + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-white font-bold text-lg mb-2">{project.name}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.desc}</p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t, ti) => (
                      <span
                        key={ti}
                        className="px-2.5 py-1 rounded-md text-xs font-medium"
                        style={{
                          background: "rgba(249, 115, 22, 0.1)",
                          color: "#fb923c",
                          border: "1px solid rgba(249, 115, 22, 0.2)",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-3" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                    <a
                      href={project.github_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-gray-400 hover:text-orange-500 transition-colors text-sm"
                    >
                      <ion-icon name="logo-github" />
                      GitHub
                    </a>
                    {project.live_link && (
                      <a
                        href={project.live_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-gray-400 hover:text-orange-500 transition-colors text-sm"
                      >
                        <ion-icon name="open-outline" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Project;
