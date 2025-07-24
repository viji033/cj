// ContactSection.tsx
import React, { useState } from 'react';
import SocialIcon from './SocialIcon';
import { SocialIcon as SocialIconType } from '../types/types';
import './ContactSection.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const ContactSection = () => {
  const socialIcons: SocialIconType[] = [
    { icon: "fab fa-github", color: "text-gray-800", link: "https://github.com/viji033" },
    { icon: "fab fa-instagram", color: "text-pink-500" },
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="background-layer"></div>
      <div className="container">
        <div className="section-header">
          <h2 className="title">Get In Touch</h2>
          <p className="description">
            Have a project in mind? Let's collaborate and create something extraordinary together.
          </p>
        </div>
        <div className="contact-content">
          <ContactForm />
          <ContactInfo socialIcons={socialIcons} />
        </div>
      </div>
    </section>
  );
};

const ContactForm = () => {
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    setSuccess(true);

    setFormData({
      name: '',
      email: '',
      message: ''
    });

    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  };

  return (
    <div className="form-container">
      <form className="contact-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          placeholder="Your Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <FormInput
          type="email"
          placeholder="Your Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <FormTextarea
          placeholder="Your Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
        <button type="submit" className="submit-button">
          <span className="button-text">Send Message</span>
          <i className="fas fa-arrow-right button-icon"></i>
          <span className="button-gradient"></span>
        </button>
        {success && (
          <p className="text-green-400 mt-3 text-center">Message sent successfully!</p>
        )}
      </form>
    </div>
  );
};

const FormInput: React.FC<{
  type: string;
  placeholder: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ type, placeholder, name, value, onChange }) => (
  <div className="form-group">
    <input
      type={type}
      placeholder={placeholder}
      className="form-input"
      required
      name={name}
      value={value}
      onChange={onChange}
    />
    <div className="input-underline"></div>
  </div>
);

const FormTextarea: React.FC<{
  placeholder: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}> = ({ placeholder, name, value, onChange }) => (
  <div className="form-group">
    <textarea
      placeholder={placeholder}
      rows={5}
      className="form-input textarea"
      required
      name={name}
      value={value}
      onChange={onChange}
    ></textarea>
    <div className="input-underline"></div>
  </div>
);

const ContactInfo: React.FC<{ socialIcons: SocialIconType[] }> = ({ socialIcons }) => (
  <div className="info-container">
    <div className="info-section">
      <h3 className="info-title">Contact Information</h3>
      <div className="info-items">
        <ContactItem icon="fas fa-envelope" title="Email" content="vijay240901@gmail.com" />
        <ContactItem icon="fas fa-map-marker-alt" title="Location" content="Sathankulam, Thoothukudi District" />
      </div>
    </div>
    <div className="social-section">
      <h3 className="social-title">Connect With Me</h3>
      <div className="social-icons">
        {socialIcons.map((social, index) => (
          <SocialIcon
            key={index}
            icon={social.icon}
            color={social.color}
            link={social.link} // <-- pass link here
          />
        ))}
      </div>
    </div>
  </div>
);

const ContactItem: React.FC<{ icon: string; title: string; content: string }> = ({ icon, title, content }) => {
  if (title === "Email") {
    return (
      <div className="contact-item">
        <a href={`mailto:${content}`} className="contact-icon" aria-label="Send email">
          <i className={icon}></i>
        </a>
        <div className="contact-details">
          <h4 className="contact-title">{title}</h4>
          <a href={`mailto:${content}`} className="contact-content">{content}</a>
        </div>
      </div>
    );
  }
  return (
    <div className="contact-item">
      <div className="contact-icon">
        <i className={icon}></i>
      </div>
      <div className="contact-details">
        <h4 className="contact-title">{title}</h4>
        <p className="contact-content">{content}</p>
      </div>
    </div>
  );
};

export default ContactSection;
