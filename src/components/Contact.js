import React from "react";
import { MailIcon } from "@heroicons/react/solid";

import { Wave } from 'react-animated-text';

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
      <div className="container px-5 py-10 mx-auto flex justify-center h-2/3">
        <div className="text-3xl flex flex-row underline underline-offset-2">
          
          <Mailto email="linlidiaramirez@gmail.com" subject="Potential creation" body="Time worthy collab / idea / offer:">
            <Wave text="CONTACT ME" effect="stretch" effectChange={2.0} />
            </Mailto>
            <div className="pl-1.5">
              <MailIcon className="mx-auto w-10 mb-4" />
            </div>
          
        </div>
      </div>
    </section>
  );
}