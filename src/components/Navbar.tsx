// src/components/Navbar.tsx
"use client";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white shadow-md z-50">
            <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
                <h1 className="text-lg font-bold">My Portfolio</h1>
                <ul className="flex space-x-6">
                    <li>
                        <Link href="/works" className="hover:text-teal-400">
                            Works
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
