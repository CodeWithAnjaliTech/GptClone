export interface TableData {
  headers: string[];
  rows: string[][];
}

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  tableData?: TableData;
  description?: string;
  feedback?: 'like' | 'dislike' | null;
}

export interface ChatResponse {
  message: string;
  tableData: TableData;
  description: string;
}

