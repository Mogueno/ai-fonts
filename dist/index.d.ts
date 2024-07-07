import React$1 from 'react';

interface AiFontProps {
    children: React.ReactNode;
    animationDuration?: "short" | "medium" | "long";
    colors?: "rainbow" | "blue" | "yellow";
    textShadow?: "none" | "default";
    fontFamily?: string;
}

declare const AiFont: React$1.FC<AiFontProps>;

export { AiFont as default };
