import React from "react";
import Link from "next/link";
import { Home, PlusSquare, User, GalleryVertical } from "lucide-react";

const Nav = () => {
  return (
    <footer className="fixed bottom-0 w-full bg-white border-t border-gray-200 z-10">
      <div className="flex justify-around items-center py-2 max-w-md mx-auto text-gray-700">
        <Link href="/">
          <div className="flex flex-col items-center">
            <Home size={24} />
            <span className="text-xs">Beranda</span>
          </div>
        </Link>
        <Link href="/create">
          <div className="flex flex-col items-center">
            <PlusSquare size={24} />
            <span className="text-xs">Posting</span>
          </div>
        </Link>
        <Link href="/pokemon">
          <div className="flex flex-col items-center">
            <GalleryVertical size={24} />
            <span className="text-xs">Pokemon</span>
          </div>
        </Link>
        <Link href="/profile">
          <div className="flex flex-col items-center">
            <User size={24} />
            <span className="text-xs">Profil</span>
          </div>
        </Link>
      </div>
    </footer>
  );
};

export default Nav;
