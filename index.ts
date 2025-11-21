import express from "express";
import cors from "cors";
import getProofRequest from "./utils/reclaim";
import { checkProof } from "./utils/reclaim";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/get-proof-request", async (req, res) => {
  try {
    const proofRequest = await getProofRequest();
    const proofRequestObject = proofRequest.toJsonString();
    res.status(200).json({
      success: true,
      proofRequest: proofRequestObject,
    });
  } catch (error) {
    console.error("Error on creating the proof request: ", error);
    res
      .status(500)
      .json({ error: "Failed to create proof request", message: error });
  }
});

app.post("/api/verify-proof", async (req, res) => {
  try {
    const { proof } = req.body;
    console.log("Proof is Here: ");
    console.log(proof);

    if (!proof) {
      return res.status(400).json({
        success: false,
        error: "Proof is required in request body",
      });
    }

    const isValid = await checkProof(proof);

    res.status(200).json({
      success: true,
      isValid,
      message: isValid ? "Proof is valid" : "Proof is invalid",
    });
  } catch (error) {
    console.error("Error verifying proof: ", error);
    res.status(500).json({
      success: false,
      error: "Failed to verify proof",
      message: error instanceof Error ? error.message : String(error),
    });
  }
});
app.listen(3001, () => {
  console.log("Server running on PORT: 3001");
});
