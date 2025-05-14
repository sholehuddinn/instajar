import React from "react";
import { ExternalLink, Star } from "lucide-react";

const projects = [
  {
    name: "Muhammad Fajar",
    nim: "202311420008",
    status: "Selesai",
    profileLink: "https://github.com/mfajarhp",
    websiteLink: "https://my-project.vercel.app",
    imageUrl: "/image/preview1.png",
    review: 4.5,
  },
  {
    name: "Dewi Ayu",
    nim: "202311420009",
    status: "Proses",
    profileLink: "https://github.com/dewiayu",
    websiteLink: "https://dewi-next.vercel.app",
    imageUrl: "/image/preview2.png",
    review: 4.0,
  },
  {
    name: "Dewi Ayu",
    nim: "202311420009",
    status: "Proses",
    profileLink: "https://github.com/dewiayu",
    websiteLink: "https://dewi-next.vercel.app",
    imageUrl: "/image/preview2.png",
    review: 4.0,
  },
  {
    name: "Dewi Ayu",
    nim: "202311420009",
    status: "Proses",
    profileLink: "https://github.com/dewiayu",
    websiteLink: "https://dewi-next.vercel.app",
    imageUrl: "/image/preview2.png",
    review: 4.0,
  },
];

const AllProjectsPage = () => {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#1e293b] py-12 px-6 md:px-20">
      <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center uppercase">Semua Proyek Peserta</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden flex flex-col hover:shadow-xl transition duration-300"
          >
            <div className="overflow-hidden">
              <img
                src={proj.imageUrl}
                alt={`Preview ${proj.name}`}
                className="h-48 w-full object-cover transform hover:scale-105 transition duration-500"
              />
            </div>
            <div className="p-5 flex flex-col justify-between flex-1">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-lg font-bold">{proj.name}</h2>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                    proj.status === "Selesai" ? "bg-green-100 text-green-600" : "bg-yellow-100 text-yellow-600"
                  }`}>
                    {proj.status}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-2">NIM: {proj.nim}</p>

                <div className="space-y-1 mb-3">
                  <a
                    href={proj.websiteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:underline text-sm"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" /> Website
                  </a>
                  <br />
                  <a
                    href={proj.profileLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-purple-600 hover:underline text-sm"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" /> Profile
                  </a>
                </div>
              </div>

              <div className="mt-2 flex items-center text-yellow-500 gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(proj.review) ? "fill-yellow-400" : "stroke-yellow-400"
                    }`}
                  />
                ))}
                <span className="text-sm ml-2 text-gray-500">({proj.review})</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProjectsPage;
