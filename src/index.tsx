import React from "react";

const colorsRainbow = [
  "#FF0000",
  "#FF7F00",
  "#FFFF00",
  "#00FF00",
  "#0000FF",
  "#4B0082",
  "#8B00FF",
];

const colorsBlue = [
  "#0000FF",
  "#4B0082",
  "#8B00FF",
  "#4B0082",
  "#0000FF",
  "#4B0082",
  "#8B00FF",
];

const colorsYellow = [
  "#FFFF00",
  "#00FF00",
  "#FFFF00",
  "#00FF00",
  "#FFFF00",
  "#00FF00",
  "#FFFF00",
];

interface AiFontProps {
  children: React.ReactNode;
  animationDuration?: "short" | "medium" | "long";
  colors?: "rainbow" | "blue" | "yellow";
}

const AiFont: React.FC<AiFontProps> = ({
  children,
  animationDuration = "medium",
  colors = "rainbow",
}) => {
  // Choose colors
  let colorsOpt;

  switch (colors) {
    case "blue":
      colorsOpt = colorsBlue;
      break;
    case "yellow":
      colorsOpt = colorsYellow;
      break;
    case "rainbow":
    default:
      colorsOpt = colorsRainbow;
  }

  // Generate keyframes for animation
  const keyframes = `
    @keyframes rainbowText {
      0% { color: ${colorsOpt[0]}; }
      14% { color: ${colorsOpt[1]}; }
      28% { color: ${colorsOpt[2]}; }
      42% { color: ${colorsOpt[3]}; }
      57% { color: ${colorsOpt[4]}; }
      71% { color: ${colorsOpt[5]}; }
      85% { color: ${colorsOpt[6]}; }
      100% { color: ${colorsOpt[0]}; } 
    }
  `;

  let seconds;
  switch (animationDuration) {
    case "short":
      seconds = "10s";
      break;
    case "medium":
      seconds = "20s";
      break;
    case "long":
      seconds = "45s";
      break;
    default:
      seconds = "20s";
  }

  // Create a style element to inject keyframes
  const style = document.createElement("style");
  style.type = "text/css";
  style.appendChild(document.createTextNode(keyframes));
  document.head.appendChild(style);

  return (
    <span
      className="rainbow-text"
      style={{
        display: "inline-block",
        animation: `rainbowText ${seconds} linear infinite`,
        textShadow: `
              -1px -1px 0 #fff,
              1px -1px 0 #fff,
              -1px 1px 0 #fff,
              1px 1px 0 #fff
            `,
      }}
    >
      {children}
    </span>
  );
};

export default AiFont;
