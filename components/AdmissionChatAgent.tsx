
import React, { useState, useRef, useEffect } from 'react';
import type { ChatMessage } from '../types';
import { sendMessageToGemini } from '../services/geminiService';
import ChatIcon from './icons/ChatIcon';
import CloseIcon from './icons/CloseIcon';
import SendIcon from './icons/SendIcon';
import BlossomIcon from './icons/BlossomIcon';

const AdmissionChatAgent: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setIsLoading(true);
      setTimeout(() => {
        setMessages([
          {
            id: Date.now(),
            text: "Hello! I'm BlossomBot, your AI assistant for admissions. How can I help you today? 🌸",
            sender: 'bot',
            quickReplies: ["What's the admission process?", "Tell me about the fees", "What are the school timings?"],
          },
        ]);
        setIsLoading(false);
      }, 1000);
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const parseResponse = (responseText: string): { text: string; quickReplies: string[] } => {
      const quickReplyRegex = /\[([^\]]+)\]/g;
      const quickReplies = [...responseText.matchAll(quickReplyRegex)].map(match => match[1]);
      const text = responseText.replace(quickReplyRegex, '').trim();
      return { text, quickReplies };
  };

  const handleSendMessage = async (messageText: string) => {
    if (!messageText.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now(),
      text: messageText,
      sender: 'user',
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await sendMessageToGemini(messageText, messages);
      if (response && response.text) {
        const { text, quickReplies } = parseResponse(response.text);
        const botMessage: ChatMessage = {
          id: Date.now() + 1,
          text,
          sender: 'bot',
          quickReplies,
        };
        setMessages((prev) => [...prev, botMessage]);
      } else {
         throw new Error("Empty response from API.");
      }
    } catch (error) {
      const errorMessage: ChatMessage = {
        id: Date.now() + 1,
        text: "I'm sorry, I'm having a little trouble connecting right now. Please try again in a moment.",
        sender: 'bot',
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendMessage(inputValue);
  };
  
  const handleQuickReplyClick = (reply: string) => {
    handleSendMessage(reply);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-5 right-5 w-16 h-16 bg-brand-primary text-white rounded-full shadow-lg flex items-center justify-center transform hover:scale-110 transition-transform duration-300 z-50"
        aria-label="Open admission chat"
      >
        {isOpen ? <CloseIcon className="w-8 h-8"/> : <ChatIcon className="w-8 h-8" />}
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-5 w-[90vw] max-w-sm h-[70vh] max-h-[600px] bg-white rounded-2xl shadow-soft flex flex-col overflow-hidden border border-gray-200/50 z-50">
          <header className="p-4 bg-gradient-to-r from-brand-mint to-brand-peach/50 flex items-center justify-between border-b">
            <div className="flex items-center space-x-3">
              <BlossomIcon className="w-8 h-8" />
              <div>
                <h2 className="font-bold text-gray-800 font-poppins">BlossomBot</h2>
                <p className="text-xs text-gray-600">Admission Assistant</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-800">
                <CloseIcon className="w-5 h-5" />
            </button>
          </header>

          <div className="flex-grow p-4 overflow-y-auto bg-gray-50/50">
            <div className="flex flex-col space-y-4">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex items-end gap-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  {msg.sender === 'bot' && <BlossomIcon className="w-6 h-6 flex-shrink-0" />}
                  <div className={`max-w-[80%] p-3 rounded-2xl ${msg.sender === 'user' ? 'bg-brand-primary text-white rounded-br-lg' : 'bg-gray-200 text-gray-800 rounded-bl-lg'}`}>
                    <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
                  </div>
                </div>
              ))}
              {isLoading && (
                 <div className="flex items-end gap-2 justify-start">
                    <BlossomIcon className="w-6 h-6 flex-shrink-0" />
                    <div className="max-w-[80%] p-3 rounded-2xl bg-gray-200 text-gray-800 rounded-bl-lg">
                        <div className="flex items-center space-x-1">
                            <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-75"></span>
                            <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-150"></span>
                            <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-300"></span>
                        </div>
                    </div>
                 </div>
              )}
              <div ref={messagesEndRef} />
            </div>
            {messages.length > 0 && messages[messages.length-1].sender === 'bot' && messages[messages.length-1].quickReplies && !isLoading && (
                <div className="flex flex-wrap gap-2 mt-4 justify-start">
                    {messages[messages.length-1].quickReplies?.map((reply, i) => (
                        <button key={i} onClick={() => handleQuickReplyClick(reply)} className="text-sm text-brand-primary bg-brand-primary/10 px-3 py-1.5 rounded-full hover:bg-brand-primary/20 transition-colors">
                            {reply}
                        </button>
                    ))}
                </div>
            )}
          </div>

          <div className="p-4 border-t bg-white">
            <form onSubmit={handleFormSubmit} className="flex items-center space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask a question..."
                className="w-full px-4 py-2 text-sm border border-gray-300 rounded-full focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary outline-none transition"
                disabled={isLoading}
              />
              <button
                type="submit"
                className="w-10 h-10 flex-shrink-0 bg-brand-primary text-white rounded-full flex items-center justify-center disabled:bg-gray-300 transition-colors"
                disabled={isLoading || !inputValue.trim()}
              >
                <SendIcon className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AdmissionChatAgent;
