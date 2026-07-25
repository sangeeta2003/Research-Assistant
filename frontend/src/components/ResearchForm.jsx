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
    <div className="bg-white shadow-lg rounded-xl p-6">

      <h2 className="text-2xl font-bold text-gray-800 mb-5">
        AI Research Assistant
      </h2>

      <textarea
        rows={10}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Paste your article or research text here..."
        className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
      />

      <div className="flex gap-6 mt-5">

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            value="summarize"
            checked={operation === "summarize"}
            onChange={(e) => setOperation(e.target.value)}
          />
          Summarize
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            value="suggest"
            checked={operation === "suggest"}
            onChange={(e) => setOperation(e.target.value)}
          />
          Suggest Topics
        </label>

      </div>

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition duration-300 disabled:bg-gray-400"
      >
        {loading ? "Generating..." : "Generate AI Response"}
      </button>

    </div>
  );
};

export default ResearchForm;