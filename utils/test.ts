function decodeBase64(base64Str: string, asUtf8: boolean = false): string {
  try {
    // Decode base64 string to Buffer
    const buffer = Buffer.from(base64Str, "base64");

    // Convert buffer to string (UTF-8 or Latin1)
    const encoding = asUtf8 ? "utf8" : "latin1";
    return buffer.toString(encoding);
  } catch (error) {
    throw new Error(
      `Failed to decode base64 string: ${
        error instanceof Error ? error.message : "Unknown error"
      }`
    );
  }
}

// Export for use in other modules
export { decodeBase64 };

const result = decodeBase64("", false);
console.log(result);
