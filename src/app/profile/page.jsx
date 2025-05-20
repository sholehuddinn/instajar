"use client";

import React, { useState, useEffect } from "react";
import { User } from "lucide-react";
import jwt from "jsonwebtoken";
import Swal from "sweetalert2";
import moment from "moment";

const Page = () => {
  const [data, setData] = useState([]);
  const [username, setUsername] = useState("");
  const [userId, setUserId] = useState("");
  const [token, setToken] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("TokenInstajar");
    if (token) {
      const payload = jwt.decode(token);
      if (payload) {
        setUsername(payload.username);
        setUserId(payload.userId);
        setToken(token);
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
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("TokenInstajar");
    window.location.href = "/login";
  };

  const handleEdit = async (id, currentTitle, currentContent) => {
    const { value: formValues } = await Swal.fire({
      title: "Edit Note",
      html:
        `<input id="swal-input1" class="swal2-input" placeholder="Title" value="${currentTitle}">` +
        `<textarea id="swal-input2" class="swal2-textarea" placeholder="Content">${currentContent}</textarea>`,
      focusConfirm: false,
      confirmButtonText: "Simpan",
      preConfirm: () => {
        return {
          title: document.getElementById("swal-input1").value,
          content: document.getElementById("swal-input2").value,
        };
      },
    });

    if (formValues?.title?.trim() && formValues?.content?.trim()) {
      try {
        const response = await fetch(
          `https://notes-app-rosy-phi.vercel.app/api/notes`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
              ...formValues,
              id_notes: id,
              id_user: userId,
            }),
          }
        );

        if (response.ok) {
          Swal.fire("Berhasil!", "Catatan berhasil diubah.", "success");
          fetchData();
        } else {
          Swal.fire("Gagal!", "Gagal mengubah catatan.", "error");
        }
      } catch (error) {
        console.error("Edit error:", error);
        Swal.fire("Error", "Terjadi kesalahan saat edit.", "error");
      }
    } else {
      Swal.fire("Peringatan", "Judul dan isi tidak boleh kosong.", "warning");
    }
  };

  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: "Hapus Catatan?",
      text: "Data yang dihapus tidak dapat dikembalikan.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Ya, hapus!",
      cancelButtonText: "Batal",
    });

    if (confirm.isConfirmed) {
      try {
        const response = await fetch(
          `https://notes-app-rosy-phi.vercel.app/api/notes`,
          {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              id_notes: id,
            }),
          }
        );

        if (response.ok) {
          Swal.fire("Berhasil!", "Catatan dihapus.", "success");
          fetchData();
        } else {
          Swal.fire("Gagal!", "Gagal menghapus catatan.", "error");
        }
      } catch (error) {
        console.error("Delete error:", error);
      }
    }
  };

  return (
    <div className="bg-white text-black font-sans max-w-4xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <User className="w-16 h-16 border rounded-full p-2" />
          <p className="font-semibold text-xl">{username}</p>
        </div>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
        >
          Logout
        </button>
      </div>

      {/* Postingan */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
        {data.map((item, i) => (
          <div
            key={i}
            className="p-4 border-2 rounded-md hover:shadow-lg transition flex flex-col justify-between"
          >
            <div>
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-gray-700">{item.content}</p>
            </div>
            <div className="mt-2 text-xs text-gray-500">
              Updated at {moment(item.updatedAt).format("DD MMM YYYY, HH:mm")}
            </div>
            <div className="flex justify-between mt-4">
              <button
                onClick={() =>
                  handleEdit(item.id_notes, item.title, item.content)
                }
                className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(item.id_notes)}
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
