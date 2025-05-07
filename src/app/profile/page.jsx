"use client"

import React, { useState, useEffect } from "react";
import { User } from "lucide-react";
import Link from "next/link";
import Post from "@/app/post/[id]/page"

const page = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://notes-app-rosy-phi.vercel.app/api/notes/"
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();


      setData(result.data.notes);
    } catch (error) {
      console.error("Failed to fetch data:", error);
      return null;
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-white text-black font-sans max-w-4xl mx-auto px-4 py-6">
      {/* Profil Header */}
      <div className="flex gap-6 items-start">
        <User
          className="w-24 h-24 rounded-full object-cover border"
          size={24}
        />
        <div className="flex-1 pt-10">
          <p className="font-semibold">Anonim</p>
        </div>
      </div>

      {/* Postingan Grid */}
      <div className="grid grid-cols-3 gap-1 mt-20">
        {data.map((img, i) => (
          <div key={i} className="relative group border-2">
            <img
              src={`https://www.rumahmesin.com/wp-content/uploads/2020/12/Cara-Memelihara-Kambing.jpg`}
              alt={`Post ${i + 1}`}
              className="w-full h-40 object-cover group-hover:brightness-200 transition-all duration-200"
            />
            {/* Hover overlay (opsional) */}
            
            <Link
              href={`/post/${img.id_notes}`}
              className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-sm font-semibold transition-all duration-200"          
              > <Post props={img}/>
              View Post
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
