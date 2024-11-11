import PocketBase from "pocketbase";

// Create PocketBase instance based on environment
const pb = new PocketBase(import.meta.env.PUBLIC_POCKETBASE_URL);

// Optional: Add error handling for connection issues
pb.autoCancellation(false); // Disable auto-cancellation of requests

export { pb };
