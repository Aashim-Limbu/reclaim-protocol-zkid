"use client";

import React, {useState} from "react";
import Image from "next/image";
import Link from "next/link";

export function DashboardPage() {
    const [nfts] = useState([
        {
            id: 1,
            name: "Pashupati NFT",
            image: "/pashupati.jpg",
            tokenId: "NEPAL-NFT-A1B2C3D4",
            mintDate: "2025-11-16",
            txHash: "0x1234567890abcdef",
            rarity: "Legendary",
        },
    ]);

    const [userInfo] = useState({
        verificationStatus: "Verified",
        verificationDate: "2025-11-16",
        totalNFTs: 1,
        walletAddress: "0x742d...5f9a",
    });

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <div className="mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Your Dashboard</h1>
                    <p className="text-xl text-gray-600">Manage your verified identity and NFT collection</p>
                </div>

                {/* Status Card */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                    <div className="bg-white rounded-lg shadow p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-gray-600 text-sm font-medium">Verification Status</p>
                                <p className="text-2xl font-bold text-green-600 mt-2">{userInfo.verificationStatus}</p>
                            </div>
                            <div className="text-3xl">✓</div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow p-6">
                        <div>
                            <p className="text-gray-600 text-sm font-medium">Total NFTs</p>
                            <p className="text-2xl font-bold text-orange-600 mt-2">{userInfo.totalNFTs}</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow p-6">
                        <div>
                            <p className="text-gray-600 text-sm font-medium">Verified On</p>
                            <p className="text-lg font-bold text-gray-900 mt-2">{userInfo.verificationDate}</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow p-6">
                        <div>
                            <p className="text-gray-600 text-sm font-medium">Wallet</p>
                            <p className="text-lg font-bold text-gray-900 mt-2">{userInfo.walletAddress}</p>
                        </div>
                    </div>
                </div>

                {/* NFT Collection */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Your NFT Collection</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {nfts.map((nft) => (
                            <div
                                key={nft.id}
                                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition"
                            >
                                <div className="relative h-64 bg-gray-100">
                                    <Image src={nft.image} alt={nft.name} fill className="object-cover" />
                                    <div className="absolute top-3 right-3 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                        {nft.rarity}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{nft.name}</h3>
                                    <div className="space-y-2 mb-4">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-600">Token ID:</span>
                                            <span className="font-mono text-gray-900">{nft.tokenId}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-600">Mint Date:</span>
                                            <span className="text-gray-900">{nft.mintDate}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-600">TX Hash:</span>
                                            <span className="font-mono text-xs text-gray-900 truncate">
                                                {nft.txHash.slice(0, 14)}...
                                            </span>
                                        </div>
                                    </div>
                                    <button className="w-full px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition font-semibold text-sm">
                                        View on OpenSea
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Actions */}
                <section className="bg-white rounded-lg shadow p-8 text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">What&apos;s Next?</h3>
                    <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                        You&apos;ve successfully verified your identity and minted your Pashupati NFT. Share your
                        achievement with the community!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold">
                            Share on Twitter
                        </button>
                        <Link
                            href="/verify"
                            className="px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition font-semibold"
                        >
                            Verify Another Identity
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
}
