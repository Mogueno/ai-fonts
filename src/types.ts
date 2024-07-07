export interface AiFontProps {
  children: React.ReactNode;
  animationDuration?: "short" | "medium" | "long";
  colors?: "rainbow" | "blue" | "yellow";
  textShadow?: "none" | "default";
  fontFamily?: string;
}
