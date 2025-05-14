"use client"

import React, { useState } from "react";
import { Send } from "lucide-react";
import Swal from "sweetalert2";

const ProjectForm = () => {
  const [form, setForm] = useState({
    name: "",
    nim: "",
    status: "",
    profileLink: "",
    websiteLink: "",
    imageUrl: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Ganti dengan aksi API post data di sini
    console.log("Submitted:", form);

    Swal.fire({
      icon: "success",
      title: "Berhasil!",
      text: "Data project telah dikirim!",
      confirmButtonColor: "#3085d6",
    });

    // Reset form
    setForm({
      name: "",
      nim: "",
      status: "",
      profileLink: "",
      websiteLink: "",
      imageUrl: "",
      review: "",
    });
  };

  return (
    <div className="min-h-screen bg-[#f9fafb] px-6 md:px-20 py-12">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg border">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center uppercase text-[#1d2533]">
          Kirim Data Project
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold mb-1 text-gray-700">Nama</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1 text-gray-700">NIM</label>
            <input
              type="text"
              name="nim"
              value={form.nim}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1 text-gray-700">Status</label>
            <select
              name="status"
              value={form.status}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Selesai">Pesrta</option>
              <option value="Proses">Panitia</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1 text-gray-700">Link Profile</label>
            <input
              type="url"
              name="profileLink"
              value={form.profileLink}
              onChange={handleChange}
              required
              placeholder="https://github.com/username"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1 text-gray-700">Link Website</label>
            <input
              type="url"
              name="websiteLink"
              value={form.websiteLink}
              onChange={handleChange}
              required
              placeholder="https://nama-project.vercel.app"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1 text-gray-700">URL Gambar Preview</label>
            <input
              type="url"
              name="imageUrl"
              value={form.imageUrl}
              onChange={handleChange}
              required
              placeholder="https://domain.com/image-preview.png"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition"
          >
            <Send className="w-5 h-5" />
            Kirim Data Project
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProjectForm;
