import { useState } from "react";
import api from "../services/api";

const ResearchForm = ({ setResult }) => {
  const [content, setContent] = useState("");
  const [operation, setOperation] = useState("summarize");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!content.trim()) {
      alert("Please enter some text.");
      return;
    }

    try {
      setLoading(true);

      const response = await api.post("/research/process", {
        content,
        operation,
      });

      setResult(response.data);
    } catch (error) {
      console.error(error);

      if (error.response) {
        setResult(error.response.data);
      } else {
        setResult("Unable to connect to backend.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">

      <h2 className="text-4xl font-bold text-white text-center mb-2">
        🤖 AI Research Assistant
      </h2>

      <p className="text-center text-gray-300 mb-8">
        Summarize research papers or generate AI-powered topic suggestions.
      </p>

      <textarea
        rows={10}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Paste your research article, paper, or notes here..."
        className="w-full bg-black/40 border border-cyan-500/30 rounded-xl p-5 text-white placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-cyan-400"
      />

      <div className="flex justify-center gap-5 mt-6">

        <button
          type="button"
          onClick={() => setOperation("summarize")}
          className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
            operation === "summarize"
              ? "bg-cyan-500 text-white shadow-lg"
              : "bg-gray-800 text-gray-300 hover:bg-gray-700"
          }`}
        >
          📝 Summarize
        </button>

        <button
          type="button"
          onClick={() => setOperation("suggest")}
          className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
            operation === "suggest"
              ? "bg-purple-600 text-white shadow-lg"
              : "bg-gray-800 text-gray-300 hover:bg-gray-700"
          }`}
        >
          💡 Suggest Topics
        </button>

      </div>

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="mt-8 w-full py-4 rounded-xl font-bold text-lg bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:scale-[1.02] transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? (
          <div className="flex items-center justify-center gap-3">
            <svg
              className="animate-spin h-6 w-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-20"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-100"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              />
            </svg>

            Gemini AI is analysing...
          </div>
        ) : (
          "🚀 Generate AI Response"
        )}
      </button>

    </div>
  );
};

export default ResearchForm;