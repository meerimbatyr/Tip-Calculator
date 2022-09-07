import React from "react";
import styled from "styled-components";

export default function Tip({ tips }) {
  const Tip = styled.p`
    font-size: 1.5rem;
    font-weight: 500;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.3rem;
  `;
  const Result = styled.span`
    background-color: ${tips > 10 ? "green" : "blue"};
    padding: 0.5rem;
    font-size: 2rem;
  `;
  return (
    <div>
      {tips > 0 && (
        <Tip>
          TIP AMOUNT
          <Result className="tip-amount">$ {tips}</Result>
          <span>each</span>
        </Tip>
      )}
    </div>
  );
}
