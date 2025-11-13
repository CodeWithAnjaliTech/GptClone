import { Request, Response } from 'express';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const mockDataPath = join(__dirname, '../data/mockData.json');
const mockData = JSON.parse(readFileSync(mockDataPath, 'utf-8'));

interface ChatRequest {
  question: string;
}

export const askQuestion = async (req: Request, res: Response): Promise<void> => {
  try {
    const { question }: ChatRequest = req.body;

    if (!question || typeof question !== 'string' || question.trim().length === 0) {
      res.status(400).json({ 
        error: 'Question is required and must be a non-empty string' 
      });
      return;
    }

    const questionLower = question.toLowerCase().trim();
    
    let responseData;
    
    if (questionLower.includes('sales') || questionLower.includes('sale')) {
      responseData = mockData.sales;
    } else if (questionLower.includes('user') || questionLower.includes('users')) {
      responseData = mockData.users;
    } else if (questionLower.includes('product') || questionLower.includes('products')) {
      responseData = mockData.products;
    } else if (questionLower.includes('revenue') || questionLower.includes('revenues')) {
      responseData = mockData.revenue;
    } else if (questionLower.includes('employee') || questionLower.includes('employees')) {
      responseData = mockData.employees;
    } else if (questionLower.includes('order') || questionLower.includes('orders')) {
      responseData = mockData.orders;
    } else {
      responseData = mockData.default;
    }

    res.json({
      message: responseData.description,
      tableData: responseData.tableData,
      description: responseData.description
    });
  } catch (error) {
    console.error('Error processing question:', error);
    res.status(500).json({ 
      error: 'Internal server error while processing your question' 
    });
  }
};

