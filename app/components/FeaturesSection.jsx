export default function FeaturesSection() {
  return (
    <section id="features" className="min-h-screen py-20 bg-black bg-opacity-70 backdrop-blur-md flex items-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-purple-800 p-8 rounded-lg shadow-lg text-center transform hover:scale-105 transition">
            <div className="bg-green-500 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4 shadow-inner">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4H8l4-4m0 8v4m2-16v4M2 20h.01M22 20h.01M12 14v4m4-4v4m-8-4v4"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-2">Immersive Gameplay</h3>
            <p className="text-lg">Experience gaming like never before with ultra-realistic graphics and sound.</p>
          </div>
          <div className="bg-purple-800 p-8 rounded-lg shadow-lg text-center transform hover:scale-105 transition">
            <div className="bg-green-500 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4 shadow-inner">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4H8l4-4m0 8v4m2-16v4M2 20h.01M22 20h.01M12 14v4m4-4v4m-8-4v4"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-2">Cross-Platform Play</h3>
            <p className="text-lg">Connect with friends across all major platforms and play together.</p>
          </div>
          <div className="bg-purple-800 p-8 rounded-lg shadow-lg text-center transform hover:scale-105 transition">
            <div className="bg-green-500 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4 shadow-inner">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4H8l4-4m0 8v4m2-16v4M2 20h.01M22 20h.01M12 14v4m4-4v4m-8-4v4"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-2">Exclusive Content</h3>
            <p className="text-lg">Access exclusive in-game items and special events available only to members.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
