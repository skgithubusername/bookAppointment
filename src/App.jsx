// import { useState } from "react";
// import { Calendar, momentLocalizer } from "react-big-calendar";
// import moment from "moment";
// import "react-big-calendar/lib/css/react-big-calendar.css";

// const localizer = momentLocalizer(moment);

// export default function App() {
//   const [appointments, setAppointments] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [selectedSlot, setSelectedSlot] = useState(null);
//   const [editAppointment, setEditAppointment] = useState(null);
//   const [darkMode, setDarkMode] = useState(false);
//   const [notification, setNotification] = useState("");
//   const [notificationType, setNotificationType] = useState("success");
//   const [calendarView, setCalendarView] = useState(window.innerWidth < 768 ? "day" : "month");

//   // Handle window resize to adjust calendar view
//   useState(() => {
//     const handleResize = () => {
//       setCalendarView(window.innerWidth < 768 ? "day" : "month");
//     };
    
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const handleSelectSlot = (slotInfo) => {
//     // Only allow appointments in the future
//     if (new Date(slotInfo.start) < new Date()) {
//       setNotification("Cannot book appointments in the past");
//       setNotificationType("error");
//       setTimeout(() => setNotification(""), 3000);
//       return;
//     }
    
//     setSelectedSlot(slotInfo);
//     setEditAppointment(null);
//     setShowModal(true);
//   };

//   const handleSelectEvent = (event) => {
//     setSelectedSlot({ start: event.start, end: event.end });
//     setEditAppointment(event);
//     setShowModal(true);
//   };

//   const handleSave = (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const title = form.title.value;
//     const start = new Date(form.date.value + "T" + form.time.value);
//     const end = new Date(start.getTime() + 30 * 60000);
//     const doctor = form.doctor.value;
//     const patientName = form.patientName.value;

//     // Check for appointment conflicts
//     const conflictingAppointment = appointments.find(
//       (appt) => 
//         appt !== editAppointment && 
//         ((start >= appt.start && start < appt.end) || 
//          (end > appt.start && end <= appt.end) ||
//          (start <= appt.start && end >= appt.end))
//     );

//     if (conflictingAppointment) {
//       setNotification("This time slot conflicts with another appointment");
//       setNotificationType("error");
//       setTimeout(() => setNotification(""), 3000);
//       return;
//     }

//     if (editAppointment) {
//       setAppointments(
//         appointments.map((a) =>
//           a === editAppointment ? { ...a, title, start, end, doctor, patientName } : a
//         )
//       );
//       setNotification("Appointment updated successfully!");
//       setNotificationType("success");
//     } else {
//       setAppointments([...appointments, { title, start, end, doctor, patientName }]);
//       setNotification("Appointment booked successfully!");
//       setNotificationType("success");
//     }
    
//     setShowModal(false);
//     setEditAppointment(null);
//     setTimeout(() => setNotification(""), 3000);
//   };

//   const handleDelete = () => {
//     if (editAppointment) {
//       setAppointments(appointments.filter((a) => a !== editAppointment));
//       setNotification("Appointment deleted.");
//       setNotificationType("success");
//     }
//     setShowModal(false);
//     setEditAppointment(null);
//     setTimeout(() => setNotification(""), 3000);
//   };

//   // Custom event component for the calendar
//   const EventComponent = ({ event }) => (
//     <div className={`p-1 rounded overflow-hidden h-full ${darkMode ? "bg-indigo-700" : "bg-indigo-500"}`}>
//       <div className="text-xs font-semibold truncate text-white">
//         {event.title}
//       </div>
//       <div className="text-xs text-white/80 truncate">
//         Dr. {event.doctor || "Unassigned"}
//       </div>
//     </div>
//   );

//   // Doctors list
//   const doctors = [
//     "Smith",
//     "Johnson",
//     "Williams",
//     "Brown",
//     "Jones",
//     "Garcia",
//     "Miller",
//     "Davis"
//   ];

//   return (
//     <div className={
//       `min-h-screen transition-all duration-500 ` +
//       (darkMode
//         ? "bg-gradient-to-br from-gray-900 to-gray-800 text-white"
//         : "bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-800")
//     }>
//       {/* Top wave decoration for light mode */}
//       {!darkMode && (
//         <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
//           <svg 
//             className="relative block w-full h-16" 
//             data-name="Layer 1" 
//             xmlns="http://www.w3.org/2000/svg" 
//             viewBox="0 0 1200 120" 
//             preserveAspectRatio="none"
//           >
//             <path 
//               d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
//               className="fill-indigo-200 opacity-30"
//             ></path>
//           </svg>
//         </div>
//       )}

//       <div className="max-w-6xl mx-auto p-3 sm:p-6">
//         <div className={`rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl p-4 sm:p-8 ${darkMode ? "bg-gray-800 bg-opacity-70" : "bg-white bg-opacity-90"} backdrop-blur-sm transition-all duration-300`}>
//           <div className="flex flex-col sm:flex-row justify-between items-center mb-4 sm:mb-6">
//             <h1 className={`text-2xl sm:text-3xl md:text-4xl font-bold ${darkMode ? "text-indigo-300" : "text-indigo-700"} mb-4 sm:mb-0 flex items-center`}>
//               <span className="mr-2 transform hover:rotate-12 transition-transform duration-300">📅</span> 
//               <span className="relative">
//                 <span className="hidden sm:inline">Doctor </span>Appointment Scheduler
//                 <span className={`absolute -bottom-1 left-0 w-full h-1 rounded ${darkMode ? "bg-indigo-400" : "bg-indigo-300"}`}></span>
//               </span>
//             </h1>
//             <div className="flex space-x-2 sm:space-x-3">
//               <button
//                 onClick={() => setDarkMode(!darkMode)}
//                 className={`px-3 py-2 text-sm sm:px-4 sm:py-2 rounded-lg font-medium transition-all duration-300 flex items-center ${
//                   darkMode 
//                     ? "bg-yellow-400 hover:bg-yellow-300 text-gray-800" 
//                     : "bg-indigo-500 hover:bg-indigo-600 text-white"
//                 }`}
//               >
//                 {darkMode ? "☀️ Light" : "🌙 Dark"}
//               </button>
//               <button
//                 onClick={() => handleSelectSlot({ start: new Date() })}
//                 className={`px-3 py-2 text-sm sm:px-4 sm:py-2 rounded-lg font-medium transition-all duration-300 ${
//                   darkMode 
//                     ? "bg-indigo-500 hover:bg-indigo-400 text-white" 
//                     : "bg-indigo-600 hover:bg-indigo-700 text-white"
//                 }`}
//               >
//                 + <span className="hidden xs:inline">New</span> Appt
//               </button>
//             </div>
//           </div>

//           {/* View selector for mobile */}
//           <div className="mb-4 md:hidden">
//             <div className={`inline-flex rounded-lg overflow-hidden border ${darkMode ? "border-gray-700" : "border-indigo-200"}`}>
//               {["day", "week", "month", "agenda"].map((view) => (
//                 <button
//                   key={view}
//                   onClick={() => setCalendarView(view)}
//                   className={`px-2 py-1 text-xs sm:px-3 sm:py-2 sm:text-sm capitalize transition-all ${
//                     calendarView === view
//                       ? darkMode
//                         ? "bg-indigo-600 text-white"
//                         : "bg-indigo-500 text-white"
//                       : darkMode
//                         ? "bg-gray-700 text-gray-300"
//                         : "bg-gray-100 text-gray-700"
//                   }`}
//                 >
//                   {view}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {notification && (
//             <div className={`mb-4 px-3 py-2 sm:px-4 sm:py-3 border rounded flex items-center transition-all duration-300 ${
//               notificationType === "success"
//                 ? "bg-green-100 text-green-800 border-green-300"
//                 : "bg-red-100 text-red-800 border-red-300"
//             }`}>
//               <span className="mr-2">
//                 {notificationType === "success" ? "✅" : "❌"}
//               </span>
//               {notification}
//             </div>
//           )}

//           <div className={`h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] rounded-xl overflow-hidden border-2 transition-all ${
//             darkMode ? "border-indigo-500/30" : "border-indigo-200"
//           }`}>
//             <Calendar
//               localizer={localizer}
//               events={appointments}
//               startAccessor="start"
//               endAccessor="end"
//               selectable
//               onSelectSlot={handleSelectSlot}
//               onSelectEvent={handleSelectEvent}
//               components={{
//                 event: EventComponent
//               }}
//               defaultView={calendarView}
//               view={calendarView}
//               onView={setCalendarView}
//               style={{ 
//                 height: "100%", 
//                 backgroundColor: darkMode ? "#1F2937" : "white", 
//                 color: darkMode ? "white" : "black" 
//               }}
//               formats={{
//                 timeGutterFormat: (date, culture, localizer) =>
//                   localizer.format(date, 'h:mm A', culture),
//                 dayFormat: (date, culture, localizer) =>
//                   localizer.format(date, 'ddd DD', culture),
//               }}
//               toolbar={{
//                 view: false,
//               }}
//             />
//           </div>
          
//           <div className="mt-4 sm:mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
//             <div className={`p-3 sm:p-4 rounded-lg ${darkMode ? "bg-gray-700" : "bg-indigo-50"}`}>
//               <h3 className={`text-base sm:text-lg font-semibold mb-1 sm:mb-2 ${darkMode ? "text-indigo-300" : "text-indigo-700"}`}>Upcoming Appointments</h3>
//               <div className="text-xs sm:text-sm">
//                 {appointments.filter(a => new Date(a.start) > new Date()).length} scheduled
//               </div>
//             </div>
//             <div className={`p-3 sm:p-4 rounded-lg ${darkMode ? "bg-gray-700" : "bg-indigo-50"}`}>
//               <h3 className={`text-base sm:text-lg font-semibold mb-1 sm:mb-2 ${darkMode ? "text-indigo-300" : "text-indigo-700"}`}>Doctors Available</h3>
//               <div className="text-xs sm:text-sm">
//                 {doctors.length} doctors on staff
//               </div>
//             </div>
//             <div className={`p-3 sm:p-4 rounded-lg ${darkMode ? "bg-gray-700" : "bg-indigo-50"}`}>
//               <h3 className={`text-base sm:text-lg font-semibold mb-1 sm:mb-2 ${darkMode ? "text-indigo-300" : "text-indigo-700"}`}>Office Hours</h3>
//               <div className="text-xs sm:text-sm">
//                 Mon-Fri: 9:00 AM - 5:00 PM
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Modal with animation - fullscreen on mobile */}
//       {showModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4 animate-fadeIn">
//           <div 
//             className={`p-4 sm:p-6 rounded-xl w-full max-w-md shadow-2xl animate-scaleIn ${
//               darkMode ? "bg-gray-800 text-white" : "bg-white"
//             }`}
//             onClick={(e) => e.stopPropagation()}
//           >
//             <h2 className={`text-xl sm:text-2xl font-bold mb-4 sm:mb-5 text-center ${darkMode ? "text-indigo-300" : "text-indigo-700"}`}>
//               {editAppointment ? "Edit Appointment" : "Book Appointment"}
//             </h2>
//             <form onSubmit={handleSave} className="space-y-3 sm:space-y-4">
//               <div>
//                 <label className={`block text-xs sm:text-sm font-medium mb-1 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
//                   Patient Name
//                 </label>
//                 <input
//                   type="text"
//                   name="patientName"
//                   defaultValue={editAppointment?.patientName || ""}
//                   placeholder="Patient name"
//                   required
//                   className={`p-2 sm:p-3 text-sm border rounded-lg w-full focus:outline-none focus:ring-2 transition-all duration-200 ${
//                     darkMode 
//                       ? "bg-gray-700 border-gray-600 text-white focus:ring-indigo-400" 
//                       : "bg-white border-indigo-200 focus:ring-indigo-500"
//                   }`}
//                 />
//               </div>
              
//               <div>
//                 <label className={`block text-xs sm:text-sm font-medium mb-1 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
//                   Reason for Visit
//                 </label>
//                 <input
//                   type="text"
//                   name="title"
//                   defaultValue={editAppointment?.title || ""}
//                   placeholder="Brief description"
//                   required
//                   className={`p-2 sm:p-3 text-sm border rounded-lg w-full focus:outline-none focus:ring-2 transition-all duration-200 ${
//                     darkMode 
//                       ? "bg-gray-700 border-gray-600 text-white focus:ring-indigo-400" 
//                       : "bg-white border-indigo-200 focus:ring-indigo-500"
//                   }`}
//                 />
//               </div>
              
//               <div className="grid grid-cols-2 gap-3 sm:gap-4">
//                 <div>
//                   <label className={`block text-xs sm:text-sm font-medium mb-1 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
//                     Date
//                   </label>
//                   <input
//                     type="date"
//                     name="date"
//                     defaultValue={moment(selectedSlot?.start).format("YYYY-MM-DD")}
//                     required
//                     className={`p-2 sm:p-3 text-sm border rounded-lg w-full focus:outline-none focus:ring-2 transition-all duration-200 ${
//                       darkMode 
//                         ? "bg-gray-700 border-gray-600 text-white focus:ring-indigo-400" 
//                         : "bg-white border-indigo-200 focus:ring-indigo-500"
//                     }`}
//                   />
//                 </div>
//                 <div>
//                   <label className={`block text-xs sm:text-sm font-medium mb-1 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
//                     Time
//                   </label>
//                   <input
//                     type="time"
//                     name="time"
//                     defaultValue={moment(selectedSlot?.start).format("HH:mm")}
//                     required
//                     className={`p-2 sm:p-3 text-sm border rounded-lg w-full focus:outline-none focus:ring-2 transition-all duration-200 ${
//                       darkMode 
//                         ? "bg-gray-700 border-gray-600 text-white focus:ring-indigo-400" 
//                         : "bg-white border-indigo-200 focus:ring-indigo-500"
//                     }`}
//                   />
//                 </div>
//               </div>
              
//               <div>
//                 <label className={`block text-xs sm:text-sm font-medium mb-1 ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
//                   Select Doctor
//                 </label>
//                 <select
//                   name="doctor"
//                   defaultValue={editAppointment?.doctor || ""}
//                   required
//                   className={`p-2 sm:p-3 text-sm border rounded-lg w-full focus:outline-none focus:ring-2 transition-all duration-200 ${
//                     darkMode 
//                       ? "bg-gray-700 border-gray-600 text-white focus:ring-indigo-400" 
//                       : "bg-white border-indigo-200 focus:ring-indigo-500"
//                   }`}
//                 >
//                   <option value="" disabled>Select a doctor</option>
//                   {doctors.map((doctor, index) => (
//                     <option key={index} value={doctor}>
//                       Dr. {doctor}
//                     </option>
//                   ))}
//                 </select>
//               </div>
              
//               <div className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-3 pt-3 sm:pt-4">
//                 <button
//                   type="submit"
//                   className={`w-full sm:flex-1 px-4 py-2 sm:py-3 rounded-lg font-semibold text-sm transition-all duration-200 ${
//                     darkMode
//                       ? "bg-indigo-500 hover:bg-indigo-400 text-white"
//                       : "bg-indigo-600 hover:bg-indigo-700 text-white"
//                   }`}
//                 >
//                   {editAppointment ? "Update" : "Book"}
//                 </button>
//                 {editAppointment && (
//                   <button
//                     type="button"
//                     onClick={handleDelete}
//                     className="w-full sm:flex-1 px-4 py-2 sm:py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg font-semibold text-sm transition-all duration-200"
//                   >
//                     Delete
//                   </button>
//                 )}
//                 <button
//                   type="button"
//                   onClick={() => setShowModal(false)}
//                   className={`w-full sm:flex-1 px-4 py-2 sm:py-3 rounded-lg font-semibold text-sm transition-all duration-200 ${
//                     darkMode
//                       ? "bg-gray-600 hover:bg-gray-500 text-white"
//                       : "bg-gray-300 hover:bg-gray-400 text-gray-800"
//                   }`}
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
      
//       {/* Bottom wave decoration for light mode */}
//       {!darkMode && (
//         <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none transform rotate-180">
//           <svg 
//             className="relative block w-full h-16" 
//             data-name="Layer 1" 
//             xmlns="http://www.w3.org/2000/svg" 
//             viewBox="0 0 1200 120" 
//             preserveAspectRatio="none"
//           >
//             <path 
//               d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
//               className="fill-indigo-200 opacity-30"
//             ></path>
//           </svg>
//         </div>
//       )}
      
//       {/* Add CSS animations */}
//       <style jsx global>{`
//         @keyframes fadeIn {
//           from { opacity: 0; }
//           to { opacity: 1; }
//         }
        
//         @keyframes scaleIn {
//           from { transform: scale(0.95); opacity: 0; }
//           to { transform: scale(1); opacity: 1; }
//         }
        
//         .animate-fadeIn {
//           animation: fadeIn 0.3s ease-out forwards;
//         }
        
//         .animate-scaleIn {
//           animation: scaleIn 0.3s ease-out forwards;
//         }

//         /* Custom breakpoint for extra small screens */
//         @media (min-width: 475px) {
//           .xs\\:inline {
//             display: inline;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }










// App.js - Main component
import { useState, useEffect } from "react";
// import moment from "moment";
import AppointmentCalendar from "./components/AppointmentCalendar";
import AppointmentModal from "./components/AppointmentModal";
import StatsCards from "./components/StatsCards";
import Notification from "./components/Notification";
import TopWave from "./components/TopWave";
import BottomWave from "./components/BottomWave";
import CalendarViewSelector from "./components/CalendarViewSelector";
import Header from "./components/Header";
import { doctors } from "./data/doctors";
// import "./styles/animations.css";

export default function App() {
  const [appointments, setAppointments] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [editAppointment, setEditAppointment] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [notification, setNotification] = useState("");
  const [notificationType, setNotificationType] = useState("success");
  const [calendarView, setCalendarView] = useState(window.innerWidth < 768 ? "day" : "month");

  // Handle window resize to adjust calendar view
  useEffect(() => {
    const handleResize = () => {
      setCalendarView(window.innerWidth < 768 ? "day" : "month");
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSelectSlot = (slotInfo) => {
    // Only allow appointments in the future
    if (new Date(slotInfo.start) < new Date()) {
      showNotification("Cannot book appointments in the past", "error");
      return;
    }
    
    setSelectedSlot(slotInfo);
    setEditAppointment(null);
    setShowModal(true);
  };

  const handleSelectEvent = (event) => {
    setSelectedSlot({ start: event.start, end: event.end });
    setEditAppointment(event);
    setShowModal(true);
  };

  const showNotification = (message, type = "success") => {
    setNotification(message);
    setNotificationType(type);
    setTimeout(() => setNotification(""), 3000);
  };

  const handleSave = (formData) => {
    const { title, date, time, doctor, patientName } = formData;
    const start = new Date(date + "T" + time);
    const end = new Date(start.getTime() + 30 * 60000);

    // Check for appointment conflicts
    const conflictingAppointment = appointments.find(
      (appt) => 
        appt !== editAppointment && 
        ((start >= appt.start && start < appt.end) || 
         (end > appt.start && end <= appt.end) ||
         (start <= appt.start && end >= appt.end))
    );

    if (conflictingAppointment) {
      showNotification("This time slot conflicts with another appointment", "error");
      return;
    }

    if (editAppointment) {
      setAppointments(
        appointments.map((a) =>
          a === editAppointment ? { ...a, title, start, end, doctor, patientName } : a
        )
      );
      showNotification("Appointment updated successfully!");
    } else {
      setAppointments([...appointments, { title, start, end, doctor, patientName }]);
      showNotification("Appointment booked successfully!");
    }
    
    setShowModal(false);
    setEditAppointment(null);
  };

  const handleDelete = () => {
    if (editAppointment) {
      setAppointments(appointments.filter((a) => a !== editAppointment));
      showNotification("Appointment deleted.");
    }
    setShowModal(false);
    setEditAppointment(null);
  };

  const createNewAppointment = () => {
    handleSelectSlot({ start: new Date() });
  };

  return (
    <div className={
      `min-h-screen transition-all duration-500 ` +
      (darkMode
        ? "bg-gradient-to-br from-gray-900 to-gray-800 text-white"
        : "bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-800")
    }>
      {/* Top wave decoration for light mode */}
      {!darkMode && <TopWave />}

      <div className="max-w-6xl mx-auto p-3 sm:p-6">
        <div className={`rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl p-4 sm:p-8 ${darkMode ? "bg-gray-800 bg-opacity-70" : "bg-white bg-opacity-90"} backdrop-blur-sm transition-all duration-300`}>
          <Header 
            darkMode={darkMode} 
            setDarkMode={setDarkMode} 
            createNewAppointment={createNewAppointment}
          />

          {notification && (
            <Notification 
              message={notification} 
              type={notificationType} 
            />
          )}

          {/* View selector for mobile */}
          <CalendarViewSelector 
            calendarView={calendarView}
            setCalendarView={setCalendarView}
            darkMode={darkMode}
          />

          <AppointmentCalendar 
            appointments={appointments}
            calendarView={calendarView}
            setCalendarView={setCalendarView}
            handleSelectSlot={handleSelectSlot}
            handleSelectEvent={handleSelectEvent}
            darkMode={darkMode}
          />
          
          <StatsCards 
            appointments={appointments}
            doctors={doctors}
            darkMode={darkMode}
          />
        </div>
      </div>

      {showModal && (
        <AppointmentModal 
          selectedSlot={selectedSlot}
          editAppointment={editAppointment}
          darkMode={darkMode}
          onSave={handleSave}
          onDelete={handleDelete}
          onClose={() => setShowModal(false)}
          doctors={doctors}
        />
      )}
      
      {/* Bottom wave decoration for light mode */}
      {!darkMode && <BottomWave />}
    </div>
  );
}
