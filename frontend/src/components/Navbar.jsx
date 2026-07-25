const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="bg-white text-blue-700 w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold shadow-md">
            AI
          </div>

          <div>
            <h1 className="text-2xl font-bold text-white">
              Research Assistant
            </h1>
            <p className="text-blue-100 text-sm">
              Powered by Gemini AI
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-4">
          <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm">
            Spring Boot + React
          </span>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;