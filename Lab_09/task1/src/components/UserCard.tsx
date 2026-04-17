import { memo } from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

interface UserCardProps {
  user: User;
}

export const UserCard = memo(function UserCard({ user }: UserCardProps) {
  console.log("UserCard render");
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </div>
  );
});