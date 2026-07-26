import { useState } from "react";

const ResultCard = ({ result }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(result);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="mt-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-8">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">

        <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
          🤖 AI Response
        </h2>

        <button
          onClick={copyToClipboard}
          className={`px-5 py-2 rounded-xl font-semibold transition-all duration-300 ${
            copied
              ? "bg-green-600 text-white"
              : "bg-gradient-to-r from-emerald-500 to-green-600 text-white hover:scale-105"
          }`}
        >
          {copied ? "✅ Copied" : "📋 Copy"}
        </button>

      </div>

      {/* Response Box */}
      <div className="bg-black/40 border border-cyan-500/20 rounded-2xl p-6 text-gray-200 whitespace-pre-wrap leading-8 shadow-inner">

        {result}

      </div>

    </div>
  );
};

export default ResultCard;