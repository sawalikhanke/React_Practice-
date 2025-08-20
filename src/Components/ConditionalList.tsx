// File: src/ConditionalList.tsx
import React from "react";

// A simple array of users
const users = [
  { id: 1, name: "Harry", active: true },
  { id: 2, name: "Emma", active: false },
  { id: 3, name: "John", active: true },
];

const ConditionalList: React.FC = () => {
  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          // List rendering using .map()
          <li key={user.id}>
            {user.name} - 
            {/* Conditional rendering with ternary operator */}
            {user.active ? "🟢 Active" : "🔴 Inactive"}
          </li>
        ))}
      </ul>

      {/*  Conditional rendering with && */}
      {users.length === 0 && <p>No users available</p>}
    </div>
  );
};

export default ConditionalList;
