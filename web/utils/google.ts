import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { createVertex } from "@ai-sdk/google-vertex";

const google = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY,
});

// const google = createVertex({
//   project: process.env.GOOGLE_PROJECT_ID,
//   location: "us-central1",
//   googleAuthOptions: {
//     credentials: {
//       client_email: process.env.VERTEX_CLIENT_EMAIL,
//       private_key: process.env.VERTEX_PRIVATE_KEY!.replace(/\\n/g, "\n"),
//     },
//   },
// });

const googleModel = "gemini-2.0-flash-exp";

export { google, googleModel };
