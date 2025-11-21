// hooks/useReclaim.js
import {useState, useCallback} from "react";
import {Proof, ReclaimProofRequest} from "@reclaimprotocol/js-sdk";

export function useReclaim() {
    const [proofs, setProofs] = useState<Proof | Proof[] | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const startVerification = useCallback(async () => {
        try {
            setIsLoading(true);
            setError(null);

            console.log("Fetching proof request from backend...");
            const response = await fetch("http://localhost:3001/api/get-proof-request");

            if (!response.ok) {
                throw new Error(`Backend error: ${response.status}`);
            }

            const data = await response.json();
            console.log("Proof request data received:", data);

            if (!data.success) {
                throw new Error(data.error || "Failed to get proof request");
            }

            if (!data.proofRequest) {
                throw new Error("No proofRequest in response");
            }

            console.log("Deserializing proof request...");
            const reclaimProofRequest = await ReclaimProofRequest.fromJsonString(data.proofRequest);
            console.log("Proof request deserialized successfully");

            console.log("Triggering Reclaim flow...");
            await reclaimProofRequest.triggerReclaimFlow();

            console.log("Starting session...");
            await reclaimProofRequest.startSession({
                onSuccess: async (proof: Proof | Proof[] | string | undefined) => {
                    console.log("Session success! Proof received:", proof);
                    if (proof && typeof proof !== "string") {
                        console.log("Setting proofs to state");
                        setProofs(proof);
                    } else {
                        console.warn("Received string or undefined proof:", proof);
                    }
                    setIsLoading(false);
                },
                onError: (err: Error) => {
                    console.error("Error in proof generation: ", err);
                    setIsLoading(false);
                    setError(err.message);
                },
            });
        } catch (err) {
            console.error("Error starting verification session", err);
            setIsLoading(false);
            setError(err instanceof Error ? err.message : "Failed to start Verification. Please try again.");
        }
    }, []);

    return {proofs, isLoading, error, startVerification};
}
