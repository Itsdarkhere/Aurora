"use client";
import { InlineWidget } from "react-calendly";

export default function Scheduling() {
  return (
    <InlineWidget
      styles={{ width: "100%", height: "1000px" }}
      className=' w-full'
      url='https://calendly.com/valtterijuvonen123/30min'
    />
  );
}
