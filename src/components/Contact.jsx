import location from "../assets/location.png";
import email from "../assets/email.png";
import phone from "../assets/phone.png";
import shape from "../assets/shape.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useEffect } from "react";
const Contact = () => {
  useEffect(() => {
    const inputs = document.querySelectorAll(".container > *:first-child");

    function focusFunc() {
      let parent = this.parentNode;
      parent.classList.add("focus");
    }

    function blurFunc() {
      let parent = this.parentNode;
      if (this.value === "") {
        parent.classList.remove("focus");
      }
    }

    inputs.forEach((input) => {
      input.addEventListener("focus", focusFunc);
      input.addEventListener("blur", blurFunc);
    });

    return () => {
      // Cleanup: Remove event listeners when the component is unmounted
      inputs.forEach((input) => {
        input.removeEventListener("focus", focusFunc);
        input.removeEventListener("blur", blurFunc);
      });
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="max-w-4xl my-12 mx-auto">
      <div className="relative flex items-center justify-center">
        <span className="absolute w-500 h-500 bg-gradient-to-b from-teal-400 to-teal-800 rounded-full bottom-1/2 right-1/2 transform translate-x-1/3 translate-y-2/5"></span>
        <img
          src={shape}
          className="absolute h-80 top-1/2 left-1/2 transform -translate-x-2/3 -translate-y-1/2 opacity-20"
          alt="Shape"
        />
        <div className="flex flex-col sm:flex-row w-full max-w-4xl bg-white rounded-md shadow-lg overflow-hidden gap-2 ">
          {/* Contact Info */}
          <div className="p-8 sm:w-1/2 w-full">
            <h3 className="text-2xl font-semibold text-teal-500">
              Let's get in touch
            </h3>
            <p className="text-gray-700 mt-2">
              I am here to answer any question you might have for me. I promise
              to respond within the shortest time possible.
            </p>
            <div className="mt-4 space-y-4">
              <div className="flex items-center text-gray-600">
                <img src={location} className="w-6 h-6 mr-2" alt="location" />
                <p>Nairobi, Kenya</p>
              </div>
              <div className="flex items-center text-gray-600">
                <img src={email} className="w-6 h-6 mr-2" alt="" />
                <p>bonkim@wambo.com</p>
              </div>
              <div className="flex items-center text-gray-600">
                <img src={phone} className="w-6 h-6 mr-2" alt="phone" />
                <p>+254 724617731</p>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-gray-700">Me On Social Media :</p>
              <div className="flex space-x-2 mt-2">
                <a
                  href="#"
                  className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white hover:scale-105 transform transition duration-300"
                >
                  <FaFacebook />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white hover:scale-105 transform transition duration-300"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white hover:scale-105 transform transition duration-300"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white hover:scale-105 transform transition duration-300"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative bg-teal-700 p-8 sm:w-1/2 w-full">
            <span className="absolute w-130 h-130 bg-gradient-to-b from-transparent via-transparent to-teal-600 rounded-full top-20 right-1/3"></span>
            <span className="absolute w-80 h-80 bg-gradient-to-b from-transparent via-transparent to-teal-600 rounded-full top-2 right-1/6"></span>
            <form className="relative" onSubmit={handleSubmit}>
              <h3 className="text-2xl font-semibold text-white mb-4">
                Talk To Me
              </h3>
              <div className="container relative my-8">
                <input
                  type="text"
                  name="name"
                  className="w-full outline-none border-2 border-gray-100 bg-transparent px-3 py-2 text-white font-semibold text-sm leading-tight tracking-wide rounded-lg transition duration-300"
                />
                <label
                  htmlFor="name"
                  className="absolute top-1/2 left-4 transform -translate-y-1/2 px-1/10 text-white text-sm font-normal pointer-events-none transition-all duration-500 "
                >
                  Username
                </label>
                <span className="absolute top-0 left-25 transform -translate-y-1/2 text-transparent text-xs md:text-sm px-1 py-0.4 pointer-events-none">
                  Usernam
                </span>
              </div>
              <div className="container relative my-8">
                <input
                  type="email"
                  name="email"
                  className="w-full outline-none border-2 border-gray-100 bg-transparent px-3 py-2 text-white font-semibold text-sm leading-tight tracking-wide rounded-lg transition duration-300"
                />
                <label
                  htmlFor="email"
                  className="absolute top-1/2 left-4 transform -translate-y-1/2 px-1/10 text-white text-sm font-normal pointer-events-none transition-all duration-500 "
                >
                  Email
                </label>
                <span className="absolute top-0 left-25 transform -translate-y-1/2 text-transparent text-xs md:text-sm px-1 py-0.4 pointer-events-none">
                  Email
                </span>
              </div>
              <div className="container relative my-8">
                <input
                  type="tel"
                  name="phone"
                  className="w-full outline-none border-2 border-gray-100 bg-transparent px-3 py-2 text-white font-semibold text-sm leading-tight tracking-wide rounded-lg transition duration-300"
                />
                <label
                  htmlFor="phone"
                  className="absolute top-1/2 left-4 transform -translate-y-1/2 px-1/10 text-white text-sm font-normal pointer-events-none transition-all duration-500"
                >
                  Phone
                </label>
                <span className="absolute top-0 left-25 transform -translate-y-1/2 text-transparent text-xs md:text-sm px-1 py-0.4 pointer-events-none z-50">
                  Phone
                </span>
              </div>
              <div className="container relative mt-8 mb-4">
                <textarea
                  name="message"
                  className=" 
                  w-full outline-none border-2 border-gray-100 bg-transparent py-3 px-5 text-white font-semibold text-sm leading-tight tracking-wide transition duration-300 min-h-40 rounded-lg resize-none overflow-y-auto"
                ></textarea>
                <label
                  htmlFor="message"
                  className="absolute top-4 left-4 transform -translate-y-0 px-1/10 text-white text-sm font-normal pointer-events-none transition-all duration-500"
                >
                  Message
                </label>
                <span className="absolute top-0 left-25 transform -translate-y-1/2 text-transparent text-xs md:text-sm px-1 py-0.4 pointer-events-none z-50">
                  Message
                </span>
              </div>
              <input
                type="submit"
                value="Send"
                className="w-full p-2.5 px-5 bg-transparent border-2 border-gray-100 text-green-500 text-base leading-none rounded-xl outline-none cursor-pointer transition duration-300 ease-in-out m-0 hover:bg-transparent hover:text-white active:scale-95"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
