import { useEffect, useState } from "react";

export default function Footer() {
  const [systemInfo, setSystemInfo] = useState({
    userAgent: "",
    platform: ""
  });

  useEffect(() => {
    const info = {
      userAgent: navigator.userAgent,
      platform: navigator.platform
    };

    localStorage.setItem("systemInfo", JSON.stringify(info));

    const savedInfo = JSON.parse(localStorage.getItem("systemInfo"));

    setSystemInfo(savedInfo);
  }, []);

  return (
    <div className="border-t border-black mt-16 pt-6 text-xs text-black/60">
      <p>2026</p>
      <p>Platform: {systemInfo.platform}</p>
      <p>Browser: {systemInfo.userAgent}</p>
    </div>
  );
}