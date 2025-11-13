import { TableView } from './TableView';
import type { Message } from '../types';
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';

interface MessageBubbleProps {
  message: Message;
  onFeedbackChange: (messageId: string, feedback: 'like' | 'dislike' | null) => void;
}

export const MessageBubble = ({ message, onFeedbackChange }: MessageBubbleProps) => {
  const isUser = message.role === 'user';

  const handleFeedback = (feedback: 'like' | 'dislike') => {
    if (message.feedback === feedback) {
      onFeedbackChange(message.id, null);
    } else {
      onFeedbackChange(message.id, feedback);
    }
  };

  if (isUser) {
    return (
      <div className="flex justify-end mb-4">
        <div className="max-w-[80%] lg:max-w-[70%] bg-blue-500 text-white rounded-lg px-4 py-3 shadow-sm">
          <p className="text-sm whitespace-pre-wrap break-words">{message.content}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-start mb-4">
      <div className="max-w-[80%] lg:max-w-[70%] bg-gray-100 dark:bg-gray-800 rounded-lg px-4 py-3 shadow-sm">
        {message.description && (
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-3 whitespace-pre-wrap break-words">
            {message.description}
          </p>
        )}
        {message.tableData && <TableView tableData={message.tableData} />}
        <div className="flex items-center gap-2 mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
          <button
            onClick={() => handleFeedback('like')}
            className={`p-1.5 rounded-md transition-colors ${
              message.feedback === 'like'
                ? 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400'
                : 'hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400'
            }`}
            aria-label="Like this answer"
          >
            <AiOutlineLike className="w-5 h-5" />
          </button>
          <button
            onClick={() => handleFeedback('dislike')}
            className={`p-1.5 rounded-md transition-colors ${
              message.feedback === 'dislike'
                ? 'bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400'
                : 'hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400'
            }`}
            aria-label="Dislike this answer"
          >
            <AiOutlineDislike className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

