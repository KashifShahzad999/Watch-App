import { useEffect, useState } from 'react';

function App() {
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString();
      const formattedTime = now.toLocaleTimeString();
      setDateTime(`${formattedDate} • ${formattedTime}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="w-72 h-72 bg-black rounded-full shadow-2xl flex flex-col items-center justify-center text-white border-8 border-gray-800">
        <h1 className="text-2xl font-bold mb-2 tracking-wide">Smart Watch </h1>
        <p className="text-center text-lg">{dateTime}</p>
      </div>
    </div>
  );
}

export default App;
