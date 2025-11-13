import type { ChatResponse } from '../types';

const API_BASE_URL = 'http://localhost:4040/api/chat';

export const chatAPI = {
  async askQuestion(question: string): Promise<ChatResponse> {
    try {
      const response = await fetch(`${API_BASE_URL}/ask`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error asking question:', error);
      throw error;
    }
  },
};

