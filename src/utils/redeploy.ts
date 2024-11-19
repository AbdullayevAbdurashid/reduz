export async function redeployWebhook() {
  try {
    const response = await fetch(
      "https://api.vercel.com/v1/integrations/deploy/prj_qse5gcNRk2k7Gvs2er8Yetpvo1iy/o4AoDcX4sH",
      {
        method: "POST",
      }
    );

    if (!response.ok) {
      throw new Error(
        `Failed to redeploy: ${response.status} ${response.statusText}`
      );
    }

    return await response.json(); // Assuming the response contains JSON data
  } catch (error) {
    console.error("Error redeploying webhook:", error);
    throw error; // Re-throw the error for upstream handling
  }
}
