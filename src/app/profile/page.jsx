"use client";

import React, { useState, useEffect } from "react";
import { User } from "lucide-react";
import Link from "next/link";
import jwt from "jsonwebtoken";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const Page = () => {
  const [data, setData] = useState([]);
  const [username, setUsername] = useState("");
  const [userId, setUserId] = useState("");

  const router = useRouter();

  const token = localStorage.getItem("TokenInstajar");
  if (!token) {
    router.push("/login");
    Swal.fire("warning", "Silahkan Login Terlebih Dahulu", "warning");
  }

  useEffect(() => {
    if (token) {
      const payload = jwt.decode(token);
      if (payload) {
        setUsername(payload.username);
        setUserId(payload.userId); // atau payload.id_user sesuai isi token
      }
    }
  }, []);

  useEffect(() => {
    if (userId) {
      fetchData();
    }
  }, [userId]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://notes-app-rosy-phi.vercel.app/api/notes"
      );
      const result = await response.json();

      const userNotes = result.data.notes.filter(
        (note) => note.id_user === userId
      );

      setData(userNotes);
      // console.log("Filtered notes:", userNotes);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("TokenInstajar");
    window.location.href = "/login"; // redirect ke halaman login
  };

  return (
    <div className="bg-white text-black font-sans max-w-4xl mx-auto px-4 py-6">
      {/* Profil Header */}
      <div className="flex gap-6 items-start">
        <User className="w-24 h-24 rounded-full border" size={24} />
        <div className="flex-1 pt-10 flex justify-between items-center">
          <p className="font-semibold text-xl">{username}</p>
          <button
            onClick={handleLogout}
            className="ml-4 px-4 py-2 text-sm bg-red-500 text-white rounded hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Postingan Grid */}
      <div className="grid grid-cols-3 gap-4 mt-20">
        {data.map((item, i) => (
          <Link
            key={i}
            href={`/edit-delete/${item._id}`}
            className="p-4 border-2 rounded-md hover:shadow-lg transition"
          >
            <h3 className="font-bold text-lg mb-2">{item.title}</h3>
            <p className="text-sm text-gray-700">{item.content}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Page;
