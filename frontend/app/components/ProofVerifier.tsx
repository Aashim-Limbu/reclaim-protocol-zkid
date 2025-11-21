"use client";

import React from "react";
import {Proof} from "@reclaimprotocol/js-sdk";

interface ProofVerifierProps {
    proofs: Proof | Proof[] | null;
    isVerifying: boolean;
    verificationResult: {
        isValid: boolean;
        message: string;
    } | null;
    verificationError: string | null;
    onVerifyProof: () => void;
}

export function ProofVerifier({
    proofs,
    isVerifying,
    verificationResult,
    verificationError,
    onVerifyProof,
}: ProofVerifierProps) {
    if (!proofs) return null;

    return (
        <div className="mb-8">
            <h2 className="text-lg font-semibold text-gray-700 mb-4">Step 2: Verify Proof</h2>
            <button
                onClick={onVerifyProof}
                disabled={isVerifying || !proofs}
                className={`w-full py-3 px-4 rounded font-semibold text-white transition-colors ${
                    isVerifying ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 cursor-pointer"
                }`}
            >
                {isVerifying ? "Verifying..." : "Verify Proof"}
            </button>

            {verificationError && (
                <div className="mt-4 p-3 bg-red-100 text-red-800 rounded border border-red-300">
                    Error: {verificationError}
                </div>
            )}

            {verificationResult && (
                <div
                    className={`mt-4 p-4 rounded border ${
                        verificationResult.isValid
                            ? "bg-green-100 text-green-800 border-green-300"
                            : "bg-red-100 text-red-800 border-red-300"
                    }`}
                >
                    <div className="text-lg font-bold mb-1">
                        {verificationResult.isValid ? "✓ Proof Valid" : "✗ Proof Invalid"}
                    </div>
                    <div>{verificationResult.message}</div>
                </div>
            )}
        </div>
    );
}
