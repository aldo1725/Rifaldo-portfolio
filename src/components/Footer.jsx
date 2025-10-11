import React from "react";

export default function Footer() {
  return (
    <footer className="mt-16 border-t">
      <div className="max-w-6xl mx-auto p-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Rifaldo Saputra — Built with React, Vite, Tailwind — Deployed on Vercel
      </div>
    </footer>
  );
}
