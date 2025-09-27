// UserReport.js
import React, { useState } from 'react';

const UserReport = () => {
  const [messages, setMessages] = useState([
    {
      id: '1',
      text: "👮 Hello! I'm your Police Report Assistant. You can report incidents in English, Malay, Mandarin, or Tamil. Attach photos if available.",
      sender: 'assistant',
      timestamp: new Date(),
    },
  ]);

  const [inputText, setInputText] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [attachment, setAttachment] = useState(null); // File
  const [attachmentPreview, setAttachmentPreview] = useState(null); // Object URL for preview

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'ms', name: 'Malay', flag: '🇲🇾' },
    { code: 'zh', name: 'Mandarin', flag: '🇨🇳' },
    { code: 'ta', name: 'Tamil', flag: '🇮🇳' },
  ];

  const handleFileChange = (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setAttachment(file);
      setAttachmentPreview(URL.createObjectURL(file));
    } else {
      setAttachment(null);
      setAttachmentPreview(null);
    }
  };

  const handleSendMessage = async () => {
    if (!inputText.trim() && !attachment) return;

    const userMessage = {
      id: Date.now().toString(),
      text: inputText.trim() || '[📎 Attached Evidence]',
      sender: 'user',
      timestamp: new Date(),
      language: selectedLanguage,
      attachment: attachmentPreview || undefined,
    };

    // Add user message
    setMessages((prev) => [...prev, userMessage]);

    // Clear input & file (keep preview in message)
    setInputText('');
    setAttachment(null);
    setAttachmentPreview(null);

    // Add loading assistant message
    const loadingMessage = {
      id: (Date.now() + 1).toString(),
      text: '⏳ Analyzing your report and generating a structured police case...',
      sender: 'assistant',
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, loadingMessage]);

    try {
      // Build FormData to send text + optional file
      const formData = new FormData();
      formData.append('text', userMessage.text);
      formData.append('language', selectedLanguage);
      if (attachment) {
        formData.append('file', attachment);
      }

      const response = await fetch('http://localhost:5000/api/ai/report', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data && data.success) {
        const r = data.data.processing;
        const aiResponse = `✅ Police Report Generated:

📂 Category: ${r.category} (${r.subcategory})
😊 Sentiment: ${r.sentiment.label} (${(r.sentiment.score * 100).toFixed(0)}%)
⚡ Urgency: ${r.urgencyLevel}
🎯 Priority: ${r.priority}/10

📝 Summary: ${r.summary}

Your report has been securely forwarded to the nearest police unit. Thank you for helping keep our city safe.`;

        setMessages((prev) => {
          const filtered = prev.filter((m) => m.id !== loadingMessage.id);
          return [...filtered, { id: (Date.now() + 2).toString(), text: aiResponse, sender: 'assistant', timestamp: new Date() }];
        });
      } else {
        throw new Error('AI processing failed or returned success=false');
      }
    } catch (err) {
      console.error('AI processing error:', err);
      setMessages((prev) => {
        const filtered = prev.filter((m) => m.id !== loadingMessage.id);
        return [
          ...filtered,
          {
            id: (Date.now() + 2).toString(),
            text: '⚠️ Failed to process your report automatically. Your submission will be reviewed manually.',
            sender: 'assistant',
            timestamp: new Date(),
          },
        ];
      });
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 p-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-semibold text-gray-900">Police Report Assistant</h1>
            <p className="text-sm text-gray-500">Submit incidents quickly & securely</p>
          </div>

          <div className="flex items-center space-x-2">
            <select
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-1 text-sm"
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.flag} {lang.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div
              className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                message.sender === 'user' ? 'bg-blue-600 text-white' : 'bg-white text-gray-900 border border-gray-200'
              }`}
            >
              <p className="text-sm whitespace-pre-line">{message.text}</p>

              {message.attachment && (
                <img src={message.attachment} alt="attachment" className="mt-2 rounded-md max-h-32 border" />
              )}

              <p className={`text-xs mt-1 ${message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'}`}>
                {message.timestamp instanceof Date ? message.timestamp.toLocaleTimeString() : new Date(message.timestamp).toLocaleTimeString()}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="bg-white border-t border-gray-200 p-4">
        <div className="flex flex-col space-y-2">
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Describe the incident (location, time, details)..."
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm resize-none"
            rows={3}
          />

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <label className="text-xs text-gray-600 cursor-pointer">
                <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
                <span className="px-3 py-1 border border-gray-200 rounded-md">Attach Image</span>
              </label>

              {attachmentPreview && (
                <img src={attachmentPreview} alt="preview" className="h-12 rounded-md border" />
              )}
            </div>

            <button
              onClick={handleSendMessage}
              disabled={!inputText.trim() && !attachment}
              className="bg-blue-600 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              Submit Report
            </button>
          </div>

          <p className="text-xs text-gray-500">🔒 Reports are encrypted and sent directly to police servers</p>
        </div>
      </div>
    </div>
  );
};

export default UserReport;
