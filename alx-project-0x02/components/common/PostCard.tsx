import React from "react";
import { PostCardProps } from "@/interfaces";
 
const PostCard: React.FC<PostCardProps> = ({ title, content, userId }) => (
  <div style={{ border: "1px solid #ccc", padding: 16, marginBottom: 16 }}>
    <h2>{title}</h2>
    <p>{content}</p>
    <small>User ID: {userId}</small>
  </div>
);

export default PostCard;