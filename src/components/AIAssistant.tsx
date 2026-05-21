'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Sparkles } from 'lucide-react';

const EASE = [0.22, 1, 0.36, 1] as const;

const SUGGESTIONS = [
  'What backend technologies does he know?',
  'Has he worked with payments or Stripe?',
  'What are his strongest projects?',
  'Is he available for hire?',
];

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

function TypingDots() {
  return (
    <div className="flex items-center gap-1 px-4 py-3">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="block w-1.5 h-1.5 rounded-full bg-white/30"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1, delay: i * 0.18, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
}

export function AIAssistant() {
  const [open, setOpen]           = useState(false);
  const [messages, setMessages]   = useState<Message[]>([]);
  const [input, setInput]         = useState('');
  const [streaming, setStreaming] = useState(false);
  const [showSugg, setShowSugg]   = useState(true);
  const bottomRef   = useRef<HTMLDivElement>(null);
  const inputRef    = useRef<HTMLInputElement>(null);
  const abortRef    = useRef<AbortController | null>(null);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 350);
  }, [open]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, streaming]);

  const send = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || streaming) return;

    setShowSugg(false);
    setInput('');

    const next: Message[] = [...messages, { role: 'user', content: trimmed }];
    setMessages(next);
    setStreaming(true);

    const abort = new AbortController();
    abortRef.current = abort;

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: next }),
        signal: abort.signal,
      });

      if (!res.ok || !res.body) throw new Error('Request failed');

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let reply = '';

      setMessages((prev) => [...prev, { role: 'assistant', content: '' }]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        reply += decoder.decode(value, { stream: true });
        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = { role: 'assistant', content: reply };
          return updated;
        });
      }
    } catch (err) {
      if ((err as Error).name !== 'AbortError') {
        setMessages((prev) => [
          ...prev,
          { role: 'assistant', content: "Sorry, something went wrong. Please try again." },
        ]);
      }
    } finally {
      setStreaming(false);
      abortRef.current = null;
    }
  };

  const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') send(input);
  };

  return (
    <>
      {/* ── Trigger button ──────────────────────────────────────────────────── */}
      <motion.button
        onClick={() => setOpen(true)}
        className="fixed bottom-8 left-8 z-50 flex items-center gap-2.5 bg-black border border-white/15 text-white px-4 py-3 hover:border-white/35 hover:bg-white/5 transition-colors duration-200"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 4.5, duration: 0.6, ease: EASE }}
        aria-label="Open AI Assistant"
      >
        <Sparkles size={13} className="text-white/50" />
        <span
          className="text-[0.6rem] tracking-[0.2em] uppercase font-medium text-white/70"
          style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}
        >
          Ask AI
        </span>
      </motion.button>

      {/* ── Chat panel ──────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => { setOpen(false); abortRef.current?.abort(); }}
            />

            {/* Panel */}
            <motion.div
              className="fixed bottom-0 left-0 sm:bottom-8 sm:left-8 z-[70] w-full sm:w-[420px] flex flex-col"
              style={{
                height: 'min(600px, 85dvh)',
                backgroundColor: '#0d0d0d',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
              initial={{ opacity: 0, y: 32, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.97 }}
              transition={{ duration: 0.4, ease: EASE }}
            >
              {/* Corner accents */}
              <div className="absolute top-0 right-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-px h-10 bg-white/20" />
                <div className="absolute top-0 right-0 w-10 h-px bg-white/20" />
              </div>

              {/* Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/8 shrink-0">
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 flex items-center justify-center border border-white/15">
                    <Sparkles size={10} className="text-white/50" />
                  </div>
                  <div>
                    <p
                      className="text-[0.62rem] font-semibold tracking-[0.15em] uppercase text-white/80"
                      style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}
                    >
                      AI Assistant
                    </p>
                    <p
                      className="text-[0.52rem] tracking-[0.12em] uppercase text-white/25"
                      style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}
                    >
                      Ask anything about Abakwe
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => { setOpen(false); abortRef.current?.abort(); }}
                  className="w-7 h-7 border border-white/10 flex items-center justify-center text-white/30 hover:text-white hover:border-white/30 transition-colors"
                >
                  <X size={12} />
                </button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3 min-h-0">

                {/* Welcome */}
                {messages.length === 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="flex gap-2.5"
                  >
                    <div className="w-6 h-6 shrink-0 border border-white/12 flex items-center justify-center mt-0.5">
                      <Sparkles size={9} className="text-white/40" />
                    </div>
                    <div
                      className="text-white/60 leading-relaxed"
                      style={{ fontFamily: 'Satoshi, system-ui, sans-serif', fontSize: '0.8rem' }}
                    >
                      Hi! I know everything about Abakwe's experience, skills, and projects. Ask me anything.
                    </div>
                  </motion.div>
                )}

                {/* Suggestion chips */}
                {showSugg && messages.length === 0 && (
                  <motion.div
                    className="flex flex-wrap gap-2 mt-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {SUGGESTIONS.map((s) => (
                      <button
                        key={s}
                        onClick={() => send(s)}
                        className="border border-white/10 px-3 py-1.5 text-white/40 hover:text-white/70 hover:border-white/25 transition-colors duration-200"
                        style={{ fontFamily: 'Satoshi, system-ui, sans-serif', fontSize: '0.65rem', letterSpacing: '0.04em' }}
                      >
                        {s}
                      </button>
                    ))}
                  </motion.div>
                )}

                {/* Message thread */}
                {messages.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex gap-2.5 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                  >
                    {msg.role === 'assistant' && (
                      <div className="w-6 h-6 shrink-0 border border-white/12 flex items-center justify-center mt-0.5">
                        <Sparkles size={9} className="text-white/40" />
                      </div>
                    )}
                    <div
                      className={`max-w-[85%] leading-relaxed ${
                        msg.role === 'user'
                          ? 'bg-white/8 border border-white/10 px-3.5 py-2.5 text-white/80'
                          : 'text-white/60'
                      }`}
                      style={{ fontFamily: 'Satoshi, system-ui, sans-serif', fontSize: '0.8rem' }}
                    >
                      {msg.content}
                      {msg.role === 'assistant' && msg.content === '' && <TypingDots />}
                    </div>
                  </motion.div>
                ))}

                <div ref={bottomRef} />
              </div>

              {/* Input */}
              <div className="px-4 py-3 border-t border-white/8 shrink-0">
                <div className="flex items-center gap-2 border border-white/10 focus-within:border-white/25 transition-colors duration-200">
                  <input
                    ref={inputRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKey}
                    placeholder="Ask about skills, projects, availability..."
                    disabled={streaming}
                    className="flex-1 bg-transparent px-4 py-3 text-white/70 placeholder:text-white/18 focus:outline-none text-[0.78rem]"
                    style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}
                  />
                  <button
                    onClick={() => send(input)}
                    disabled={!input.trim() || streaming}
                    className="w-10 h-10 flex items-center justify-center text-white/30 hover:text-white/70 disabled:opacity-30 transition-colors duration-200 shrink-0"
                  >
                    <Send size={13} />
                  </button>
                </div>
                <p
                  className="text-[0.48rem] tracking-[0.14em] uppercase text-white/14 mt-2 text-center"
                  style={{ fontFamily: 'Satoshi, system-ui, sans-serif' }}
                >
                  Powered by Claude AI
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
