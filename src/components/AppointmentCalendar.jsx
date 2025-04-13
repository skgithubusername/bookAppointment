import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

function AppointmentCalendar({ 
  appointments, 
  calendarView, 
  setCalendarView, 
  handleSelectSlot, 
  handleSelectEvent, 
  darkMode 
}) {
  // Custom event component for the calendar
  const EventComponent = ({ event }) => (
    <div className={`p-1 rounded overflow-hidden h-full ${darkMode ? "bg-indigo-700" : "bg-indigo-500"}`}>
      <div className="text-xs font-semibold truncate text-white">
        {event.title}
      </div>
      <div className="text-xs text-white/80 truncate">
        Dr. {event.doctor || "Unassigned"}
      </div>
    </div>
  );

  return (
    <div className={`h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] rounded-xl overflow-hidden border-2 transition-all ${
      darkMode ? "border-indigo-500/30" : "border-indigo-200"
    }`}>
      <Calendar
        localizer={localizer}
        events={appointments}
        startAccessor="start"
        endAccessor="end"
        selectable
        onSelectSlot={handleSelectSlot}
        onSelectEvent={handleSelectEvent}
        components={{
          event: EventComponent
        }}
        defaultView={calendarView}
        view={calendarView}
        onView={setCalendarView}
        style={{ 
          height: "100%", 
          backgroundColor: darkMode ? "#1F2937" : "white", 
          color: darkMode ? "white" : "black" 
        }}
        formats={{
          timeGutterFormat: (date, culture, localizer) =>
            localizer.format(date, 'h:mm A', culture),
          dayFormat: (date, culture, localizer) =>
            localizer.format(date, 'ddd DD', culture),
        }}
        toolbar={{
          view: false,
        }}
      />
    </div>
  );
}

export default AppointmentCalendar;