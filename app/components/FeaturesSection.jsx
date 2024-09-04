import { FaGamepad, FaGlobe, FaStar } from "react-icons/fa";

export default function FeaturesSection() {
  return (
    <section id="features" className="min-h-screen py-20 bg-black bg-opacity-70 backdrop-blur-md flex items-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-purple-800 p-8 rounded-lg shadow-lg text-center transform hover:scale-105 transition">
            <div className="bg-green-500 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4 shadow-inner">
              <FaGamepad className="h-10 w-10 text-black" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-white">Immersive Gameplay</h3>
            <p className="text-lg text-white">
              Experience gaming like never before with ultra-realistic graphics and sound.
            </p>
          </div>
          <div className="bg-purple-800 p-8 rounded-lg shadow-lg text-center transform hover:scale-105 transition">
            <div className="bg-green-500 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4 shadow-inner">
              <FaGlobe className="h-10 w-10 text-black" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-white">Cross-Platform Play</h3>
            <p className="text-lg text-white">Connect with friends across all major platforms and play together.</p>
          </div>
          <div className="bg-purple-800 p-8 rounded-lg shadow-lg text-center transform hover:scale-105 transition">
            <div className="bg-green-500 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4 shadow-inner">
              <FaStar className="h-10 w-10 text-black" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-white">Exclusive Content</h3>
            <p className="text-lg text-white">
              Access exclusive in-game items and special events available only to members.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
