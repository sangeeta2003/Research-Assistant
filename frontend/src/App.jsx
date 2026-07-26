import { useState } from "react";
import Navbar from "./components/Navbar";
import ResearchForm from "./components/ResearchForm";
import ResultCard from "./components/ResultCard";

function App() {
  const [result, setResult] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#020617] via-[#0f172a] to-black">

      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Side - Robot */}
          <div className="flex justify-center">
            <img
              src="https://cdn.dribbble.com/userupload/21940554/file/original-23ec423c7d0ac84e19a533ed2b3d97a6.gif"
              alt="AI Robot"
              className="w-full max-w-xl rounded-3xl"
            />
          </div>

          {/* Right Side - Form */}
          <div>
            <ResearchForm setResult={setResult} />
          </div>

        </div>

        {/* Result */}
        {result && (
          <div className="mt-10">
            <ResultCard result={result} />
          </div>
        )}

      </div>

    </div>
  );
}

export default App;