"use client";

import { useEffect, useState } from "react";
import { Camera } from "lucide-react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import jwt from "jsonwebtoken";

const Page = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isPosting, setIsPosting] = useState(false);
  const [userId, setUserId] = useState("");
  const [token, setToken] = useState("");

  const router = useRouter();

  useEffect(() => {
    const storedToken = localStorage.getItem("TokenInstajar");

    if (!storedToken) {
      Swal.fire("Warning", "Silakan login terlebih dahulu", "warning");
      router.push("/login");
      return;
    }

    const payload = jwt.decode(storedToken);

    setUserId(payload?.userId); // pakai optional chaining
    setToken(storedToken);
  }, []);

  const handleSubmit = async () => {
    if (!token || !userId) {
      Swal.fire("Error", "User belum dikenali. Silakan login ulang.", "error");
      return;
    }

    setIsPosting(true);

    try {
      const response = await fetch(
        "https://notes-app-rosy-phi.vercel.app/api/notes",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            id_user: userId,
            title,
            content,
          }),
        }
      );

      if (!response.ok) {
        Swal.fire({
          icon: "error",
          title: "Gagal",
          text: "Postingan gagal dibuat. Silakan coba lagi.",
        });
      } else {
        Swal.fire({
          icon: "success",
          title: "Berhasil",
          text: "Postingan berhasil dibuat!",
          timer: 2000,
          showConfirmButton: false,
        });
        router.push("/");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Terjadi Kesalahan",
        text: error.message || "Ada yang salah saat memposting.",
      });
    } finally {
      setIsPosting(false);
    }
  };

  return (
    <div className="flex flex-col items-center w-full max-w-xl mx-auto bg-white">
      {/* Header */}
      <div className="w-full p-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white flex justify-between items-center rounded-t-lg">
        <div className="flex items-center">
          <Camera className="mr-2" size={24} />
          <h1 className="text-xl font-bold">Buat Postingan Baru</h1>
        </div>
      </div>

      {/* Form */}
      <div className="w-full p-4 border rounded-sm border-gray-300">
        {/* Title */}
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Judul Postingan
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Masukkan judul postingan..."
          />
        </div>

        {/* Content */}
        <div className="mb-4">
          <label
            htmlFor="content"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Konten
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 min-h-32"
            placeholder="Apa yang ingin Anda bagikan?"
          />
        </div>

        {/* Submit */}
        <button
          onClick={handleSubmit}
          disabled={isPosting}
          className={`w-full py-2 px-4 rounded-md flex items-center justify-center ${
            isPosting
              ? "bg-gray-400"
              : "bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-700 hover:to-blue-600"
          } text-white font-medium transition duration-300`}
        >
          Posting
        </button>
      </div>
    </div>
  );
};

export default Page;
