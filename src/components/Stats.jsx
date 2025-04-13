import React from "react";

export default function Stats({ darkMode, appointments, doctors }) {
  const upcoming = appointments.filter(a => new Date(a.start) > new Date()).length;
  return (
    <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className={`p-4 rounded-lg ${darkMode ? "bg-gray-700" : "bg-indigo-50"}`}>
        <h3 className={`text-lg font-semibold mb-2 ${darkMode ? "text-indigo-300" : "text-indigo-700"}`}>Upcoming Appointments</h3>
        <div className="text-sm">{upcoming} scheduled</div>
      </div>
      <div className={`p-4 rounded-lg ${darkMode ? "bg-gray-700" : "bg-indigo-50"}`}>
        <h3 className={`text-lg font-semibold mb-2 ${darkMode ? "text-indigo-300" : "text-indigo-700"}`}>Doctors Available</h3>
        <div className="text-sm">{doctors.length} doctors on staff</div>
      </div>
      <div className={`p-4 rounded-lg ${darkMode ? "bg-gray-700" : "bg-indigo-50"}`}>
        <h3 className={`text-lg font-semibold mb-2 ${darkMode ? "text-indigo-300" : "text-indigo-700"}`}>Office Hours</h3>
        <div className="text-sm">Mon-Fri: 9:00 AM - 5:00 PM</div>
      </div>
    </div>
  );
}
