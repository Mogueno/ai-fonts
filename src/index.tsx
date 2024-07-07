import React, { useEffect } from "react";
import { AiFontProps } from "./types";

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

const AiFont: React.FC<AiFontProps> = ({
  children,
  animationDuration = "medium",
  colors = "rainbow",
  textShadow = "default",
  fontFamily,
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
  const generateKeyframes = (colors: string[]) => `
    @keyframes rainbowText {
      0% { color: ${colors[0]}; }
      14% { color: ${colors[1]}; }
      28% { color: ${colors[2]}; }
      42% { color: ${colors[3]}; }
      57% { color: ${colors[4]}; }
      71% { color: ${colors[5]}; }
      85% { color: ${colors[6]}; }
      100% { color: ${colors[0]}; }
    }
  `;

  useEffect(() => {
    // Generate keyframes dynamically
    const keyframes = generateKeyframes(colorsOpt);

    // Create a style element to inject keyframes
    const style = document.createElement("style");
    style.type = "text/css";
    style.appendChild(document.createTextNode(keyframes));
    document.head.appendChild(style);

    return () => {
      // Clean up: remove style element when component unmounts
      document.head.removeChild(style);
    };
  }, [colorsOpt]); // Run effect whenever colorsOpt changes

  // Determine animation duration
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

  // Determine the text shadow
  let textShadowOpt;
  switch (textShadow) {
    case "none":
      textShadowOpt = "none";
      break;
    case "default":
    default:
      textShadowOpt = `
        0 0 30px ${colorsOpt[0]},
        0 0 40px ${colorsOpt[0]},
        0 0 50px ${colorsOpt[0]}
      `;
  }

  return (
    <span
      style={{
        fontFamily: fontFamily || "sans-serif",
        display: "inline-block",
        animation: `rainbowText ${seconds} linear infinite`,
        textShadow: `
          ${textShadowOpt}`,
      }}
    >
      {children}
    </span>
  );
};

export default AiFont;
