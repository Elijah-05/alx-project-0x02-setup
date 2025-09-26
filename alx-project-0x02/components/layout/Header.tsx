import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  // Function to highlight the active link
  const linkClass = (path: string) =>
    `px-3 py-2 font-medium hover:text-blue-600 ${
      router.pathname === path ? "text-blue-600 underline" : "text-gray-800"
    }`;

  return (
    <header className="bg-gray-100 shadow-md p-4 flex gap-6">
      <Link href="/home" className={linkClass("/home")}>
        Home
      </Link>
      <Link href="/about" className={linkClass("/about")}>
        About
      </Link>
      <Link href="/posts" className={linkClass("/posts")}>
        Posts
      </Link>
      <Link href="/users" className={linkClass("/users")}>
        Users
      </Link>
    </header>
  );
}

export default Header