import { useEffect, useState } from "react";

export default function Clock() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const key = setInterval(() => {
      setCounter((count) => count + 1);
    }, 1000);

    return () => {
        clearInterval(key);
    }
  }, []);

  return (
    <p className="flex items-center justify-start text-2xl font-semibold">
      {counter} seconds have passed.
    </p>
  );
}
