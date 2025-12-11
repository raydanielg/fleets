"use client";

import { useState } from "react";

interface ChatMessage {
  id: number;
  from: "user" | "support";
  text: string;
  time: string;
}

export function SupportChat() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([{
    id: 1,
    from: "support",
    text: "Hello! How can we help you with Fleet today?",
    time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
  }]);

  const toggleOpen = () => setOpen((v) => !v);

  const handleSend = () => {
    if (!input.trim()) return;
    const time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    setMessages((prev) => [
      ...prev,
      { id: prev.length + 1, from: "user", text: input.trim(), time },
    ]);
    setInput("");
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col items-end space-y-3">
      {/* Chat window */}
      {open && (
        <div className="mb-2 w-72 sm:w-80 rounded-2xl border border-slate-200 bg-white shadow-xl shadow-emerald-100/40 animate-chat-pop">
          <div className="flex items-center justify-between rounded-t-2xl bg-emerald-600 px-4 py-2 text-xs text-white">
            <div>
              <p className="font-semibold">Fleet Support</p>
              <p className="text-[11px] text-emerald-100">Typically replies in a few minutes</p>
            </div>
            <button
              type="button"
              onClick={toggleOpen}
              className="ml-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-700/70 text-[10px] hover:bg-emerald-800"
            >
              ✕
            </button>
          </div>

          <div className="flex max-h-64 flex-col space-y-2 overflow-y-auto bg-emerald-50/40 px-3 py-3 text-xs">
            {messages.map((m) => (
              <div key={m.id} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] rounded-2xl px-3 py-2 shadow-sm ${
                    m.from === "user"
                      ? "rounded-br-sm bg-emerald-600 text-white"
                      : "rounded-bl-sm bg-white text-slate-800"
                  }`}
                >
                  <p>{m.text}</p>
                  <p className="mt-1 text-[10px] opacity-60">{m.time}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-slate-200 bg-white px-3 py-2">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Write a message..."
                className="h-8 flex-1 rounded-full border border-slate-200 px-3 text-xs outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
              />
              <button
                type="button"
                onClick={handleSend}
                className="inline-flex h-8 items-center rounded-full bg-emerald-600 px-3 text-[11px] font-medium text-white hover:bg-emerald-700 disabled:opacity-40"
                disabled={!input.trim()}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating bubble */}
      <button
        type="button"
        onClick={toggleOpen}
        className={`relative flex h-12 w-12 items-center justify-center rounded-full bg-emerald-600 text-white shadow-lg shadow-emerald-200 transition-transform hover:bg-emerald-700 ${
          open ? "" : "animate-support-bounce"
        }`}
        aria-label="Open support chat"
      >
        <span className="text-xl">💬</span>
        {!open && (
          <span className="absolute -top-2 -left-3 rounded-full bg-emerald-500 px-2 py-0.5 text-[10px] font-semibold shadow-sm">
            Support
          </span>
        )}
      </button>
    </div>
  );
}
