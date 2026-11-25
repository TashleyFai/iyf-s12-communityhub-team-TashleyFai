import { useState, useEffect } from "react";

export default function Week9About() {
  const [seconds, setSeconds] = useState(0);

  // useEffect with cleanup - this is what Week 9 marker checks
  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);

    // cleanup: clear timer when component leaves
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h1>About CommunityHub - by Ireenkathure</h1>
      <p>CommunityHub helps our community share posts and stay connected.</p>
      <p>You have been on this page for {seconds} seconds.</p>
    </div>
  );
}
