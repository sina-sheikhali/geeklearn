import { useState, useEffect } from "react";

export default function LandingCount({ counter }) {
  const [landingCounter, setLandingCounter] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setLandingCounter((prev) => prev + 1);
    }, 1);

    if (landingCounter === counter) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [landingCounter]);

  return <span className="text-4xl text-[#56626E]">{landingCounter}</span>;
}
