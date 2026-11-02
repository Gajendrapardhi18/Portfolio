import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section">
      <div className="section-header">
        <div>
          <p className="section-label">// contact</p>
          <h2 className="section-title">Get in Touch</h2>
        </div>
      </div>

      <div className="contact-grid">
        <div className="contact-card">
          <p className="contact-label">// email</p>
          <p className="contact-value">
            <a href="mailto:gajendraspardhi@gmail.com">gajendraspardhi@gmail.com</a>
          </p>
        </div>
        <div className="contact-card">
          <p className="contact-label">// phone</p>
          <p className="contact-value">
            <a href="tel:+919579451647">+91 95XXXXX647</a>
          </p>
        </div>
        <div className="contact-card">
          <p className="contact-label">// location</p>
          <p className="contact-value">Nagpur, Maharashtra, India</p>
        </div>
        <div className="contact-card">
          <p className="contact-label">// linkedin</p>
          <p className="contact-value">
            <a href="https://linkedin.com/in/gajendra-pardhi-47916b208" target="_blank" rel="noopener noreferrer">
              gajendra-pardhi-47916b208
            </a>
          </p>
        </div>
      </div>

      {/* Resume downloads */}
      <div className="resume-row">
        <a href="/.NET_Resume.pdf" download className="btn btn-secondary">
          ↓ .NET Developer Resume
        </a>
        <a href="/Flutter_Resume.pdf" download className="btn btn-secondary">
          ↓ Flutter Developer Resume
        </a>
      </div>
    </section>
  );
};

export default Contact;

