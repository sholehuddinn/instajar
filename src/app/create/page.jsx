"use client";

import { useState } from "react";
import { Camera } from "lucide-react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const page = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [isPreviewVisible, setIsPreviewVisible] = useState(false);
  const [isPosting, setIsPosting] = useState(false);

  const router = useRouter();

  const handleSubmit = async () => {
    setIsPosting(true);

    try {
      const response = await fetch(
        "https://notes-app-rosy-phi.vercel.app/api/notes",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id_user: "anonim",
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

  const handleImageUrlChange = (e) => {
    setImageUrl(e.target.value);
    setIsPreviewVisible(e.target.value !== "");
  };

  return (
    <div className="flex flex-col items-center w-full max-w-xl mx-auto bg-white ">
      {/* Header */}
      <div className="w-full p-4 bg-gradient-to-r from-cyan-500 to-blue-500  text-white flex justify-between items-center rounded-t-lg">
        <div className="flex items-center">
          <Camera className="mr-2" size={24} />
          <h1 className="text-xl font-bold">Buat Postingan Baru</h1>
        </div>
      </div>

      {/* Form */}
      <div className="w-full p-4 border rounded-sm border-gray-300">
        {/* Title Field */}
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

        {/* Content Field */}
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

        {/* Image URL Field */}
        <div className="mb-4">
          <label
            htmlFor="imageUrl"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            URL Gambar
          </label>
          <div className="flex">
            <input
              type="url"
              id="imageUrl"
              value={imageUrl}
              onChange={handleImageUrlChange}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Masukkan URL gambar..."
            />
            <div className="bg-gray-100 px-3 py-2 border border-l-0 border-gray-300 rounded-r-md flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
            </div>
          </div>
        </div>

        {/* Image Preview */}
        {isPreviewVisible && (
          <div className="mb-4">
            <p className="text-sm font-medium text-gray-700 mb-1">
              Preview Gambar
            </p>
            <div className="border border-gray-300 rounded-md p-2 bg-gray-50">
              {imageUrl ? (
                <div className="relative pb-4">
                  <img
                    src={imageUrl}
                    alt="Preview"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/api/placeholder/400/400";
                    }}
                    className="w-full h-64 object-cover rounded"
                  />
                  <div className="mt-2 text-xs text-gray-500 italic">
                    *Jika gambar tidak muncul, periksa kembali URL gambar Anda
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center h-64 bg-gray-200 rounded text-gray-400">
                  <span>Preview gambar akan muncul di sini</span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Submit Button */}
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

export default page;
