import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));

    setErrors((previousErrors) => ({
      ...previousErrors,
      [name]: "",
    }));

    setStatus("");
  }

  function validateForm() {
    const newErrors = {};

    if (formData.name.trim().length < 2) {
      newErrors.name = "Name must contain at least 2 characters.";
    }

    if (formData.name.trim().length > 60) {
      newErrors.name = "Name cannot exceed 60 characters.";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (formData.subject.trim().length < 3) {
      newErrors.subject = "Subject must contain at least 3 characters.";
    }

    if (formData.subject.trim().length > 100) {
      newErrors.subject = "Subject cannot exceed 100 characters.";
    }

    if (formData.message.trim().length < 10) {
      newErrors.message = "Message must contain at least 10 characters.";
    }

    if (formData.message.trim().length > 3000) {
      newErrors.message = "Message cannot exceed 3000 characters.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("");

    if (!validateForm()) {
      return;
    }

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      setStatus("config-error");
      return;
    }

    setIsSending(true);

    try {
      const submissionData = new FormData();

      submissionData.append("access_key", accessKey);
      submissionData.append("name", formData.name.trim());
      submissionData.append("email", formData.email.trim());
      submissionData.append("subject", formData.subject.trim());
      submissionData.append("message", formData.message.trim());

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: submissionData,
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        setStatus("error");
        return;
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setErrors({});
    } catch {
      setStatus("error");
    } finally {
      setIsSending(false);
    }
  }

  return (
    <main className="contact-page">
      <h2 className="contact-heading">Contact Me</h2>
      <span className="contact-label">Xpider Contact</span>

      <div className="contact-content">
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              maxLength={60}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && (
              <p className="contact-status error" id="name-error">
                {errors.name}
              </p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <p className="contact-status error" id="email-error">
                {errors.email}
              </p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleChange}
              required
              maxLength={100}
              aria-invalid={Boolean(errors.subject)}
              aria-describedby={errors.subject ? "subject-error" : undefined}
            />
            {errors.subject && (
              <p className="contact-status error" id="subject-error">
                {errors.subject}
              </p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              maxLength={3000}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "message-error" : undefined}
            />
            {errors.message && (
              <p className="contact-status error" id="message-error">
                {errors.message}
              </p>
            )}
          </div>

          <button className="contact-submit" type="submit" disabled={isSending}>
            {isSending ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="contact-status success" role="status">
              Your message was sent successfully!
            </p>
          )}

          {status === "error" && (
            <p className="contact-status error" role="alert">
              Your message could not be sent. Please try again.
            </p>
          )}

          {status === "config-error" && (
            <p className="contact-status error" role="alert">
              Email service is not configured. Please check your Web3Forms
              access key.
            </p>
          )}
        </form>

        <section className="contact-social">
          <h2>Find Me Online</h2>

          <div className="contact-social-links">
            <a
              className="contact-social-link"
              href="https://t.me/pr0Infinity"
              target="_blank"
              rel="noopener noreferrer"
            >
              My Telegram
            </a>

            <a
              className="contact-social-link"
              href="https://github.com/senior-murtaza"
              target="_blank"
              rel="noopener noreferrer"
            >
              My GitHub
            </a>

            <a
              className="contact-social-link"
              href="mailto:murtazar640@gmail.com"
            >
              My Email
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
