import React from "react";

const colors = [
  "#FF0000",
  "#FF7F00",
  "#FFFF00",
  "#00FF00",
  "#0000FF",
  "#4B0082",
  "#8B00FF",
];

interface AiFontProps {
  children: React.ReactNode;
}

const AiFont: React.FC<AiFontProps> = ({ children }) => {
  const letters = (children as string).split("");
  return (
    <span>
      {letters.map((letter, index) => (
        <span key={index} style={{ color: colors[index % colors.length] }}>
          {letter}
        </span>
      ))}
    </span>
  );
};

export default AiFont;
