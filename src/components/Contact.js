import React from "react";

import ReactDOM from "react-dom";

const Mailto = ({ email, subject, body, ...props }) => {
  return (
    <a href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`}>
      {props.children}
    </a>
  );
}

export default function Contact() {

  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex justify-center">

      <div>

      <Mailto email="linlidiaramirez@gmail.com" subject="Potential creation" body="Time worthy work / idea / offer:">
    <h2 className="text-3xl">Reach Me</h2>

  </Mailto>
      </div>
      
      </div>
    </section>
  );
}