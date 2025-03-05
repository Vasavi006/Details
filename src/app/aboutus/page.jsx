import Image from "next/image";

export default function About() {
  return (
    <div className="bg-gradient-to-b from-[#DFF6FF] to-[#F8FAFC] min-h-screen py-12">
      <div className="container mx-auto px-6 py-12 text-center">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          We are dedicated to innovation and creativity, providing top-notch
          solutions to help businesses thrive.
        </p>
        <div className="flex flex-wrap justify-center gap-8 mt-8">
          {[
            {
              title: "Our Mission",
              text: "Empowering businesses with cutting-edge technology and design solutions.",
            },
            {
              title: "Our Vision",
              text: "To be a global leader in digital transformation and innovation.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="relative w-80 h-64 p-6 flex flex-col items-center justify-center text-center
                 bg-gradient-to-br from-green-700 via-green-400 to-blue-300  text-gray-800 
                 rounded-[40%_60%_60%_40%] shadow-lg transition-all duration-300 transform 
                 hover:scale-105 hover:shadow-2xl animate-fade-up"
            >
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 px-6">{item.text}</p>
              {/* Abstract Overlay Effect */}
              <div className="absolute inset-0 rounded-[40%_60%_60%_40%] bg-white/10 blur-xl opacity-30"></div>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center mt-8">
  {/* Title */}
  <h2 className="text-3xl font-bold text-gray-800 mb-4 border-b-4 border-green-600 pb-2">
    Our Creative Team
  </h2>

  {/* Styled Image */}
  <div className="relative w-[600px] h-[400px] transform transition-all duration-500 hover:scale-105 hover:rotate-3">
    <img
      src="/About.jpg"
      alt="Teamwork"
      className="w-full h-full object-cover shadow-3xl border-4 border-green-600"
      style={{
        clipPath: "polygon(20% 0%, 80% 0%, 100% 50%, 80% 100%, 20% 100%, 0% 50%)",
        borderRadius: "30px",
        boxShadow: "10px 10px 30px rgba(0, 0, 0, 0.2)",
      }}
    />
  </div>
</div>


      </div>
    </div>
  );
}
