import { useState } from "react";
import Image from "next/image";
import {
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
  MoreHorizontal,
  User,
} from "lucide-react";
import moment from "moment";

const PostCard = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const time = moment(post.created_at);

  return (
    <div className="bg-white rounded-md shadow mb-4 overflow-hidden">
      {/* Header Card */}
      <div className="flex items-center justify-between p-3">
        <div className="flex items-center">
          <div className="h-8 w-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white">
            <User size={16} />
          </div>
          <span className="ml-2 font-semibold text-sm">{post.id_user}</span>
        </div>
        <button>
          <MoreHorizontal size={20} />
        </button>
      </div>

      {/* Gambar Postingan */}
      <div className="w-full h-80 bg-gray-100 relative">
        <Image
          src={post.imageUrl}
          alt="Post content"
          fill
          sizes="(max-width: 768px) 100vw, 600px"
          className="object-cover"
          priority
        />
      </div>

      {/* Action Buttons */}
      <div className="p-3">
        <div className="flex justify-between mb-2">
          <div className="flex space-x-4">
            <button onClick={() => setLiked(!liked)}>
              <Heart
                size={24}
                fill={liked ? "#ed4956" : "none"}
                color={liked ? "#ed4956" : "currentColor"}
              />
            </button>
            <button>
              <MessageCircle size={24} />
            </button>
            <button>
              <Share2 size={24} />
            </button>
          </div>
          <button onClick={() => setSaved(!saved)}>
            <Bookmark size={24} fill={saved ? "black" : "none"} />
          </button>
        </div>

        {/* Caption */}
        <div className="text-sm mb-1">
          <span className="font-semibold mr-1">{post.title}</span>
          <br />
          {post.content}
        </div>

        {/* Timestamp */}
        <div className="text-gray-400 text-xs">{time.calendar()}</div>
      </div>
    </div>
  );
};

export default PostCard;
