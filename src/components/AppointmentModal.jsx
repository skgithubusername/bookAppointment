import moment from "moment";

function AppointmentModal({ 
  selectedSlot, 
  editAppointment, 
  darkMode, 
  onSave, 
  onDelete, 
  onClose,
  doctors
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = {
      title: form.title.value,
      date: form.date.value,
      time: form.time.value,
      doctor: form.doctor.value,
      patientName: form.patientName.value
    };
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4 animate-fadeIn">
      <div 
        className={`p-4 sm:p-6 rounded-xl w-full max-w-md shadow-2xl animate-scaleIn ${
          darkMode ? "bg-gray-800 text-white" : "bg-white"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className={`text-xl sm:text-2xl font-bold mb-4 sm:mb-5 text-center ${darkMode ? "text-indigo-300" : "text-indigo-700"}`}>
          {editAppointment ? "Edit Appointment" : "Book Appointment"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
          <div>
            <label className={`block text-xs sm:text-sm font-medium mb-1 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
              Patient Name
            </label>
            <input
              type="text"
              name="patientName"
              defaultValue={editAppointment?.patientName || ""}
              placeholder="Patient name"
              required
              className={`p-2 sm:p-3 text-sm border rounded-lg w-full focus:outline-none focus:ring-2 transition-all duration-200 ${
                darkMode 
                  ? "bg-gray-700 border-gray-600 text-white focus:ring-indigo-400" 
                  : "bg-white border-indigo-200 focus:ring-indigo-500"
              }`}
            />
          </div>
          
          <div>
            <label className={`block text-xs sm:text-sm font-medium mb-1 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
              Reason for Visit
            </label>
            <input
              type="text"
              name="title"
              defaultValue={editAppointment?.title || ""}
              placeholder="Brief description"
              required
              className={`p-2 sm:p-3 text-sm border rounded-lg w-full focus:outline-none focus:ring-2 transition-all duration-200 ${
                darkMode 
                  ? "bg-gray-700 border-gray-600 text-white focus:ring-indigo-400" 
                  : "bg-white border-indigo-200 focus:ring-indigo-500"
              }`}
            />
          </div>
          
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div>
              <label className={`block text-xs sm:text-sm font-medium mb-1 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                Date
              </label>
              <input
                type="date"
                name="date"
                defaultValue={moment(selectedSlot?.start).format("YYYY-MM-DD")}
                required
                className={`p-2 sm:p-3 text-sm border rounded-lg w-full focus:outline-none focus:ring-2 transition-all duration-200 ${
                  darkMode 
                    ? "bg-gray-700 border-gray-600 text-white focus:ring-indigo-400" 
                    : "bg-white border-indigo-200 focus:ring-indigo-500"
                }`}
              />
            </div>
            <div>
              <label className={`block text-xs sm:text-sm font-medium mb-1 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                Time
              </label>
              <input
                type="time"
                name="time"
                defaultValue={moment(selectedSlot?.start).format("HH:mm")}
                required
                className={`p-2 sm:p-3 text-sm border rounded-lg w-full focus:outline-none focus:ring-2 transition-all duration-200 ${
                  darkMode 
                    ? "bg-gray-700 border-gray-600 text-white focus:ring-indigo-400" 
                    : "bg-white border-indigo-200 focus:ring-indigo-500"
                }`}
              />
            </div>
          </div>
          
          <div>
            <label className={`block text-xs sm:text-sm font-medium mb-1 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
              Select Doctor
            </label>
            <select
              name="doctor"
              defaultValue={editAppointment?.doctor || ""}
              required
              className={`p-2 sm:p-3 text-sm border rounded-lg w-full focus:outline-none focus:ring-2 transition-all duration-200 ${
                darkMode 
                  ? "bg-gray-700 border-gray-600 text-white focus:ring-indigo-400" 
                  : "bg-white border-indigo-200 focus:ring-indigo-500"
              }`}
            >
              <option value="" disabled>Select a doctor</option>
              {doctors.map((doctor, index) => (
                <option key={index} value={doctor}>
                  Dr. {doctor}
                </option>
              ))}
            </select>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-3 pt-3 sm:pt-4">
            <button
              type="submit"
              className={`w-full sm:flex-1 px-4 py-2 sm:py-3 rounded-lg font-semibold text-sm transition-all duration-200 ${
                darkMode
                  ? "bg-indigo-500 hover:bg-indigo-400 text-white"
                  : "bg-indigo-600 hover:bg-indigo-700 text-white"
              }`}
            >
              {editAppointment ? "Update" : "Book"}
            </button>
            {editAppointment && (
              <button
                type="button"
                onClick={onDelete}
                className="w-full sm:flex-1 px-4 py-2 sm:py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg font-semibold text-sm transition-all duration-200"
              >
                Delete
              </button>
            )}
            <button
              type="button"
              onClick={onClose}
              className={`w-full sm:flex-1 px-4 py-2 sm:py-3 rounded-lg font-semibold text-sm transition-all duration-200 ${
                darkMode
                  ? "bg-gray-600 hover:bg-gray-500 text-white"
                  : "bg-gray-300 hover:bg-gray-400 text-gray-800"
              }`}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AppointmentModal;