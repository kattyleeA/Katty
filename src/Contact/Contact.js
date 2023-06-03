import React from "react";

function Contact() {
  return (
    <div id="contact" className="contact">
      <form className="form">
        <h2>CONTACT US</h2>
        <p type="Name:">
          <input
            className="con-input"
            placeholder="Write your name here.."
          ></input>
        </p>
        <p type="Email:">
          <input
            className="con-input"
            placeholder="Let us know how to contact you back.."
          ></input>
        </p>
        <p type="Message:">
          <input
            className="con-input"
            placeholder="What would you like to tell us.."
          ></input>
        </p>
        <button className="con-btn">Send Message</button>
        <div className="con-div">
          <span className="fa fa-phone con-span"></span>001 1023 567
          <span className="fa fa-envelope-o con-span"></span>{" "}
          contact@company.com
        </div>
      </form>
    </div>
  );
}
export default Contact;
