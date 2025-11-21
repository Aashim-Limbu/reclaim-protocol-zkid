"use client";

import React, {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import {useReclaim} from "../hooks/useReclaim";
import {ProofGenerator} from "./ProofGenerator";
import {ProofVerifier} from "./ProofVerifier";

export function VerificationFlow() {
    const {proofs, isLoading, error, startVerification} = useReclaim();
    const [verificationResult, setVerificationResult] = useState<{
        isValid: boolean;
        message: string;
    } | null>(null);
    const [isVerifying, setIsVerifying] = useState(false);
    const [verificationError, setVerificationError] = useState<string | null>(null);
    const [step, setStep] = useState<1 | 2 | 3>(1);

    const handleVerifyProof = async () => {
        if (!proofs) {
            setVerificationError("No proof generated yet. Please generate a proof first.");
            return;
        }

        try {
            setIsVerifying(true);
            setVerificationError(null);
            setVerificationResult(null);

            const response = await fetch("http://localhost:3001/api/verify-proof", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({proof: proofs}),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Failed to verify proof");
            }

            setVerificationResult({
                isValid: data.isValid,
                message: data.message,
            });
            if (data.isValid) {
                setStep(3);
            }
        } catch (err) {
            console.error("Error verifying proof:", err);
            setVerificationError(err instanceof Error ? err.message : "Failed to verify proof");
        } finally {
            setIsVerifying(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Progress Bar */}
                <div className="mb-16">
                    {/* Steps with circles and connectors */}
                    <div className="flex items-center justify-between mb-6">
                        {[1, 2, 3].map((s) => (
                            <React.Fragment key={s}>
                                <div className="flex flex-col items-center">
                                    <div
                                        className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${
                                            s <= step ? "bg-orange-600 text-white" : "bg-gray-300 text-gray-600"
                                        }`}
                                    >
                                        {s}
                                    </div>
                                </div>
                                {s < 3 && (
                                    <div
                                        className={`flex-1 h-1 mx-3 ${s < step ? "bg-orange-600" : "bg-gray-300"}`}
                                    ></div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>

                    {/* Step labels */}
                    <div className="flex justify-between gap-2">
                        <div className="flex-1">
                            <p
                                className={`text-center text-sm font-semibold ${
                                    step >= 1 ? "text-gray-900" : "text-gray-500"
                                }`}
                            >
                                Generate Proof
                            </p>
                        </div>
                        <div className="flex-1">
                            <p
                                className={`text-center text-sm font-semibold ${
                                    step >= 2 ? "text-gray-900" : "text-gray-500"
                                }`}
                            >
                                Verify Identity
                            </p>
                        </div>
                        <div className="flex-1">
                            <p
                                className={`text-center text-sm font-semibold ${
                                    step >= 3 ? "text-gray-900" : "text-gray-500"
                                }`}
                            >
                                Mint NFT
                            </p>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="bg-white rounded-xl shadow-lg p-8">
                    {step === 1 && (
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Generate Your Proof</h2>
                            <p className="text-gray-600 mb-8">
                                Click the button below to start the verification process. You&apos;ll be guided through
                                proving your Nepali citizenship without revealing personal information.
                            </p>
                            <ProofGenerator
                                isLoading={isLoading}
                                error={error}
                                proofs={proofs}
                                onStartVerification={() => {
                                    startVerification();
                                }}
                            />
                            {proofs && (
                                <div className="mt-8 pt-8 border-t">
                                    <button
                                        onClick={() => setStep(2)}
                                        className="w-full px-6 py-3 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition"
                                    >
                                        Continue to Verification →
                                    </button>
                                </div>
                            )}
                        </div>
                    )}

                    {step === 2 && (
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Verify Your Identity</h2>
                            <p className="text-gray-600 mb-8">
                                Submit your proof for verification. This will confirm your identity on the blockchain.
                            </p>
                            <ProofVerifier
                                proofs={proofs}
                                isVerifying={isVerifying}
                                verificationResult={verificationResult}
                                verificationError={verificationError}
                                onVerifyProof={handleVerifyProof}
                            />
                            {verificationResult && !verificationResult.isValid && (
                                <div className="mt-8 pt-8 border-t">
                                    <button
                                        onClick={() => setStep(1)}
                                        className="w-full px-6 py-3 bg-gray-600 text-white rounded-lg font-semibold hover:bg-gray-700 transition"
                                    >
                                        ← Go Back
                                    </button>
                                </div>
                            )}
                        </div>
                    )}

                    {step === 3 && verificationResult?.isValid && (
                        <div className="text-center">
                            <div className="mb-8">
                                <div className="flex w-20 h-20 bg-green-100 rounded-full items-center justify-center text-4xl">
                                    ✓
                                </div>
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-2">Identity Verified!</h2>
                            <p className="text-gray-600 mb-8">
                                Congratulations! Your identity has been verified. You can now mint your exclusive
                                Pashupati NFT.
                            </p>

                            <div className="bg-gray-50 rounded-lg p-6 mb-8">
                                <Image
                                    src="/pashupati.jpg"
                                    alt="Pashupati NFT"
                                    width={300}
                                    height={300}
                                    className="w-full max-w-sm mx-auto rounded-lg mb-4"
                                />
                                <h3 className="text-2xl font-semibold text-gray-900 mb-2">Pashupati NFT</h3>
                                <p className="text-gray-600 mb-6">
                                    Your unique NFT representing verified Nepali citizenship
                                </p>
                            </div>

                            <Link
                                href="/dashboard"
                                className="inline-block px-8 py-3 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition"
                            >
                                Go to Dashboard →
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
