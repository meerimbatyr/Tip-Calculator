import React from "react";

export default function Tip({ tips }) {
  return (
    <div>
      {tips > 0 && (
        <p>
          TIP AMOUNT
          <span className="tip-amount">$ {tips}</span>
          <span>each</span>
        </p>
      )}
    </div>
  );
}
