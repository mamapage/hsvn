
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
  const [hasPulse, setHasPulse] = useState(true);
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
    if (isOpen) setHasPulse(false);
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
    if (!messageText.trim() || isLoading) return;

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
         throw new Error("No text returned from Gemini.");
      }
    } catch (error) {
      console.error("Chat agent error:", error);
      const errorMessage: ChatMessage = {
        id: Date.now() + 1,
        text: "I'm sorry, I'm having a little trouble connecting to my brain right now. Please try again in a few seconds!",
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
    <div className="relative">
      <style>{`
        @keyframes pulse-ring {
          0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(74, 144, 226, 0.7); }
          70% { transform: scale(1); box-shadow: 0 0 0 15px rgba(74, 144, 226, 0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(74, 144, 226, 0); }
        }
        .chat-pulse {
          animation: pulse-ring 2s infinite;
        }
      `}</style>
      
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 w-16 h-16 bg-brand-primary text-white rounded-full shadow-2xl flex items-center justify-center transform active:scale-90 transition-all duration-300 z-[999] ${hasPulse && !isOpen ? 'chat-pulse' : 'hover:scale-110'}`}
        aria-label="Open admission chat"
      >
        {isOpen ? <CloseIcon className="w-8 h-8"/> : <ChatIcon className="w-8 h-8" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-5 left-5 sm:left-auto w-auto sm:w-[400px] h-[70vh] max-h-[600px] bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] flex flex-col overflow-hidden border border-gray-100 z-[999] animate-slide-down origin-bottom-right">
          <header className="p-5 bg-gradient-to-r from-brand-primary to-brand-primary/80 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-inner">
                <BlossomIcon className="w-7 h-7" />
              </div>
              <div>
                <h2 className="font-bold text-white font-poppins leading-none">SaraswatiBot</h2>
                <span className="flex items-center text-[10px] text-brand-mint/90 mt-1 uppercase tracking-widest font-bold">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-1.5 animate-pulse"></span>
                  Always Online
                </span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white transition-colors">
                <CloseIcon className="w-6 h-6" />
            </button>
          </header>

          <div className="flex-grow p-4 overflow-y-auto bg-gray-50/50 flex flex-col space-y-4">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex items-start gap-3 ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                {msg.sender === 'bot' && (
                  <div className="w-7 h-7 bg-white rounded-full border border-gray-100 flex items-center justify-center shadow-sm flex-shrink-0 mt-1">
                    <BlossomIcon className="w-5 h-5" />
                  </div>
                )}
                <div className={`max-w-[85%] p-3.5 shadow-sm ${msg.sender === 'user' ? 'bg-brand-primary text-white rounded-2xl rounded-tr-none' : 'bg-white text-gray-800 rounded-2xl rounded-tl-none border border-gray-100'}`}>
                  <p className="text-[13px] md:text-sm whitespace-pre-wrap leading-relaxed">{msg.text}</p>
                </div>
              </div>
            ))}
            
            {isLoading && (
               <div className="flex items-start gap-3 justify-start">
                  <div className="w-7 h-7 bg-white rounded-full border border-gray-100 flex items-center justify-center shadow-sm flex-shrink-0 mt-1">
                    <BlossomIcon className="w-5 h-5" />
                  </div>
                  <div className="bg-white border border-gray-100 p-3 rounded-2xl rounded-tl-none shadow-sm">
                      <div className="flex items-center space-x-1">
                          <span className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce"></span>
                          <span className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce delay-100"></span>
                          <span className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce delay-200"></span>
                      </div>
                  </div>
               </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {messages.length > 0 && messages[messages.length-1].sender === 'bot' && messages[messages.length-1].quickReplies && !isLoading && (
              <div className="px-4 pb-2 flex flex-wrap gap-2 justify-start">
                  {messages[messages.length-1].quickReplies?.map((reply, i) => (
                      <button 
                        key={i} 
                        onClick={() => handleQuickReplyClick(reply)} 
                        className="text-[12px] font-semibold text-brand-primary bg-white border border-brand-primary/20 px-3 py-2 rounded-full hover:bg-brand-primary/10 transition-all shadow-sm"
                      >
                          {reply}
                      </button>
                  ))}
              </div>
          )}

          <div className="p-4 bg-white border-t border-gray-100">
            <form onSubmit={handleFormSubmit} className="flex items-center space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your question..."
                className="w-full px-5 py-3 text-sm bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-brand-primary/20 outline-none transition-all placeholder:text-gray-400"
                disabled={isLoading}
              />
              <button
                type="submit"
                className="w-12 h-12 flex-shrink-0 bg-brand-primary text-white rounded-2xl flex items-center justify-center disabled:bg-gray-200 transition-all hover:shadow-lg active:scale-95 shadow-soft"
                disabled={isLoading || !inputValue.trim()}
              >
                <SendIcon className="w-5 h-5" />
              </button>
            </form>
            <p className="text-[10px] text-gray-400 text-center mt-3 uppercase tracking-tighter">Powered by Heria Vidyaniketan AI</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdmissionChatAgent;
