import React from "react";
import Link from "next/link";

const header = () => {
  return (
    <header className="bg-white border-b border-gray-200 fixed top-0 w-full z-10">
      <div className="container mx-auto px-4 py-2 max-w-3xl flex justify-between items-center">
        <Link href={"/"}>
          <h1 className="font-bold text-xl italic">Instajar</h1>
        </Link>
      </div>
    </header>
  );
};

export default header;
