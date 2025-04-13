export function TopWaves() {
    return (
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86..." className="fill-indigo-200 opacity-30"></path>
        </svg>
      </div>
    );
  }
  
  export function BottomWaves() {
    return (
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none transform rotate-180">
        <svg className="relative block w-full h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86..." className="fill-indigo-200 opacity-30"></path>
        </svg>
      </div>
    );
  }