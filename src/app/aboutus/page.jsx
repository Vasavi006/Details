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
        <div className="flex flex-wrap justify-center gap-6 mt-6">
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
      className="relative w-full max-w-xs sm:max-w-sm md:w-80 h-auto min-h-48 md:h-64 p-4 md:p-6 flex flex-col 
                 items-center justify-center text-center bg-gradient-to-br from-green-700 via-green-400 
                 to-blue-300 text-gray-800 rounded-[40%_60%_60%_40%] shadow-lg transition-all 
                 duration-300 transform hover:scale-105 hover:shadow-2xl animate-fade-up"
    >
      <h3 className="text-lg md:text-xl font-semibold">{item.title}</h3>
      <p className="mt-2 px-4 text-sm md:text-base">{item.text}</p>
      {/* Abstract Overlay Effect */}
      <div className="absolute inset-0 rounded-[40%_60%_60%_40%] bg-white/10 blur-xl opacity-30"></div>
    </div>
  ))}
</div>


        <div className="flex flex-col items-center mt-8">
  {/* Title */}
  <h2 className="md:text-3xl  text-lg font-bold text-gray-800 mb-4 border-b-4 border-green-600 pb-2">
    Our Creative Team
  </h2>

  {/* Styled Image */}
  <div className="relative max-w-[90%] sm:w-[800px] md:w-[500px] lg:w-[600px] h-auto transform transition-all duration-500 hover:scale-105 hover:rotate-3 mx-auto">
    <img
      src="/About.jpg"
      alt="Teamwork"
      className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover shadow-3xl border-4 border-green-600"
      style={{
        clipPath: "polygon(20% 0%, 80% 0%, 100% 50%, 80% 100%, 20% 100%, 0% 50%)",
        borderRadius: "20px",
        boxShadow: "10px 10px 30px rgba(0, 0, 0, 0.2)",
      }}
    />
</div>

</div>


      </div>
    </div>
  );
}
