function Notification({ message, type }) {
    return (
      <div className={`mb-4 px-3 py-2 sm:px-4 sm:py-3 border rounded flex items-center transition-all duration-300 ${
        type === "success"
          ? "bg-green-100 text-green-800 border-green-300"
          : "bg-red-100 text-red-800 border-red-300"
      }`}>
        <span className="mr-2">
          {type === "success" ? "✅" : "❌"}
        </span>
        {message}
      </div>
    );
  }
  export default Notification;