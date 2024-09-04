"use client";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailService from "../utils/emailService";

export default function ContactSection() {
  const handleFormSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    if (!formData.has("user_name") || !formData.has("user_email") || !formData.has("message")) {
      console.error("Missing form fields.");
      toast.error("Please fill out all fields.");
      return;
    }

    emailService
      .sendEmail({
        from_name: formData.get("user_name"),
        from_email: formData.get("user_email"),
        message: formData.get("message"),
      })
      .then(() => {
        toast.success("Message sent successfully!");
      })
      .catch((error) => {
        console.error("Email send error:", error);
        toast.error("Failed to send the message.");
      });
  };

  return (
    <section id="contact" className="min-h-screen py-20 bg-black bg-opacity-70 backdrop-blur-md flex items-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Get in Touch</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
            <p className="text-lg mb-4">Have questions or need support? We’re here to help. Reach out to us anytime.</p>
            <p className="text-lg">Email: support@gamezone.com</p>
            <p className="text-lg">Phone: +123 456 7890</p>
          </div>
          <div className="md:w-1/2 md:pl-12">
            <form onSubmit={handleFormSubmit} className="max-w-lg mx-auto p-8 bg-purple-800 rounded-lg shadow-lg">
              <div className="mb-6">
                <label htmlFor="name" className="block text-lg font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  className="w-full p-3 rounded-lg shadow-inner text-black"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-lg font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  className="w-full p-3 rounded-lg shadow-inner text-black"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-lg font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full p-3 rounded-lg shadow-inner text-black"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-green-400 text-black px-6 py-3 rounded-full shadow-lg hover:bg-green-500 transition transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
}
