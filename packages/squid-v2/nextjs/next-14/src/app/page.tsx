"use client";
import { SquidWidgetWrapper } from "./SquidWidgetWrapper";

export default function Home() {
  return (
    <div className="p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1
        className="text-4xl font-bold text-white pb-10"
      >Squid Widget + NextJS 14</h1>

      <SquidWidgetWrapper />
    </div>
  );
}
