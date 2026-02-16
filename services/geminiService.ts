import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { ChatMessage } from '../types';

let chatSession: Chat | null = null;

const SYSTEM_INSTRUCTION = `
You are "CricBot", an enthusiastic and knowledgeable AI assistant for the ICC T20 World Cup 2026. 
The tournament is being co-hosted by India and Sri Lanka.
Your goal is to provide stats, history, match predictions (based on historical data), and explain cricket rules to fans.
Keep responses concise, engaging, and fun. Use emojis where appropriate.
If asked about live scores, explain that you have knowledge up to your training cutoff but can analyze the game situation if the user provides context.
`;

export const getGeminiChatResponse = async (
  message: string,
  history: ChatMessage[]
): Promise<string> => {
  try {
    if (!process.env.API_KEY) {
      return "I'm sorry, my connection to the stadium (API Key) is missing. Please check the configuration.";
    }

    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

    if (!chatSession) {
      chatSession = ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
        },
      });
    }

    const result: GenerateContentResponse = await chatSession.sendMessage({
        message: message
    });

    return result.text || "I couldn't catch that delivery. Could you ask again?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Looks like rain stopped play (Network Error). Please try again later.";
  }
};