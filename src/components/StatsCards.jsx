function StatsCards({ appointments, doctors, darkMode }) {
    const upcomingAppointmentsCount = appointments.filter(a => new Date(a.start) > new Date()).length;
    
    return (
      <div className="mt-4 sm:mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
        <div className={`p-3 sm:p-4 rounded-lg ${darkMode ? "bg-gray-700" : "bg-indigo-50"}`}>
          <h3 className={`text-base sm:text-lg font-semibold mb-1 sm:mb-2 ${darkMode ? "text-indigo-300" : "text-indigo-700"}`}>Upcoming Appointments</h3>
          <div className="text-xs sm:text-sm">
            {upcomingAppointmentsCount} scheduled
          </div>
        </div>
        <div className={`p-3 sm:p-4 rounded-lg ${darkMode ? "bg-gray-700" : "bg-indigo-50"}`}>
          <h3 className={`text-base sm:text-lg font-semibold mb-1 sm:mb-2 ${darkMode ? "text-indigo-300" : "text-indigo-700"}`}>Doctors Available</h3>
          <div className="text-xs sm:text-sm">
            {doctors.length} doctors on staff
          </div>
        </div>
        <div className={`p-3 sm:p-4 rounded-lg ${darkMode ? "bg-gray-700" : "bg-indigo-50"}`}>
          <h3 className={`text-base sm:text-lg font-semibold mb-1 sm:mb-2 ${darkMode ? "text-indigo-300" : "text-indigo-700"}`}>Office Hours</h3>
          <div className="text-xs sm:text-sm">
            Mon-Fri: 9:00 AM - 5:00 PM
          </div>
        </div>
      </div>
    );
  }
  
  export default StatsCards;