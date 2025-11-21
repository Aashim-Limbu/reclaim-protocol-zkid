"use client";

import React from "react";
import Link from "next/link";

export function LandingPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50">
            {/* Hero Section */}
            <section className="px-4 sm:px-6 lg:px-8 py-20 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                    <div>
                        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                            Verify Your Identity with <span className="text-orange-600">Zero Knowledge</span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-8">
                            Privacy-first verification for Nepali citizens. Prove your identity without revealing
                            personal information.
                        </p>
                        <Link
                            href="/verify"
                            className="inline-block px-8 py-4 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition shadow-lg hover:shadow-xl"
                        >
                            Start Verification
                        </Link>
                    </div>
                    <div className="flex justify-center">
                        <div className="w-full max-w-md h-96 bg-gradient-to-br from-orange-100 to-blue-100 rounded-2xl flex items-center justify-center text-6xl">
                            🇳🇵
                        </div>
                    </div>
                </div>

                {/* Features */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
                    <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
                        <div className="text-3xl mb-4">🔐</div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Privacy Protected</h3>
                        <p className="text-gray-600">Zero-knowledge proofs ensure your personal data stays private</p>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
                        <div className="text-3xl mb-4">⚡</div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Verification</h3>
                        <p className="text-gray-600">Get verified in minutes with our secure verification process</p>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
                        <div className="text-3xl mb-4">🎁</div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Exclusive NFT</h3>
                        <p className="text-gray-600">Mint a unique Pashupati NFT after verification</p>
                    </div>
                </div>

                {/* How It Works */}
                <section className="mt-20">
                    <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">How It Works</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="inline-flex w-16 h-16 bg-orange-100 rounded-full items-center justify-center mb-4 text-2xl font-bold text-orange-600">
                                1
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Generate Proof</h3>
                            <p className="text-gray-600">Create a zero-knowledge proof of your Nepali citizenship</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-full inline-flex items-center justify-center mb-4 text-2xl font-bold text-blue-600">
                                2
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Verify Identity</h3>
                            <p className="text-gray-600">Submit proof for verification on the blockchain</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-100 rounded-full inline-flex items-center justify-center mb-4 text-2xl font-bold text-green-600">
                                3
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Mint NFT</h3>
                            <p className="text-gray-600">Get your exclusive Pashupati NFT as proof of citizenship</p>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    );
}
