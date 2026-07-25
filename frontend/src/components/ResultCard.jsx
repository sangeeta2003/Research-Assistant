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
    <div className="mt-8 bg-white rounded-xl shadow-lg p-6 border border-gray-200">

      <div className="flex justify-between items-center mb-5">
        <h2 className="text-2xl font-bold text-gray-800">
          AI Response
        </h2>

        <button
          onClick={copyToClipboard}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition"
        >
          {copied ? "Copied ✓" : "Copy"}
        </button>
      </div>

      <div className="bg-gray-100 rounded-lg p-5 whitespace-pre-wrap leading-8 text-gray-700">
        {result}
      </div>

    </div>
  );
};

export default ResultCard;