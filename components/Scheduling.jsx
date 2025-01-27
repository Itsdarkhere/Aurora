"use client";
import { InlineWidget } from "react-calendly";

export default function Scheduling() {
  return (
    <InlineWidget
      styles={{ width: "100%", height: "1000px", padding: "0 !important" }}
      className=' w-full'
      url='https://calendly.com/aurora-amanda-huovinen/30min'
    />
  );
}
