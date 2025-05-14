"use client";

import React from "react";
import Link from "next/link";

function Home() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="bg-yellow-400 py-16 px-4 text-center relative overflow-hidden">
        <div className="max-w-5xl mx-auto z-10 relative">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            We &lt;3 people who code
          </h1>
          <p className="text-lg md:text-xl text-gray-800 mb-6 max-w-2xl mx-auto">
            We build products that empower developers and connect them to
            solutions that enable productivity, growth, and discovery.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              href="/for-developers"
              className="bg-white text-orange-600 px-6 py-3 rounded-md font-semibold shadow hover:bg-gray-100"
            >
              For developers
            </Link>
            <Link
              href="/for-businesses"
              className="bg-orange-600 text-white px-6 py-3 rounded-md font-semibold shadow hover:bg-orange-700"
            >
              For businesses
            </Link>
          </div>
        </div>
        {/* You can use images or SVGs here for illustration */}
        <div className="absolute inset-0 opacity-10 bg-center bg-no-repeat bg-contain"
          style={{ backgroundImage: "url('/illustration.png')" }}
        ></div>
      </section>

      {/* Info Section */}
      <section className="py-16 px-6 bg-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          For developers, by developers
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-12">
          Stack Overflow is an <span className="text-orange-600">open community</span> for anyone that codes.
          We help you get answers to your toughest coding questions, share knowledge
          with your coworkers in private, and find your next dream job.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Public Q&A */}
          <div className="bg-gray-50 shadow rounded-lg p-6 hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">Public Q&A</h3>
            <p className="text-gray-600 mb-4">
              Get answers to more than 16.5 million questions and give back by
              sharing your knowledge with others.
            </p>
            <Link
              href="/questions"
              className="text-white bg-indigo-800 px-4 py-2 rounded hover:bg-indigo-900"
            >
              Browse questions
            </Link>
          </div>

          {/* Private Q&A */}
          <div className="bg-gray-50 shadow rounded-lg p-6 hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">Private Q&A</h3>
            <p className="text-gray-600 mb-4">
              Level up with Stack Overflow while you work. Share knowledge privately
              with your coworkers using our flagship Q&A engine.
            </p>
            <Link
              href="/private"
              className="text-white bg-orange-600 px-4 py-2 rounded hover:bg-orange-700"
            >
              Learn more
            </Link>
          </div>

          {/* Browse Jobs */}
          <div className="bg-gray-50 shadow rounded-lg p-6 hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">Browse jobs</h3>
            <p className="text-gray-600 mb-4">
              Find the right job through high quality listings and search by
              technology, stack, location, and more.
            </p>
            <Link
              href="/jobs"
              className="text-white bg-indigo-800 px-4 py-2 rounded hover:bg-indigo-900"
            >
              Find a job
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 text-center">
        <p>&copy; 2025 Pelatihan Next.js. Semua Hak Dilindungi.</p>
      </footer>
    </div>
  );
}

export default Home;
