"use client";
import PostCard from "@/components/PostCard";
import { useEffect, useState } from "react";
import moment from "moment";

const page = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://notes-app-rosy-phi.vercel.app/api/notes"
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      const sortedData = result.data.notes.sort((a, b) => {
        return moment(b.created_at).isAfter(moment(a.created_at)) ? 1 : -1;
      });

      setData(sortedData);
    } catch (error) {
      console.error("Failed to fetch data:", error);
      return null;
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="container mx-auto px-4 pt-16 pb-16 max-w-md">
        <div className="space-y-4">
          {data.map((post, id) => (
            <PostCard key={id} post={post} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default page;
