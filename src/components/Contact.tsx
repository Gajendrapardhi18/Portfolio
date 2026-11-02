import React from 'react';
import { ResumeType } from '../data/resumes';

interface ContactProps {
  onResumePreview?: (type: ResumeType) => void;
}

const Contact: React.FC<ContactProps> = ({ onResumePreview }) => {
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

      {/* Resume previews */}
      <div className="resume-row">
        <button
          type="button"
          onClick={() => onResumePreview?.('dotnet')}
          className="btn btn-secondary"
          aria-label="Preview .NET Developer Resume"
        >
          .NET Developer Resume
        </button>
        <button
          type="button"
          onClick={() => onResumePreview?.('flutter')}
          className="btn btn-secondary"
          aria-label="Preview Flutter Developer Resume"
        >
          Flutter Developer Resume
        </button>
      </div>
    </section>
  );
};

export default Contact;

