import React, { useState } from 'react';

interface FormData {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedWhatsAppUrl, setSubmittedWhatsAppUrl] = useState<string | null>(null);

  // Validate form fields
  const validateField = (name: keyof FormData, value: string): string | undefined => {
    const trimmed = value.trim();
    switch (name) {
      case 'fullName':
        if (!trimmed) return 'Full name is required';
        if (trimmed.length < 2) return 'Full name must be at least 2 characters';
        return undefined;
      case 'email':
        if (!trimmed) return 'Email address is required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
          return 'Please enter a valid email address';
        }
        return undefined;
      case 'subject':
        if (!trimmed) return 'Subject is required';
        if (trimmed.length < 3) return 'Subject must be at least 3 characters';
        return undefined;
      case 'message':
        if (!trimmed) return 'Message is required';
        if (trimmed.length < 10) return 'Message must be at least 10 characters';
        return undefined;
      default:
        return undefined;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const fieldName = name as keyof FormData;
    setFormData((prev) => ({ ...prev, [fieldName]: value }));

    if (touched[fieldName]) {
      const error = validateField(fieldName, value);
      setErrors((prev) => ({ ...prev, [fieldName]: error }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const fieldName = name as keyof FormData;
    setTouched((prev) => ({ ...prev, [fieldName]: true }));
    const error = validateField(fieldName, value);
    setErrors((prev) => ({ ...prev, [fieldName]: error }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all as touched
    setTouched({
      fullName: true,
      email: true,
      subject: true,
      message: true,
    });

    const newErrors: FormErrors = {
      fullName: validateField('fullName', formData.fullName),
      email: validateField('email', formData.email),
      subject: validateField('subject', formData.subject),
      message: validateField('message', formData.message),
    };

    setErrors(newErrors);

    // If any error exists, prevent submission
    if (Object.values(newErrors).some(Boolean)) {
      return;
    }

    setIsSubmitting(true);

    // Build properly formatted WhatsApp message
    const formattedMessage =
      `Hello Gajendra,\n` +
      `You have received a new portfolio enquiry.\n\n` +
      `Name: ${formData.fullName.trim()}\n` +
      `Email: ${formData.email.trim()}\n` +
      `Subject: ${formData.subject.trim()}\n\n` +
      `Message:\n${formData.message.trim()}`;

    const encodedMessage = encodeURIComponent(formattedMessage);
    const whatsappUrl = `https://wa.me/919579451647?text=${encodedMessage}`;

    setSubmittedWhatsAppUrl(whatsappUrl);

    // Open WhatsApp in new tab / app
    try {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    } catch {
      // Handled via fallback UI
    }

    setIsSubmitting(false);
  };

  const handleClearForm = () => {
    setFormData({ fullName: '', email: '', subject: '', message: '' });
    setErrors({});
    setTouched({});
    setSubmittedWhatsAppUrl(null);
  };

  const directWhatsAppUrl = `https://wa.me/919579451647?text=${encodeURIComponent(
    'Hello Gajendra, I saw your portfolio and would like to connect.'
  )}`;

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-label">Get in Touch</div>
        <h2 className="section-title">Let's Work Together</h2>
        <p className="section-desc" style={{ marginBottom: 48 }}>
          I am actively open to discussing software engineering roles, enterprise backend
          architecture, and mobile development projects. Let's connect directly.
        </p>

        <div className="contact-grid">
          {/* Left Column: Direct Channels & Information */}
          <div className="contact-info-col">
            <h3 className="contact-subheading">Direct Channels</h3>
            <p className="contact-subtext">
              Reach out directly on WhatsApp for prompt responses, email for detailed proposals, or
              connect via LinkedIn.
            </p>

            {/* Prominent Direct "Chat on WhatsApp" Button */}
            <a
              href={directWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp-direct"
              aria-label="Directly chat with Gajendra on WhatsApp (+91 95XXXXX647)"
            >
              <svg
                className="whatsapp-icon"
                viewBox="0 0 24 24"
                width="22"
                height="22"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.06 7.42C8.89 7.42 8.62 7.49 8.38 7.74C8.15 8 7.5 8.61 7.5 9.87C7.5 11.12 8.41 12.33 8.54 12.5C8.67 12.67 10.33 15.22 12.86 16.31C13.46 16.57 13.93 16.73 14.29 16.84C14.9 17.04 15.45 17 15.89 16.94C16.38 16.87 17.41 16.31 17.63 15.7C17.84 15.09 17.84 14.56 17.78 14.46C17.72 14.36 17.55 14.3 17.29 14.17C17.03 14.04 15.77 13.42 15.54 13.33C15.31 13.25 15.14 13.2 14.97 13.46C14.8 13.71 14.32 14.3 14.17 14.46C14.03 14.63 13.88 14.66 13.63 14.53C13.37 14.4 12.55 14.13 11.57 13.26C10.81 12.58 10.3 11.75 10.15 11.49C10.01 11.24 10.14 11.09 10.27 10.97C10.39 10.85 10.53 10.66 10.66 10.5C10.79 10.35 10.84 10.25 10.92 10.08C11 9.91 10.96 9.77 10.89 9.64C10.83 9.5 10.33 8.28 10.13 7.78C9.93 7.29 9.73 7.36 9.57 7.35C9.42 7.34 9.24 7.42 9.06 7.42Z" />
              </svg>
              <span>Chat on WhatsApp (+91 95XXXXX647)</span>
            </a>

            {/* Contact Links List */}
            <div className="contact-links-list">
              <a href="mailto:gajendraspardhi@gmail.com" className="contact-link-card">
                <div className="contact-icon-box">✉</div>
                <div className="contact-card-text">
                  <span className="contact-card-label">Email</span>
                  <span className="contact-card-val">gajendraspardhi@gmail.com</span>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/gajendra-pardhi-47916b208"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link-card"
              >
                <div className="contact-icon-box">in</div>
                <div className="contact-card-text">
                  <span className="contact-card-label">LinkedIn</span>
                  <span className="contact-card-val">linkedin.com/in/gajendra-pardhi-47916b208</span>
                </div>
              </a>

              <a href="tel:+919579451647" className="contact-link-card">
                <div className="contact-icon-box">📱</div>
                <div className="contact-card-text">
                  <span className="contact-card-label">Phone &amp; WhatsApp</span>
                  <span className="contact-card-val">+91 95XXXXX647</span>
                </div>
              </a>
            </div>

            {/* Resume Downloads */}
            <div className="contact-resume-box">
              <span className="contact-resume-title">Curriculum Vitae</span>
              <div className="contact-resume-btns">
                <a href="/.NET_Resume.pdf" download className="btn btn-outline btn-sm">
                  .NET Core CV ↓
                </a>
                <a href="/Flutter_Resume.pdf" download className="btn btn-ghost btn-sm">
                  Flutter CV ↓
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form with WhatsApp Integration */}
          <div className="contact-form-col">
            <div className="contact-form-card">
              <h3 className="form-card-title">Send a Portfolio Enquiry</h3>
              <p className="form-card-subtitle">
                Fill in your details below. Submitting will prepare your message and open WhatsApp
                with one click.
              </p>

              {/* Status Banner when submitted */}
              {submittedWhatsAppUrl && (
                <div className="whatsapp-notice-banner" role="status" aria-live="polite">
                  <div className="notice-header">
                    <span className="notice-icon">💬</span>
                    <strong>Action Required: Press "Send" in WhatsApp</strong>
                  </div>
                  <p className="notice-desc">
                    WhatsApp has been opened with your pre-filled enquiry. Please tap the{' '}
                    <strong>Send button</strong> inside WhatsApp to deliver your message.
                  </p>
                  <p className="notice-disclaimer">
                    <em>Note: Opening WhatsApp does not mean the message was sent automatically. Your form details are preserved below.</em>
                  </p>
                  <div className="notice-actions">
                    <a
                      href={submittedWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-notice-resend"
                    >
                      Reopen WhatsApp →
                    </a>
                    <button
                      type="button"
                      onClick={handleClearForm}
                      className="btn-notice-clear"
                    >
                      Clear Form
                    </button>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="contact-form">
                {/* Full Name */}
                <div className="form-group">
                  <label htmlFor="contact-fullName" className="form-label">
                    Full Name <span className="required-star">*</span>
                  </label>
                  <input
                    id="contact-fullName"
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="e.g. Sarah Jenkins"
                    className={`form-input ${touched.fullName && errors.fullName ? 'has-error' : ''}`}
                    aria-required="true"
                    aria-invalid={!!(touched.fullName && errors.fullName)}
                    aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                    disabled={isSubmitting}
                  />
                  {touched.fullName && errors.fullName && (
                    <span id="fullName-error" className="form-error-msg" role="alert">
                      {errors.fullName}
                    </span>
                  )}
                </div>

                {/* Email Address */}
                <div className="form-group">
                  <label htmlFor="contact-email" className="form-label">
                    Email Address <span className="required-star">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="e.g. sarah@example.com"
                    className={`form-input ${touched.email && errors.email ? 'has-error' : ''}`}
                    aria-required="true"
                    aria-invalid={!!(touched.email && errors.email)}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    disabled={isSubmitting}
                  />
                  {touched.email && errors.email && (
                    <span id="email-error" className="form-error-msg" role="alert">
                      {errors.email}
                    </span>
                  )}
                </div>

                {/* Subject */}
                <div className="form-group">
                  <label htmlFor="contact-subject" className="form-label">
                    Subject <span className="required-star">*</span>
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="e.g. Software Developer Opportunity"
                    className={`form-input ${touched.subject && errors.subject ? 'has-error' : ''}`}
                    aria-required="true"
                    aria-invalid={!!(touched.subject && errors.subject)}
                    aria-describedby={errors.subject ? 'subject-error' : undefined}
                    disabled={isSubmitting}
                  />
                  {touched.subject && errors.subject && (
                    <span id="subject-error" className="form-error-msg" role="alert">
                      {errors.subject}
                    </span>
                  )}
                </div>

                {/* Message */}
                <div className="form-group">
                  <label htmlFor="contact-message" className="form-label">
                    Message <span className="required-star">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Hi Gajendra, I came across your portfolio and would like to discuss..."
                    className={`form-textarea ${touched.message && errors.message ? 'has-error' : ''}`}
                    aria-required="true"
                    aria-invalid={!!(touched.message && errors.message)}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    disabled={isSubmitting}
                  />
                  {touched.message && errors.message && (
                    <span id="message-error" className="form-error-msg" role="alert">
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit Button */}
                <div className="form-submit-row">
                  <button
                    type="submit"
                    className="btn btn-primary btn-submit-wa"
                    disabled={isSubmitting}
                  >
                    <span>{isSubmitting ? 'Opening WhatsApp...' : 'Send Message via WhatsApp →'}</span>
                  </button>

                  <a
                    href={`mailto:gajendraspardhi@gmail.com?subject=${encodeURIComponent(
                      formData.subject || 'Portfolio Inquiry'
                    )}&body=${encodeURIComponent(
                      `Name: ${formData.fullName}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
                    )}`}
                    className="email-fallback-link"
                    title="Prefer sending via traditional email?"
                  >
                    Or send via Email client
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
