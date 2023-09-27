"use client";
import { useEffect, useRef } from "react";
export default function Cursor() {
  const cursor = useRef(null);
  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      cursor.current.style.left = e.pageX - 320 + "px";
      cursor.current.style.top = e.pageY - 320 + "px";
    });
  }, []);
  return (
    <div
      className="absolute z-[-1] rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-200 via-gray-300 to-gray-400 bg-opacity-25 blur-3xl w-[42rem] h-[42rem]"
      ref={cursor}></div>
  );
}
