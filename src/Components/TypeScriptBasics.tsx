
import React from "react";

// Type alias
type ID = number | string; // Union type (can be number OR string)

//  Interface for a User
interface User {
  id: ID;
  name: string;
  age: number;
  isAdmin?: boolean; // optional property
}

//Props typing with interface
interface UserCardProps {
  user: User;
}

// Functional component with typed props
const UserCard: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div style={{ border: "1px solid gray", margin: "8px", padding: "8px" }}>
      <h3>{user.name}</h3>
      <p>Age: {user.age}</p>
      {/* Conditional rendering using optional property */}
      {user.isAdmin && <p>⭐ Admin User</p>}
    </div>
  );
};

const TypeScriptBasics: React.FC = () => {
  // Array of users with types enforced
  const users: User[] = [
    { id: 1, name: "Harry", age: 25, isAdmin: true },
    { id: "2a", name: "Emma", age: 22 },
  ];

  return (
    <div>
      <h2>TypeScript Essentials Demo</h2>
      {users.map((u) => (
        <UserCard key={u.id.toString()} user={u} />
      ))}
    </div>
  );
};

export default TypeScriptBasics;


