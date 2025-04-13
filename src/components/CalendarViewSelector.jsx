function CalendarViewSelector({ calendarView, setCalendarView, darkMode }) {
    return (
      <div className="mb-4 md:hidden">
        <div className={`inline-flex rounded-lg overflow-hidden border ${darkMode ? "border-gray-700" : "border-indigo-200"}`}>
          {["day", "week", "month", "agenda"].map((view) => (
            <button
              key={view}
              onClick={() => setCalendarView(view)}
              className={`px-2 py-1 text-xs sm:px-3 sm:py-2 sm:text-sm capitalize transition-all ${
                calendarView === view
                  ? darkMode
                    ? "bg-indigo-600 text-white"
                    : "bg-indigo-500 text-white"
                  : darkMode
                    ? "bg-gray-700 text-gray-300"
                    : "bg-gray-100 text-gray-700"
              }`}
            >
              {view}
            </button>
          ))}
        </div>
      </div>
    );
  }
  export default CalendarViewSelector;