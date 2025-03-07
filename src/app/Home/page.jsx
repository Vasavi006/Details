"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 to-teal-500 text-white text-center py-20 px-6">
        <h1 className="text-5xl font-bold">Welcome to MySite</h1>
        <p className="mt-4 text-lg">Discover the power of innovation and creativity.</p>
                <button
          className="mt-6 px-6 py-3 bg-white text-teal-600 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition"
          onClick={() => router.push("/get-started")}
        >
          Get Started
        </button>

        <p className="mt-4">
          <Link href="/get-started" className="text-white underline">
            Or click here to get started     
          </Link>
        </p>

        <Image
          src="/HeroImage.jpg"
          alt="Hero Image"
          width={500}
          height={300}
          className="mx-auto mt-8"
        />
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-8 text-center">
        <div className="bg-[#F5E6CA] shadow-md rounded-lg p-6 text-gray-900">
          <h3 className="text-xl font-semibold">Fast Performance</h3>
          <p className="text-gray-600 mt-2">Optimized for speed and efficiency.</p>
        </div>
        <div className="bg-[#F5E6CA] shadow-md rounded-lg p-6 text-gray-900">
          <h3 className="text-xl font-semibold">Responsive Design</h3>
          <p className="text-gray-700 mt-2">Looks great on all devices.</p>
        </div>
        <div className="bg-[#F5E6CA] shadow-md rounded-lg p-6 text-gray-900">
          <h3 className="text-xl font-semibold">Easy Customization</h3>
          <p className="text-gray-600 mt-2">Tailor it to fit your needs.</p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gradient-to-b from-[#E0F2F1] to-white text-center text-gray-900 py-12 px-6">
        <h2 className="text-3xl font-bold">What Our Users Say</h2>
        <p className="mt-4">"This platform transformed the way we work!"</p>
        <p className="mt-2 font-semibold">- Jane Doe</p>
      </section>
    </div>
  );
}
