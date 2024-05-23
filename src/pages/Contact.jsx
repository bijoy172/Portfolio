import React from "react";
import contact from "../resources/contact.json";
import SectionTitle from "../components/SectionTitle";

const Contact = () => {
  return (
    <div>
      <SectionTitle title="Say Hello" />
      <div className="flex sm:flex-col items-center justify-between">
        <div className="flex flex-col gap-1">
          <h1 className="text-tertiary ">{"{"}</h1>

          {contact.map((contact, index) => (
            <h1 key={index} className="ml-5">
              <p className="text-tertiary">"name": "{contact.name}"</p>
              <p className="text-tertiary">"age": "{contact.age || null}"</p>
              <p className="text-tertiary">"gender": "{contact.gender}"</p>
              <p className="text-tertiary">"email": "{contact.email}"</p>
              <p className="text-tertiary">"phone": "{contact.mobile}"</p>
              <p className="text-tertiary">"address": "{contact.address}"</p>
            </h1>
          ))}
          <h1 className="text-tertiary">{"}"}</h1>
        </div>
        <div className="h-[60vh] w-1/2 sm:w-full">
          <dotlottie-player
            src="https://lottie.host/ebee8475-eb34-4aba-9e7f-339035078683/YMkV6xVwy7.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></dotlottie-player>
        </div>
      </div>
    </div>
  );
};

export default Contact;
