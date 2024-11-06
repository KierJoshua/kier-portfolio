import React from "react";
import { useRef } from "react";
import PageTitles from "./PageTitles";
import emailjs from "@emailjs/browser";
import Swal from 'sweetalert2'

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Message Sent!",
      showConfirmButton: false,
      timer: 1500
    });

    emailjs
      .sendForm("service_itqyv4g", "template_nn85n5y", form.current, {
        publicKey: "fCBWt35nzm5BzAqZI",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section id="contact">
    <div className="bg-slate-950 pt-10 flex flex-col items-center" >
    <PageTitles name="Contact Me" />
    <div className="flex justify-center w-full max-w-lg px-4 py-10 text-light-blue font-semibold">
      <form ref={form} onSubmit={sendEmail} className="w-full space-y-6 bg-slate-800 p-8 rounded-lg shadow-lg">
        <div className="flex">
          <div className="flex flex-col me-2">
          <label className="mb-2 text-lg">Name</label>
          <input
            type="text"
            name="user_name"
            className="w-full px-4 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-light-blue"
            placeholder="Enter your name"
            required
          />
          </div>
   
          <div className="flex flex-col">
          <label className="mb-2 mx-2 text-lg">Email</label>
          <input
            type="email"
            name="user_email"
            className="w-full px-4 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-light-blue"
            placeholder="Enter your email"
            required
          />
          </div>
        </div>
  
        <div className="flex flex-col">
          <label className="mb-2 text-lg">Message</label>
          <textarea
            name="message"
            rows="4"
            className="w-full px-4 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-light-blue"
            placeholder="Your message here"
            required
          />
        </div>
  
        <div className="text-center">
          <input
            type="submit"
            value="Send Message"
            className="px-6 py-3 mt-4 font-semibold text-white bg-light-blue rounded-lg shadow-md cursor-pointer hover:bg-blue-700 transition duration-300"
          />
        </div>
      </form>
    </div>
  </div>
  </section>
    
  );
};

export default ContactMe;
