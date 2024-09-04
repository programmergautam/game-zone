export default function HeroSection() {
  return (
    <section
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{ backgroundImage: "url(/gaming-bg.avif)" }}
    >
      <div className="container mx-auto p-10 mt-20 text-center">
        <h1 className="text-6xl font-extrabold mb-4 text-shadow-lg">Welcome to GameZone</h1>
        <p className="text-2xl mb-8 text-shadow">Your Ultimate Gaming Experience Awaits!</p>
        <button className="bg-green-400 text-black px-8 py-4 rounded-full shadow-lg hover:bg-green-500 transition transform hover:scale-105">
          Get Started
        </button>
      </div>
    </section>
  );
}
