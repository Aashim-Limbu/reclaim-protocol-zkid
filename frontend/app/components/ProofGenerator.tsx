import React from "react";
import {Proof} from "@reclaimprotocol/js-sdk";

interface ProofGeneratorProps {
    isLoading: boolean;
    error: string | null;
    proofs: Proof | Proof[] | null;
    onStartVerification: () => void;
}

export function ProofGenerator({isLoading, error, proofs, onStartVerification}: ProofGeneratorProps) {
    return (
        <div className="mb-8">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Step 1: Generate Proof</h2>
            <button
                onClick={onStartVerification}
                disabled={isLoading}
                className={`w-full py-3 px-4 rounded font-semibold text-white transition-colors ${
                    isLoading ? "bg-gray-400 cursor-not-allowed" : "bg-black hover:bg-gray-800 cursor-pointer"
                }`}
            >
                {isLoading ? "Generating Proof..." : "Generate Proof"}
            </button>

            {error && (
                <div className="mt-4 p-3 bg-red-100 text-red-800 rounded border border-red-300">Error: {error}</div>
            )}

            {proofs && (
                <div className="mt-4 p-3 bg-green-100 text-green-800 rounded border border-green-300">
                    ✓ Proof generated successfully!
                </div>
            )}
        </div>
    );
}
