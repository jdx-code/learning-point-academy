import React from "react";
import "./FooterSection.css";

const FooterSection = () => {
  return (
    <footer className="footer" id="blogs">
      <div className="footer-container">
        <div className="footer-map">
          <iframe
            title="Scholar Home Tutorial Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.6635437630973!2d91.75394327517196!3d26.788477176716624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a5936cccccdef%3A0x7f7a5e42b824a9b1!2sGuwahati%2C%20Assam!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        <div className="footer-info">
          <h3>The Learning Point Academy</h3>
          <p>📍 Guwahati, Assam, India</p>
          <p>📞 +91 12345 54321</p>
          <p>📧 info@thelearningpointacademy.com</p>
          <p>⏰ Mon–Sat: 9:00 AM – 8:00 PM</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} The Learning Point Academy. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default FooterSection;
