import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal as TerminalIcon, X, Minus, Square } from 'lucide-react';

type OutputLine = { text: string; type: 'output' | 'error' | 'success' | 'input' };

const COMMANDS: Record<string, () => OutputLine[]> = {
  help: () => [
    { text: 'Available commands:', type: 'success' },
    { text: '  --thesis        Read my core philosophy', type: 'output' },
    { text: '  --impact        View systems re-engineered', type: 'output' },
    { text: '  --shaper        Global Shapers Community', type: 'output' },
    { text: '  --contact       Get in touch', type: 'output' },
    { text: '  clear           Clear terminal output', type: 'output' },
  ],
  '--thesis': () => [
    { text: '> The Core Thesis:', type: 'success' },
    { text: "  Most people build technology for technology's sake.", type: 'output' },
    { text: '  I build to re-engineer flawed systems.', type: 'output' },
    { text: '  [Law] + [Community Leadership] + [AI] = Structural Optimization', type: 'output' },
  ],
  '--impact': () => [
    { text: '> Systems Re-Engineered:', type: 'success' },
    { text: '  [1] Al-Khabir AI: Voice-activated agri-intelligence for farmers', type: 'output' },
    { text: '      🏆 Award: Territorial Impact & Public Utility (Ramadan IA)', type: 'output' },
    { text: '  [2] Umrah Management System: Database schema optimization', type: 'output' },
    { text: '  [3] Atlas Source: Global E-Commerce & SEO Strategy', type: 'output' },
    { text: '  [4] Strategic Portfolio Architecture for sports professionals', type: 'output' },
  ],
  '--shaper': () => [
    { text: '> Community Leadership:', type: 'success' },
    { text: '  [World Economic Forum]', type: 'output' },
    { text: '  • Active Curator for Oujda Hub', type: 'output' },
    { text: '  • Driving dialogue, action, and local socio-economic impact', type: 'output' },
    { text: '  [Les Citoyens Association]', type: 'output' },
    { text: '  • Ambassador for the Oriental Region', type: 'output' },
    { text: '  • Fostering civic engagement and youth empowerment', type: 'output' },
  ],
  '--contact': () => [
    { text: '> Initiate Dialogue:', type: 'success' },
    { text: '  📍 Oujda, Morocco (Global Scope)', type: 'output' },
    { text: '  📧 contact@moussab.com', type: 'output' },
    { text: '  🔗 linkedin.com/in/moussabfatmi', type: 'output' },
  ],
  '--write': () => {
    window.location.href = '/#/m-vault';
    return [{ text: 'Redirecting to secure vault...', type: 'success' }];
  }
};

const WELCOME_LINES: OutputLine[] = [
  { text: '╔══════════════════════════════════════╗', type: 'success' },
  { text: '║     Welcome to the terminal of       ║', type: 'success' },
  { text: '║         Moussab Fatmi v2.0           ║', type: 'success' },
  { text: '╚══════════════════════════════════════╝', type: 'success' },
  { text: "Type 'help' to see available commands.", type: 'output' },
  { text: '', type: 'output' },
];

const TerminalEasterEgg: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [lines, setLines] = useState<OutputLine[]>(WELCOME_LINES);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [lines]);

  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 100);
  }, [isOpen]);

  const handleCommand = useCallback((cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    const inputLine: OutputLine = { text: `$ moussab ${trimmed}`, type: 'input' };

    if (trimmed === 'clear') {
      setLines(WELCOME_LINES);
      return;
    }

    const handler = COMMANDS[trimmed];
    const result: OutputLine[] = handler
      ? handler()
      : [{ text: `Unknown command: "${trimmed}". Type 'help'.`, type: 'error' }];

    setLines((prev) => [...prev, inputLine, ...result, { text: '', type: 'output' }]);
    setHistory((prev) => [trimmed, ...prev]);
    setHistoryIndex(-1);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && input.trim()) {
      handleCommand(input);
      setInput('');
    } else if (e.key === 'ArrowUp') {
      const newIndex = Math.min(historyIndex + 1, history.length - 1);
      setHistoryIndex(newIndex);
      setInput(history[newIndex] || '');
    } else if (e.key === 'ArrowDown') {
      const newIndex = Math.max(historyIndex - 1, -1);
      setHistoryIndex(newIndex);
      setInput(newIndex === -1 ? '' : history[newIndex]);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2 }}
        className="fixed bottom-6 right-6 z-40 bg-gray-900 text-green-400 p-3.5 rounded-xl shadow-2xl hover:bg-gray-800 transition-all duration-200 flex items-center gap-2 group"
        title="Open terminal"
      >
        <TerminalIcon className="w-5 h-5" />
        <span className="text-xs font-mono hidden group-hover:inline-block whitespace-nowrap">
          $ terminal
        </span>
      </motion.button>

      {/* Terminal Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
              onClick={() => setIsOpen(false)}
            />
            {/* Centering wrapper - separate from animated div to avoid transform conflicts */}
            <div
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 50,
                pointerEvents: 'none',
              }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.85, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.85, y: 40 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                style={{
                  width: 'min(700px, calc(100vw - 32px))',
                  height: 'min(500px, calc(100vh - 32px))',
                  pointerEvents: 'auto',
                }}
                className="bg-gray-950 rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-700"
                onClick={(e) => e.stopPropagation()}
              >
              {/* Title Bar */}
              <div className="flex items-center px-4 py-3 bg-gray-800 border-b border-gray-700">
                <div className="flex gap-2 mr-4">
                  <button onClick={() => setIsOpen(false)} className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors" title="Close" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-gray-400 text-xs font-mono mx-auto">moussab@portfolio:~</span>
              </div>

              {/* Output */}
              <div
                className="flex-1 overflow-y-auto p-4 font-mono text-sm cursor-text"
                onClick={() => inputRef.current?.focus()}
              >
                {lines.map((line, i) => (
                  <div
                    key={i}
                    className={`leading-relaxed whitespace-pre-wrap ${
                      line.type === 'error' ? 'text-red-400' :
                      line.type === 'success' ? 'text-green-400' :
                      line.type === 'input' ? 'text-blue-300' :
                      'text-gray-300'
                    }`}
                  >
                    {line.text}
                  </div>
                ))}
                <div ref={bottomRef} />
              </div>

              {/* Input Line */}
              <div className="flex items-center px-4 py-3 border-t border-gray-700 bg-gray-900">
                <span className="text-green-400 font-mono text-sm mr-2">$ moussab</span>
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 bg-transparent text-gray-200 font-mono text-sm outline-none caret-green-400"
                  placeholder="help"
                  spellCheck={false}
                  autoComplete="off"
                />
              </div>
            </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default TerminalEasterEgg;
