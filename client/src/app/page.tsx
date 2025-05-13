"use client";

import { useState } from "react";

export default function Home() {
  const [initiate, setInitiate] = useState<string>("Hello from the client!");

  const handleBackendCall = async () => {
    const response = await fetch("http://localhost:8000/");

    const responseJson = await response.json();

    setInitiate(responseJson.msg);
  };

  return (
    <div className="flex flex-col items-center text-2xl justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div>{initiate}</div>
      <div>
        <button
          className="bg-white text-black rounded-xl p-5"
          onClick={handleBackendCall}
        >
          Connect to server
        </button>
      </div>
    </div>
  );
}
