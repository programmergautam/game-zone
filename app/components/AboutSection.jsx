import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen py-20 bg-gradient-to-b from-blue-800 to-purple-900 flex items-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">About Us</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src="/about-gaming.jpg"
              alt="About Gaming"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <p className="text-lg mb-4">
              At GameZone, we are dedicated to bringing you the most immersive and enjoyable gaming experiences. Our
              team of experts works tirelessly to innovate and deliver the best content and technology.
            </p>
            <p className="text-lg">
              Join us and be a part of a community that shares your passion for gaming. Whether you're a casual player
              or a hardcore enthusiast, GameZone has something for everyone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
