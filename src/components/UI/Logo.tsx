import React from "react";

export default function Logo() {
  return (
    <div className="border-[#A974FF] border-2 h-[100px] leading-[50px] pl-2 pr-2 rounded-[20px] mt-4">
      <h1
        style={{
          color: "rgba(0, 0, 0, 0)",
          WebkitTextStroke: "1px #A974FF",
          fontSize: "48px",
        }}
        className="mt-3"
      >
        !NTROVERT
      </h1>
      <h6 className="leading-[20px]" style={{ color: "#A974FF" }}>
        stay alone connected
      </h6>
    </div>
  );
}
