"use client";

import React, {useState} from "react";
import Link from "next/link";

export function Header() {
    const [isConnected, setIsConnected] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-2">
                    <span className="text-sm">🇳🇵</span>
                    <span className="text-xl font-bold text-gray-900 font-mono tracking-tighter">Nepal ID</span>
                </Link>
                <nav className="hidden md:flex space-x-8">
                    <Link href="/" className="text-gray-600 hover:text-gray-900 transition">
                        Home
                    </Link>
                    <Link href="/verify" className="text-gray-600 hover:text-gray-900 transition">
                        Verify
                    </Link>
                    <Link href="/dashboard" className="text-gray-600 hover:text-gray-900 transition">
                        Dashboard
                    </Link>
                </nav>
                <button
                    onClick={() => setIsConnected(!isConnected)}
                    className={`md:flex hidden px-4 py-2 rounded-lg font-semibold transition ${
                        isConnected
                            ? "bg-green-600 text-white hover:bg-green-700"
                            : "bg-orange-600 text-white hover:bg-orange-700"
                    }`}
                >
                    {isConnected ? "✓ Connected" : "Connect Wallet"}
                </button>
            </div>
        </header>
    );
}
