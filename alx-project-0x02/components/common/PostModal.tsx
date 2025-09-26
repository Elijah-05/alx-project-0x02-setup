import { PostModalProps } from "@/interfaces";
import React, { useState } from "react";

export default function PostModal({ isOpen, onClose, onSubmit }: PostModalProps) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  if (!isOpen) return null; // Don’t render when closed

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;
    onSubmit({ title, content });
    setTitle("");
    setContent("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
        <button
          className="absolute top-2 right-3 text-gray-500 hover:text-gray-700 text-xl"
          onClick={onClose}
          aria-label="Close modal"
        >
          ×
        </button>

        <h2 className="text-2xl font-semibold mb-4">Create a Post</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full border rounded px-3 py-2 h-28 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Add Post
          </button>
        </form>
      </div>
    </div>
  );
}
