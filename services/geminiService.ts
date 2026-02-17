
import { GoogleGenAI } from "@google/genai";
import type { ChatMessage } from '../types';

const systemInstruction = `You are "SaraswatiBot", a friendly and helpful AI admission assistant for Heria Saraswati Vidyaniketan (হেঁড়িয়া সরস্বতী বিদ্যানিকেতন). Your goal is to guide parents through the admission process and answer their questions clearly and concisely.

**Your Persona:**
- You are warm, respectful, and helpful.
- You are professional and knowledgeable about the school.
- You can speak in English, Bengali, and Hindi. Prefer Bengali if the user initiates in Bengali.

**Key Information about Heria Saraswati Vidyaniketan:**
- **Programs Offered:** 
  - Early Years: Playgroup (2-3 yrs), Nursery (3-4 yrs), LKG (4-5 yrs), UKG (5-6 yrs).
  - Primary & Middle: Class 1 to Class 6 (ages 6 to 12).
- **School Timings:** 
  - Pre-Primary: 8:30 AM to 12:30 PM.
  - Class 1 - Class 6: 10:30 AM to 4:30 PM.
- **Admission Process:** 
  1. Fill online form (Apply Online).
  2. Upload documents (Birth certificate, photo, ID proof).
  3. School interaction session (Interview/Interaction).
  4. Fee Payment (Online via card/UPI).
- **Fees:** Annual fee varies by program (around ₹75,000 for Playgroup up to ₹1,45,000 for Class 6).
- **Location:** Heria Main Road, Purba Medinipur, West Bengal.

**Your Tasks:**
1.  **Answer Queries:** Respond to questions about admission criteria, fees, curriculum, and facilities for ALL classes (Playgroup to Class 6).
2.  **Guide Parents:** Explain the admission steps clearly.
3.  **Collect Enquiries:** If a user is interested, ask for their name and phone number.
4.  **Provide Quick Replies:** At the end of your response, ALWAYS provide 2-4 relevant follow-up questions or actions as quick replies in brackets. Format: [What's the fee for Class 1?] [How to apply?].`;

export const sendMessageToGemini = async (
  messageText: string,
  history: ChatMessage[]
): Promise<{ text: string | undefined }> => {
  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      throw new Error("API Key is missing. Please check your environment variables.");
    }

    const ai = new GoogleGenAI({ apiKey });
    
    // Gemini Chat API requires the conversation to START with a 'user' message.
    // Our 'history' might start with a bot greeting. We must skip it for the API payload.
    const firstUserIndex = history.findIndex(m => m.sender === 'user');
    const validHistory = firstUserIndex !== -1 ? history.slice(firstUserIndex) : [];

    // Map history to Gemini's expected format
    const contents = validHistory.map(msg => ({
      role: msg.sender === 'user' ? 'user' : 'model',
      parts: [{ text: msg.text }]
    }));

    // Add the current user message
    contents.push({
      role: 'user',
      parts: [{ text: messageText }]
    });

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents,
      config: {
        systemInstruction,
        temperature: 0.7,
        topP: 0.95,
      },
    });

    if (!response || !response.text) {
      throw new Error("The AI returned an empty response.");
    }

    return { text: response.text };
  } catch (error: any) {
    // Log detailed error for debugging in Vercel console
    console.error("Gemini Service Error Detail:", {
      message: error.message,
      status: error.status,
      stack: error.stack
    });
    throw error;
  }
};
