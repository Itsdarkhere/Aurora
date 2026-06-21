import { useEffect, useState } from "react";

export default function Scheduling() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div style={{ width: "100%", height: "1000px" }} className="w-full flex items-center justify-center">
        <div className="text-white">Loading calendar...</div>
      </div>
    );
  }

  return <CalendlyWidget />;
}

function CalendlyWidget() {
  const { InlineWidget } = require("react-calendly");

  return (
    <InlineWidget
      styles={{ width: "100%", height: "1000px", padding: "0 !important" }}
      className="w-full"
      url="https://calendly.com/aurora-amanda-huovinen/30min"
    />
  );
}
