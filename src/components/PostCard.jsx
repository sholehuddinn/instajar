import { useState } from "react";

import moment from "moment";

const PostCard = ({ post }) => {
  const time = moment(post.created_at);

  return (
    <div className="bg-white rounded-md shadow mb-4 overflow-hidden">
      <div className="p-3">
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
