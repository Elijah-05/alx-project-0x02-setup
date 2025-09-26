import React from "react";
import { type UserProps } from "../../interfaces";

export default function UserCard({ name, email, address }: UserProps) {
  return (
    <div className="border rounded-lg shadow-md p-4 bg-white hover:shadow-lg transition-shadow">
      <h2 className="text-xl font-semibold mb-1">{name}</h2>
      <p className="text-gray-700">{email}</p>
      <p className="text-gray-600 mt-2">
        {address.street}, {address.city}
      </p>
    </div>
  );
}
