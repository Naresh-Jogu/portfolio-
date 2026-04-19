import { useState } from "react";
import {
  Mail,
  MapPin,
  Send,
  Github,
  Linkedin,
  CheckCircle,
  Phone,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import { personalInfo } from "../data/portfolioData";
import styles from "./Contact.module.css";

const WhatsAppIcon = ({ size }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.062-.301-.15-1.264-.46-2.406-1.481-.888-.788-1.488-1.761-1.666-2.062-.175-.3-.021-.462.13-.611.136-.134.301-.349.45-.523.15-.173.197-.301.295-.498.101-.2.052-.375-.021-.525-.075-.15-.673-1.623-.923-2.223-.243-.585-.49-.504-.673-.513-.173-.006-.375-.008-.57-.008-.197 0-.523.076-.798.375-.275.3-1.045 1.025-1.045 2.503 0 1.479 1.073 2.91 1.22 3.109.15.198 2.112 3.226 5.118 4.524 2.822 1.218 3.518 1.018 4.14 1.002.622-.016 1.767-.718 2.015-1.416.248-.697.248-1.294.173-1.417-.075-.122-.275-.197-.574-.347" />
    <path d="M12.079 21.995h-.005a9.873 9.873 0 01-5.029-1.378l-.36-.214-3.742.986 1-3.649-.235-.373A9.851 9.851 0 012.074 12c0-5.463 4.453-9.916 9.932-9.916 2.652 0 5.145 1.034 7.018 2.91 1.875 1.874 2.906 4.368 2.906 7.021-.005 5.46-4.462 9.915-9.853 9.915" />
  </svg>
);

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | sent

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    console.log(import.meta.env.VITE_EMAILJS_SERVICE_ID);
    console.log(import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
    console.log(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        (result) => {
          setStatus("sent");
        },
        (error) => {
          console.error(error.text);
          setStatus("idle");
          alert("Failed to send message. Please try again.");
        },
      );
  };

  const contactItems = [
    {
      icon: Phone,
      label: "Phone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone.replace(/[^0-9+]/g, "")}`,
    },
    {
      icon: Mail,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: WhatsAppIcon,
      label: "WhatsApp",
      value: "Send a Message",
      href: `https://wa.me/${personalInfo.whatsapp}?text=Hi%20Naresh,%20I%20saw%20your%20portfolio!`,
    },
    {
      icon: MapPin,
      label: "Location",
      value: personalInfo.location,
      href: "#",
    },
  ];

  const socials = [
    { icon: Github, href: personalInfo.github, label: "GitHub" },
    { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
  ];

  return (
    <section id="contact" className="section">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <span className="section-tag">
            <Mail size={12} /> Contact
          </span>
          <h2 className="section-title">
            Let's <span className="grad-text">Work Together</span>
          </h2>
          <p className={styles.subtitle}>
            I'm actively looking for Junior MERN Stack Developer opportunities.
            Feel free to reach out for roles, collaborations, or discussions.
          </p>
        </div>

        <div className={styles.grid}>
          {/* Left — Info */}
          <div className={styles.info}>
            <p className={styles.infoText}>
              I'm currently seeking Junior MERN Stack Developer roles where I
              can contribute, learn, and grow as a developer. I'm open to
              full-time opportunities and collaborations.
            </p>

            <div className={styles.contactItems}>
              {contactItems.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className={`card ${styles.contactCard}`}
                >
                  <div className={styles.contactIcon}>
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className={styles.contactLabel}>{label}</p>
                    <p className={styles.contactValue}>{value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className={styles.socials}>
              <p className={styles.socialsLabel}>Find me on</p>
              <div className={styles.socialRow}>
                {socials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.social}
                    aria-label={label}
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className={`card ${styles.formCard}`}>
            {status === "sent" ? (
              <div className={styles.success}>
                <div className={styles.successIcon}>
                  <CheckCircle size={36} />
                </div>
                <h3>Message Sent!</h3>
                <p>I'll review your message and get back to you soon.</p>
                <button
                  className="btn btn-ghost"
                  onClick={() => {
                    setStatus("idle");
                    setForm({ name: "", email: "", subject: "", message: "" });
                  }}
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <h3 className={styles.formTitle}>Send a Message</h3>

                <div className={styles.row}>
                  <div className={styles.field}>
                    <label htmlFor="name" className={styles.label}>
                      Your Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      className={styles.input}
                      placeholder="John Doe"
                      required
                      autoComplete="name"
                    />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="email" className={styles.label}>
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      className={styles.input}
                      placeholder="john@example.com"
                      required
                      autoComplete="email"
                    />
                  </div>
                </div>

                <div className={styles.field}>
                  <label htmlFor="subject" className={styles.label}>
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className={styles.input}
                    placeholder="Project Inquiry"
                    required
                    autoComplete="off"
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="message" className={styles.label}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    className={`${styles.input} ${styles.textarea}`}
                    placeholder="Tell me about your project..."
                    rows={5}
                    required
                    autoComplete="off"
                  />
                </div>

                <button
                  type="submit"
                  className={`btn btn-primary ${styles.submitBtn}`}
                  disabled={status === "sending"}
                >
                  {status === "sending" ? (
                    <>
                      <span className={styles.spinner} /> Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} /> Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
