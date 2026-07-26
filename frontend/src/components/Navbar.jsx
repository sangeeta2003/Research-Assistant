const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-black/30 backdrop-blur-xl border-b border-cyan-500/20 shadow-lg">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo & Title */}
        <div className="flex items-center gap-4">

          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 flex items-center justify-center text-white text-xl font-bold shadow-[0_0_20px_rgba(34,211,238,0.6)]">
            🤖
          </div>

          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              AI Research Assistant
            </h1>

            <p className="text-gray-300 text-sm">
              Powered by Google Gemini AI
            </p>
          </div>

        </div>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-4">

          <span className="px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 font-medium backdrop-blur-lg">
            ⚡ Spring Boot
          </span>

          <span className="px-5 py-2 rounded-full bg-purple-500/10 border border-purple-400/30 text-purple-300 font-medium backdrop-blur-lg">
            ⚛ React
          </span>

          <span className="px-5 py-2 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 font-medium backdrop-blur-lg">
            ✨ Gemini AI
          </span>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;