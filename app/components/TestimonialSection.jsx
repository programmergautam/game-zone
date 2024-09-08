"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { toast } from "react-toastify";
import { useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function TestimonialSection() {
  const sectionRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    gsap.fromTo(
      ".testimonial-card",
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: section,
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  const testimonials = [
    {
      name: "John Doe",
      role: "Gamer",
      quote:
        "GameZone has completely transformed the way I enjoy gaming. The experience is seamless, and the community is top-notch!",
      image: "/images/testimonial1.jpg",
    },
    {
      name: "Jane Smith",
      role: "Streamer",
      quote:
        "I can't imagine my gaming journey without GameZone. It's the perfect place to connect with fellow gamers and find new games!",
      image: "/images/testimonial2.jpg",
    },
  ];

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData(event.target);
    if (!formData.has("name") || !formData.has("role") || !formData.has("testimonial") || !formData.has("email")) {
      alert("Please fill out all fields.");
      setIsLoading(false);
      return;
    }

    try {
      toast.success("Appreciate your feedback! Thank you ❤️");
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Failed to send feedback.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="min-h-screen py-8 bg-black bg-opacity-80 backdrop-blur-md flex items-center"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-400">What Our Users Say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card flex flex-col p-4 bg-purple-800 rounded-lg shadow-md text-center transform transition-transform hover:scale-105"
            >
              <Image
                width={60}
                height={60}
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 mx-auto object-cover rounded-full border-2 border-blue-400 mb-3"
              />
              <h3 className="text-base font-semibold text-blue-400">{testimonial.name}</h3>
              <p className="text-slate-300 text-xs italic">{testimonial.role}</p>
              <p className="text-sm text-slate-200 mt-2 flex-grow">{testimonial.quote}</p>
            </div>
          ))}
          <div className="testimonial-card flex flex-col p-4 bg-purple-800 rounded-lg shadow-md text-center transform transition-transform hover:scale-105">
            <h3 className="text-base font-semibold text-blue-400 mb-4">Submit Your Testimonial</h3>
            <form onSubmit={handleFormSubmit} className="flex flex-col gap-2">
              <div className="mb-2">
                <label htmlFor="name" className="block text-sm font-medium text-left mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-2 rounded-lg shadow-inner text-black text-sm"
                  required
                />
              </div>
              <div className="mb-2">
                <label htmlFor="email" className="block text-sm font-medium text-left mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-2 rounded-lg shadow-inner text-black text-sm"
                  required
                />
              </div>
              <div className="mb-2">
                <label htmlFor="role" className="block text-sm font-medium text-left mb-1">
                  Role
                </label>
                <select
                  id="role"
                  name="role"
                  className="w-full p-2 rounded-lg shadow-inner text-black text-sm"
                  required
                >
                  <option value="" disabled>
                    Select your role
                  </option>
                  <option value="Friend">Friend</option>
                  <option value="Recruiter">Recruiter</option>
                  <option value="Visitor">Visitor</option>
                </select>
              </div>
              <div className="mb-2">
                <label htmlFor="testimonial" className="block text-sm font-medium text-left mb-1">
                  Testimonial
                </label>
                <textarea
                  id="testimonial"
                  name="testimonial"
                  className="w-full p-2 rounded-lg shadow-inner text-black text-sm"
                  rows="3"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className={`relative flex items-center justify-center bg-blue-400 text-slate-100 px-4 py-2 rounded-lg shadow-md transition-transform transform hover:scale-105 ${
                  isLoading ? "bg-blue-500 cursor-not-allowed" : "hover:bg-blue-500"
                }`}
              >
                <span>Submit</span>
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
