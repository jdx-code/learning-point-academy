import React from "react";
import "./FooterSection.css";

const FooterSection = () => {
  return (
    <footer className="footer" id="blogs">
      <div className="footer-container">
        <div className="footer-map">
          <iframe
            title="The Learning Point Academy"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.7233184046186!2d91.75028917398778!3d26.173138891484534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a5a2ab6fc71ab%3A0xbd2a6cba95f09cff!2sPiyali%20Phukan%20Rd%2C%20Ulubari%2C%20Guwahati%2C%20Assam!5e0!3m2!1sen!2sin!4v1762761744860!5m2!1sen!2sin"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>           

        <div className="footer-info">
          <h3>The Learning Point Academy</h3>
          <p>📍Address : 1st Floor H No. - 70, Piyoli Phukan Road, Rehabari, Guwahati - 781008 </p>
          <p>📞Contact: +91 9531290312 / 9864278059</p>
          <p>📧Email: contact@thelearningpointacademy.com</p>
          {/* <p>⏰ Mon–Sat: 9:00 AM – 8:00 PM</p> */}
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} The Learning Point Academy. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default FooterSection;
