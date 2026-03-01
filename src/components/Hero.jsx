import React, { useEffect, useRef } from "react";
import my2 from "../assets/images/myimage.jpg";
import Type from "./Type";

const socialLinks = [
  {
    icon: "logo-github",
    href: "https://github.com/muhammadshahbaz176",
    label: "GitHub",
    color: "#fff",
  },
  {
    icon: "logo-linkedin",
    href: "https://www.linkedin.com/in/muhammad-shahbaz-004a3924b/",
    label: "LinkedIn",
    color: "#0A66C2",
  },
  {
    icon: "logo-instagram",
    href: "https://www.instagram.com/muhammad_shahbaz176/",
    label: "Instagram",
    color: "#E1306C",
  },

];

const Hero = () => {
  const canvasRef = useRef(null);

  // Particle animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const count = 60;

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        r: Math.random() * 2 + 0.5,
        alpha: Math.random() * 0.5 + 0.1,
      });
    }

    let animId;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(249, 115, 22, ${p.alpha})`;
        ctx.fill();
      });

      // Draw connections
      particles.forEach((p, i) => {
        particles.slice(i + 1).forEach((q) => {
          const dist = Math.hypot(p.x - q.x, p.y - q.y);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(249, 115, 22, ${0.15 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });
      animId = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ paddingTop: "80px" }}
    >
      {/* Canvas Particles */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 0 }}
      />

      {/* Glowing blobs */}
      <div
        className="absolute top-20 left-10 w-72 h-72 rounded-full animate-pulse-slow"
        style={{
          background: "linear-gradient(to right, rgba(59, 130, 246, 0.1), transparent)",
          filter: "blur(40px)",
          zIndex: 0,
        }}
      />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 rounded-full animate-pulse-slow delay-500"
        style={{
          background: "linear-gradient(to left, rgba(59, 130, 246, 0.1), transparent)",
          filter: "blur(60px)",
          zIndex: 0,
        }}
      />

      <div
        className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center"
        style={{ position: "relative", zIndex: 1 }}
      >
        {/* Left Content */}
        <div className="animate-fadeInLeft order-2 md:order-1">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-sm"
            style={{
              background: "rgba(249, 115, 22, 0.1)",
              border: "1px solid rgba(249, 115, 22, 0.3)",
              color: "#fb923c",
            }}
          >
            <span
              className="w-2 h-2 rounded-full bg-orange-500"
              style={{ animation: "pulse 1.5s infinite" }}
            />
            Available for Work
          </div>

          {/* Greeting */}
          <p className="text-gray-400 text-lg mb-3 font-medium tracking-wide">
            Hello, I'm
          </p>

          {/* Name */}
          <h1
            className="font-extrabold leading-tight mb-4"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", lineHeight: 1.1 }}
          >
            <span className="text-orange-500">MUHAMMAD</span>
            <br />
            <span className="text-white">SHAHBAZ</span>
          </h1>

          {/* Typewriter */}
          <div
            className="text-xl md:text-2xl font-semibold mb-6"
            style={{ color: "#94a3b8" }}
          >
            <span className="text-cyan-400">{"< "}</span>
            <Type />
            <span className="text-cyan-400">{" />"}</span>
          </div>

          {/* Description */}
          <p
            className="text-gray-400 text-base leading-relaxed mb-8 max-w-lg"
          >
            I build modern{" "}
            <span className="text-cyan-400 font-medium">
              scalable, and user-focused digital experiences
            </span>{" "}
            With a strong passion for clean code, performance optimization, and intuitive design,
            I specialize in crafting web and mobile applications that are fast, reliable, and visually engaging.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-8">
            <a href="#contact" className="btn-primary">
              <ion-icon name="send-outline" />
              Let's Talk
            </a>
            <a href="#projects" className="btn-outline">
              <ion-icon name="code-slash-outline" />
              View Work
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <span className="text-gray-500 text-sm">Follow me:</span>
            <div className="flex gap-3">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.label}
                  className="w-10 h-10 flex items-center justify-center rounded-xl text-gray-400 transition-all duration-300"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    fontSize: "1.2rem",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = social.color;
                    e.currentTarget.style.borderColor = social.color;
                    e.currentTarget.style.background = `${social.color}15`;
                    e.currentTarget.style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "";
                    e.currentTarget.style.borderColor =
                      "rgba(255,255,255,0.1)";
                    e.currentTarget.style.background =
                      "rgba(255,255,255,0.06)";
                    e.currentTarget.style.transform = "";
                  }}
                >
                  <ion-icon name={social.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right - Image */}
        <div
          className="flex justify-center items-center order-1 md:order-2 animate-fadeInRight"
        >
          <div className="relative animate-float">
            {/* Outer rotating ring */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                margin: "-16px",
                border: "2px dashed rgba(249, 115, 22, 0.2)",
                animation: "spin-slow 20s linear infinite",
                borderRadius: "50%",
              }}
            />
            {/* Gradient ring */}
            <div
              className="absolute inset-0"
              style={{
                margin: "-8px",
                borderRadius: "50%",
                padding: "3px",
                background: "linear-gradient(135deg, #f97316, #3b82f6, #f97316)",
                animation: "spin-slow 6s linear infinite reverse",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  background: "var(--bg-primary)",
                }}
              />
            </div>

            {/* Image */}
            <div
              className="relative overflow-hidden"
              style={{
                width: "280px",
                height: "280px",
                borderRadius: "50%",
                border: "4px solid rgba(249, 115, 22, 0.3)",
                boxShadow: "0 0 60px rgba(249, 115, 22, 0.3)",
              }}
            >
              <img
                src={my2}
                alt="Muhammad Shahbaz"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>

            {/* Floating badge - Experience */}
            <div
              className="absolute glass-card px-4 py-2 flex items-center gap-2"
              style={{
                bottom: "-10px",
                right: "-20px",
                minWidth: "140px",
                animation: "float 4s ease-in-out infinite 1s",
              }}
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-cyan-400"
                style={{ background: "rgba(249, 115, 22, 0.15)", fontSize: "1rem" }}
              >
                <ion-icon name="star" />
              </div>
              <div>
                <div className="text-white font-bold text-sm">5+</div>
                <div className="text-gray-400 text-xs">Projects Done</div>
              </div>
            </div>

            {/* Floating badge - React */}
            <div
              className="absolute glass-card px-3 py-2 flex items-center gap-2"
              style={{
                top: "-10px",
                left: "-20px",
                animation: "float 4s ease-in-out infinite 0.5s",
              }}
            >
              <ion-icon
                name="logo-react"
                style={{ color: "#f97316", fontSize: "1.4rem" }}
              />
              <span className="text-white text-xs font-semibold">Mobile App Developer</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 flex flex-col items-center gap-1"
        style={{ transform: "translateX(-50%)", zIndex: 1 }}
      >
        <span className="text-gray-500 text-xs tracking-widest uppercase">
          Scroll
        </span>
        <div
          className="w-5 h-8 rounded-full flex items-start justify-center pt-1.5"
          style={{ border: "1.5px solid rgba(255,255,255,0.2)" }}
        >
          <div
            className="w-1 h-2 bg-cyan-400 rounded-full"
            style={{ animation: "float 1.5s ease-in-out infinite" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
