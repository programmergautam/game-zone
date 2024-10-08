"use client";
import { useState, useEffect, useRef } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailService from "../utils/emailService";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const [isLoading, setIsLoading] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    gsap.fromTo(
      ".contact-form",
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.fromTo(
      ".contact-text",
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData(event.target);

    if (!formData.has("user_name") || !formData.has("user_email") || !formData.has("message")) {
      toast.error("Please fill out all fields.");
      setIsLoading(false);
      return;
    }

    try {
      await emailService.sendEmail({
        from_name: formData.get("user_name"),
        from_email: formData.get("user_email"),
        message: formData.get("message"),
      });
      toast.success("Message sent successfully!");
    } catch (error) {
      console.error("Email send error:", error);
      toast.error("Failed to send the message.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-12 bg-gradient-to-b bg-opacity-70 backdrop-blur-md flex items-center"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
        <div className="flex flex-col md:flex-row items-center contact-text">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-base mb-4">
              Have questions or need support? We’re here to help. Reach out to us anytime.
            </p>
            <p className="text-base">Email: support@gamezone.com</p>
            <p className="text-base">Phone: +123 456 7890</p>
          </div>
          <div className="md:w-1/2 md:pl-12 contact-form">
            <form onSubmit={handleFormSubmit} className="max-w-lg mx-auto p-6 bg-purple-800 rounded-lg shadow-lg">
              <div className="mb-4">
                <label htmlFor="name" className="block text-base font-medium mb-2">
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
              <div className="mb-4">
                <label htmlFor="email" className="block text-base font-medium mb-2">
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
              <div className="mb-4">
                <label htmlFor="message" className="block text-base font-medium mb-2">
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
                disabled={isLoading}
                className={`relative flex items-center justify-center bg-blue-400 text-slate-100 px-6 py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105 ${
                  isLoading ? "bg-blue-500 cursor-not-allowed" : "hover:bg-blue-500"
                }`}
              >
                <span>Send Message</span>
                {isLoading && (
                  <div className="ml-2 w-4 h-4 animate-spin border-2 border-t-transparent border-white rounded-full"></div>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
