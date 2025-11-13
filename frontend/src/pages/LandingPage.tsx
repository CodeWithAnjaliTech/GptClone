interface LandingPageProps {
  onStartNewChat: () => void;
}

export const LandingPage = ({ onStartNewChat }: LandingPageProps) => {
  return (
    <div className="flex flex-col items-center justify-center h-full px-4">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          How can I help you today?
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          Ask me anything and I'll provide you with structured data and insights.
        </p>
        <button
          onClick={onStartNewChat}
          className="px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors font-medium text-lg shadow-lg"
        >
          Start New Chat
        </button>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
          <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-colors">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              Try asking about:
            </h3>
            <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
              <li>• Sales data</li>
              <li>• User analytics</li>
              <li>• Product information</li>
              <li>• Revenue reports</li>
            </ul>
          </div>
          <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-colors">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
              Or explore:
            </h3>
            <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
              <li>• Employee directory</li>
              <li>• Order details</li>
              <li>• Any other data</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

