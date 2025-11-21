"use client";

import React, {useState} from "react";
import Image from "next/image";

interface NFTMinterProps {
    isValid: boolean;
}

export function NFTMinter({isValid}: NFTMinterProps) {
    const [isMinting, setIsMinting] = useState(false);
    const [mintingResult, setMintingResult] = useState<{
        success: boolean;
        tokenId: string;
        txHash: string;
    } | null>(null);

    // if (!isValid) return null;

    const handleMintNFT = async () => {
        try {
            setIsMinting(true);

            // Mock NFT minting - simulating blockchain transaction
            await new Promise((resolve) => setTimeout(resolve, 2000));

            const tokenId = `NEPAL-NFT-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
            const txHash = `0x${Math.random().toString(16).substr(2, 64)}`;

            setMintingResult({
                success: true,
                tokenId: tokenId,
                txHash: txHash,
            });
        } catch (err) {
            console.error("Error minting NFT:", err);
            setMintingResult({
                success: false,
                tokenId: "",
                txHash: "",
            });
        } finally {
            setIsMinting(false);
        }
    };

    return (
        <div className="mb-8">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Step 3: Mint Your Nepal NFT</h2>

            <div className="bg-gray-50 rounded-lg p-6 mb-4">
                <div className="mb-4">
                    <Image
                        src="/pashupati.jpg"
                        alt="Pashupati Nepal NFT"
                        width={400}
                        height={300}
                        className="w-full rounded-lg object-cover"
                    />
                </div>
                <div className="text-center">
                    <p className="text-gray-700 font-semibold mb-2">Pashupati NFT</p>
                    <p className="text-sm text-gray-600">Exclusive NFT for verified Nepali citizens</p>
                </div>
            </div>

            <button
                onClick={handleMintNFT}
                disabled={isMinting || mintingResult?.success}
                className={`w-full py-3 px-4 rounded font-semibold text-white transition-colors ${
                    isMinting || mintingResult?.success
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-green-600 hover:bg-green-700 cursor-pointer"
                }`}
            >
                {isMinting ? "Minting NFT..." : mintingResult?.success ? "NFT Minted! ✓" : "Mint NFT"}
            </button>

            {mintingResult && (
                <div
                    className={`mt-4 p-4 rounded border ${
                        mintingResult.success
                            ? "bg-green-100 text-green-800 border-green-300"
                            : "bg-red-100 text-red-800 border-red-300"
                    }`}
                >
                    {mintingResult.success ? (
                        <div className="space-y-2">
                            <div className="font-bold text-lg">🎉 Minting Successful!</div>
                            <div className="bg-white p-3 rounded text-sm text-gray-700 space-y-1">
                                <div className="flex justify-between">
                                    <span className="font-semibold">Token ID:</span>
                                    <span className="font-mono text-xs">{mintingResult.tokenId}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="font-semibold">TX Hash:</span>
                                    <span className="font-mono text-xs truncate">
                                        {mintingResult.txHash.slice(0, 20)}...
                                    </span>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="font-bold">Failed to mint NFT. Please try again.</div>
                    )}
                </div>
            )}
        </div>
    );
}
