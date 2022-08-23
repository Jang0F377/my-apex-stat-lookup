import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef(null);

  const sendEmail = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    // @ts-ignore
    emailjs
      .sendForm(
        "service_nl8wc35",
        "template_mrl1t2k",
        form.current,
        "y3XUj2oOCpCCqvyyJ"
      )
      .then(
        () => {
          setName("");
          setEmail("");
          setMessage("");
          alert("Thank you for your message!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="xl:max-w-7xl lg:max-w-6xl lg:mx-auto mt-5 mb-1.5 p-2">
      <div className="text-center">
        <h2 className="text-3xl lg:text-4xl text-black text-center my-1 py-1 font-bold">
          Contact Me
        </h2>
      </div>
      <div className="mt-12">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
        >
          <div className="sm:col-span-2">
            <label
              htmlFor="first-name"
              className="block text-sm lg:text-base font-medium text-black"
            >
              First name
            </label>
            <div className="mt-1">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm lg:text-base font-medium text-black"
            >
              Email
            </label>
            <div className="mt-1">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm lg:text-base font-medium text-black"
            >
              Message
            </label>
            <div className="mt-1">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                id="message"
                name="message"
                rows={4}
                className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <button
              onClick={sendEmail}
              type="button"
              className="w-full inline-flex items-center justify-center px-6 py-3 rounded-md shadow-sm text-base font-medium text-white bg-muted-dark-red hover:bg-dark-red focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-muted-dark-red"
            >
              Let&apos;s talk
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
