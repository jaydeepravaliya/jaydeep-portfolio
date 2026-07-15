import { useState } from "react";
import type { FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Send, Terminal } from "lucide-react";
import { profile } from "../data/portfolio";

type CommandResult = {
  command: string;
  output: string[];
};

const commands: Record<string, string[]> = {
  help: ["Available commands: whoami, show_skills, llm, projects, metrics, contact, clear"],
  whoami: [
    `${profile.name} - ${profile.title}`,
    "Python backend engineer focused on production APIs, automation, cloud operations, and applied LLM systems.",
  ],
  show_skills: [
    "Backend: Python, FastAPI, Django, DRF, REST APIs, microservices.",
    "Automation: AWS, Boto3, Jenkins, GitHub Actions, Docker, Terraform, Power Automate exploration.",
    "LLM track: prompt engineering, RAG concepts, embeddings, evaluation, tool workflows.",
  ],
  llm: [
    "Currently learning how to connect strong backend fundamentals with LLM workflows.",
    "Focus areas: RAG architecture, prompt evaluation, tool calling, API orchestration, and automation agents.",
  ],
  projects: [
    "Featured: Customer360 Sync Lab, Portfolio Command Center, Lead Management API, Inventory Management System.",
    "Signal: practical backend projects with data sync, API design, authentication, and deployment workflows.",
  ],
  metrics: ["Impact: 41% API performance improvement, 50% faster release cycles, 20% AWS cost reduction."],
  contact: [`Email: ${profile.email}`, `LinkedIn: ${profile.linkedin}`],
};

const quickCommands = ["whoami", "show_skills", "llm", "projects"];

export function TerminalCard() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<CommandResult[]>([
    {
      command: "help",
      output: commands.help,
    },
  ]);

  const runCommand = (rawCommand: string) => {
    const command = rawCommand.trim().toLowerCase();

    if (!command) {
      return;
    }

    if (command === "clear") {
      setHistory([]);
      setInput("");
      return;
    }

    setHistory((current) => [
      ...current,
      {
        command,
        output: commands[command] ?? [`Command not found: ${command}`, "Type 'help' to inspect available commands."],
      },
    ]);
    setInput("");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    runCommand(input);
  };

  return (
    <motion.aside
      animate={{ opacity: 1, y: 0 }}
      className="border border-accent/20 bg-panel shadow-glow"
      id="terminal"
      initial={{ opacity: 0, y: 24 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <div className="flex items-center gap-2 text-sm font-semibold text-white">
          <Terminal className="size-4 text-accent" />
          engineer-shell
        </div>
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="size-2 rounded-full bg-red-400" />
          <span className="size-2 rounded-full bg-warning" />
          <span className="size-2 rounded-full bg-success" />
        </div>
      </div>

      <div className="min-h-[21rem] space-y-4 p-4 font-mono text-sm leading-6">
        <AnimatePresence initial={false}>
          {history.map((entry, index) => (
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="space-y-1"
              exit={{ opacity: 0 }}
              initial={{ opacity: 0, y: 10 }}
              key={`${entry.command}-${index}`}
            >
              <p className="text-emerald-300">
                <span className="text-accent">$</span> {entry.command}
              </p>
              {entry.output.map((line) => (
                <p className="text-slate-300" key={line}>
                  {line}
                </p>
              ))}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="border-t border-white/10 p-4">
        <div className="mb-3 flex flex-wrap gap-2">
          {quickCommands.map((command) => (
            <button
              className="focus-ring rounded border border-white/10 bg-white/[0.04] px-2.5 py-1.5 font-mono text-xs text-slate-300 transition hover:border-accent/50 hover:text-white"
              key={command}
              onClick={() => runCommand(command)}
              type="button"
            >
              {command}
            </button>
          ))}
        </div>

        <form className="flex gap-2" onSubmit={handleSubmit}>
          <label className="sr-only" htmlFor="terminal-command">
            Terminal command
          </label>
          <input
            className="focus-ring min-w-0 flex-1 rounded border border-white/10 bg-ink px-3 py-2 font-mono text-sm text-white placeholder:text-slate-500"
            id="terminal-command"
            onChange={(event) => setInput(event.target.value)}
            placeholder="Type whoami or show_skills"
            value={input}
          />
          <button
            className="focus-ring inline-flex size-10 shrink-0 items-center justify-center rounded bg-accent text-ink transition hover:bg-sky-300"
            type="submit"
          >
            <Send className="size-4" />
            <span className="sr-only">Run command</span>
          </button>
        </form>
      </div>
    </motion.aside>
  );
}
