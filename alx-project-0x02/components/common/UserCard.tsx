// components/common/UserCard.tsx
import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ Name, Email, address }) => {
  return (
    <div style={{ border: "1px solid #ddd", padding: 16, borderRadius: 8, marginBottom: 16 }}>
      <h2 style={{ fontSize: "1.25rem", marginBottom: 8 }}>{Name}</h2>
      <p><strong>Email:</strong> {Email}</p>
      <p><strong>Address:</strong> {address}</p>
    </div>
  );
};

export default UserCard;
