import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

// ⚠️ EmailJS Setup:
// 1. Sign up at https://www.emailjs.com (free)
// 2. Create an Email Service → copy Service ID below
// 3. Create an Email Template → copy Template ID below
// 4. Go to Account → API Keys → copy Public Key below
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";   // e.g. "service_abc123"
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";  // e.g. "template_xyz456"
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";   // e.g. "user_XXXXXXXXXXXX"

const Contact = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const contactInfo = [
    {
      icon: "mail",
      label: "Email",
      value: "shahazhafeez176@gmail.com",
      href: "mailto:shahazhafeez176@gmail.com",
      color: "#f97316",
    },
    {
      icon: "call",
      label: "Phone",
      value: "+923462905808",
      href: "tel:+923462905808",
      color: "#fb923c",
    },
    {
      icon: "location",
      label: "Location",
      value: "Karachi, Pakistan",
      href: null,
      color: "#ffffff",
    },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    emailjs
      .sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus("sent");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus(""), 4000);
      })
      .catch((err) => {
        console.error("EmailJS Error:", err);
        setStatus("error");
        setErrorMsg("Message failed. Please try again or email directly.");
        setTimeout(() => setStatus(""), 4000);
      });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background accents */}
      <div
        className="absolute top-0 left-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, rgba(59, 130, 246, 0.05), transparent)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: "linear-gradient(to top, rgba(59, 130, 246, 0.05), transparent)",
          filter: "blur(80px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-subtitle">Get in Touch</p>
          <div className="section-line" />
          <h2 className="section-title">
            Contact <span>Me</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Have a project in mind? Let's work together and create something
            amazing. I'm always open to new opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Left - Contact Info */}
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-white font-bold text-xl mb-2">
                Let's talk about your{" "}
                <span className="gradient-text">project</span>
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Feel free to reach out. I respond within 24 hours and love
                connecting with fellow developers and potential clients.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="flex flex-col gap-4">
              {contactInfo.map((info, i) => (
                <div
                  key={i}
                  className="contact-info-item"
                  onClick={() => info.href && window.open(info.href)}
                  style={{ cursor: info.href ? "pointer" : "default" }}
                >
                  <div
                    className="min-w-[48px] h-12 rounded-xl flex items-center justify-center text-xl"
                    style={{
                      background: `${info.color}18`,
                      color: info.color,
                    }}
                  >
                    <ion-icon name={info.icon} />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs font-medium uppercase tracking-wider">
                      {info.label}
                    </p>
                    <p className="text-gray-200 text-sm font-medium mt-0.5">
                      {info.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <p className="text-gray-500 text-sm mb-3">Find me on:</p>
              <div className="flex gap-3">
                {[
                  { icon: "logo-github", href: "https://github.com/muhammadshahbaz176", color: "#fff" },
                  { icon: "logo-linkedin", href: "https://www.linkedin.com/in/muhammad-shahbaz-004a3924b/", color: "#0A66C2" },
                  { icon: "logo-instagram", href: "https://www.instagram.com/muhammadshahbaz176/", color: "#E1306C" },

                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-xl text-gray-400 transition-all duration-300 text-lg"
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = social.color;
                      e.currentTarget.style.borderColor = social.color;
                      e.currentTarget.style.background = `${social.color}15`;
                      e.currentTarget.style.transform = "translateY(-3px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "";
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                      e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                      e.currentTarget.style.transform = "";
                    }}
                  >
                    <ion-icon name={social.icon} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div
            className="rounded-2xl p-8"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              backdropFilter: "blur(20px)",
            }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label className="text-gray-400 text-sm mb-2 block font-medium">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Muhammad Shahbaz"
                  required
                />
              </div>
              <div>
                <label className="text-gray-400 text-sm mb-2 block font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="hello@example.com"
                  required
                />
              </div>
              <div>
                <label className="text-gray-400 text-sm mb-2 block font-medium">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={6}
                  required
                />
              </div>

              <button
                type="submit"
                className="btn-primary justify-center mt-2"
                style={{ borderRadius: "12px", padding: "14px" }}
                disabled={status === "sending"}
              >
                {status === "sending" ? (
                  <>
                    <span className="animate-spin inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
                    Sending...
                  </>
                ) : status === "sent" ? (
                  <>
                    <ion-icon name="checkmark-circle-outline" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <ion-icon name="send-outline" />
                    Send Message
                  </>
                )}
              </button>

              {/* Error message */}
              {status === "error" && (
                <p className="text-red-400 text-sm text-center">
                  ⚠️ {errorMsg}
                </p>
              )}
              {/* Success message */}
              {status === "sent" && (
                <p className="text-green-400 text-sm text-center">
                  ✅ Message sent! I'll get back to you soon.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
