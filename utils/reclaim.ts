import {
  ReclaimProofRequest,
  verifyProof,
  type Proof,
} from "@reclaimprotocol/js-sdk";
export default async function getProofRequest(): Promise<ReclaimProofRequest> {
  const APP_ID = process.env.APPLICATION_ID;
  const APP_SECRET = process.env.APPLICATION_SECRET!;
  const PROVIDER_ID = process.env.PROVIDER_ID;
  if (!APP_ID || !APP_SECRET || !PROVIDER_ID) {
    throw new Error("Local variable not initialized");
  } else {
    const reclaimProofRequest = await ReclaimProofRequest.init(
      APP_ID,
      APP_SECRET,
      PROVIDER_ID
    );
    return reclaimProofRequest;
  }
}
export async function checkProof(proof: Proof | Proof[]): Promise<boolean> {
  const isValid = await verifyProof(proof);
  return isValid;
}
