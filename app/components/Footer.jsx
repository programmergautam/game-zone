export default function Footer() {
  return (
    <footer className="bg-black bg-opacity-50 backdrop-blur-md py-4 text-center">
      <div className="container mx-auto text-gray-400">
        &copy; {new Date().getFullYear()} GameZone. All rights reserved.
      </div>
    </footer>
  );
}
