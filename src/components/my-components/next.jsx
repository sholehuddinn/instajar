import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const NextButton = ({ title, route }) => {
  

  return (
    <Link
      href={route}
      className="flex items-center gap-2 px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow transition duration-300"
    >
      {title}
      <ArrowRight className="w-5 h-5" />
    </Link>
  );
};

export default NextButton;
