function Header({ darkMode, setDarkMode, createNewAppointment }) {
    return (
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4 sm:mb-6">
        <h1 className={`text-2xl sm:text-3xl md:text-4xl font-bold ${darkMode ? "text-indigo-300" : "text-indigo-700"} mb-4 sm:mb-0 flex items-center`}>
          <span className="mr-2 transform hover:rotate-12 transition-transform duration-300">📅</span> 
          <span className="relative">
            <span className="hidden sm:inline">Doctor </span>Appointment Scheduler
            <span className={`absolute -bottom-1 left-0 w-full h-1 rounded ${darkMode ? "bg-indigo-400" : "bg-indigo-300"}`}></span>
          </span>
        </h1>
        <div className="flex space-x-2 sm:space-x-3">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`px-3 py-2 text-sm sm:px-4 sm:py-2 rounded-lg font-medium transition-all duration-300 flex items-center ${
              darkMode 
                ? "bg-yellow-400 hover:bg-yellow-300 text-gray-800" 
                : "bg-indigo-500 hover:bg-indigo-600 text-white"
            }`}
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
          <button
            onClick={createNewAppointment}
            className={`px-3 py-2 text-sm sm:px-4 sm:py-2 rounded-lg font-medium transition-all duration-300 ${
              darkMode 
                ? "bg-indigo-500 hover:bg-indigo-400 text-white" 
                : "bg-indigo-600 hover:bg-indigo-700 text-white"
            }`}
          >
            + <span className="hidden xs:inline">New</span> Appt
          </button>
        </div>
      </div>
    );
  }
  export default Header;