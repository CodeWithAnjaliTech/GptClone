import { useState } from 'react';
import { SidePanel } from './components/SidePanel';
import { ChatInterface } from './components/ChatInterface';
import { LandingPage } from './pages/LandingPage';
import { ThemeToggle } from './components/ThemeToggle';
import type { Message } from './types';

function App() {
  const [isChatActive, setIsChatActive] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleStartNewChat = () => {
    setIsChatActive(true);
    setMessages([]);
    setIsSidebarOpen(false);
  };

  const handleMessageAdd = (message: Message) => {
    setMessages((prev) => [...prev, message]);
  };

  const handleFeedbackChange = (messageId: string, feedback: 'like' | 'dislike' | null) => {
    setMessages((prev) =>
      prev.map((msg) => (msg.id === messageId ? { ...msg, feedback } : msg))
    );
  };

  return (
    <div className="flex h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <SidePanel
        isOpen={isSidebarOpen}
        onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
        onNewChat={handleStartNewChat}
      />

      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle sidebar"
          >
            <svg
              className="w-6 h-6 text-gray-700 dark:text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
          <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-100 flex-1 text-center lg:text-left lg:ml-4">
            ChatGPT Clone
          </h1>
          <ThemeToggle />
        </header>

        <main className="flex-1 overflow-hidden">
          {!isChatActive ? (
            <LandingPage onStartNewChat={handleStartNewChat} />
          ) : (
            <ChatInterface
              messages={messages}
              onMessageAdd={handleMessageAdd}
              onFeedbackChange={handleFeedbackChange}
            />
          )}
        </main>
      </div>
    </div>
  );
}

export default App;

