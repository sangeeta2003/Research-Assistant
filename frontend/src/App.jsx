import { useState } from "react";
import Navbar from "./components/Navbar";
import ResearchForm from "./components/ResearchForm";
import ResultCard from "./components/ResultCard";

function App() {
  const [result, setResult] = useState("");

  return (
    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <div className="max-w-5xl mx-auto px-6 py-10">

        <ResearchForm setResult={setResult} />

        {result && <ResultCard result={result} />}

      </div>

    </div>
  );
}

export default App;