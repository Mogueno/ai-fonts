# AiFont

`AiFont` is a React component that animates text with a colorful gradient and a white border. You can choose different color themes and animation durations.

## Installation

First, install the package via npm:

```sh
npm install ai-fonts
```

Or via yarn

```sh
yarn add ai-fonts
```

### Usage

Import the AiFont component and use it in your project:

```tsx
import React from "react";
import AiFont from "ai-fonts";

const App = () => {
  return (
    <div>
      <AiFont>Rainbow Text</AiFont>
    </div>
  );
};

export default App;
```

### Props

AiFont accepts the following props:

• children: React.ReactNode - The text or components that will be animated.
• animationDuration: "short" | "medium" | "long" - Duration of the animation. Default is "medium".
• colors: "rainbow" | "blue" | "yellow" - Color theme of the animation. Default is "rainbow".
• textShadow: "none" | "default" - Text shadow effect. Default is "default".
• fontFamily: string - Font family of the text. Default is "sans-serif".

### Example with props

```tsx
import React from "react";
import AiFont from "ai-fonts";

const App = () => {
  return (
    <div>
      <AiFont
        animationDuration="short"
        colors="blue"
        textShadow="none"
        fontFamily="monospace"
      >
        Blue Text
      </AiFont>

      <AiFont
        animationDuration="long"
        colors="yellow"
        textShadow="default"
        fontFamily="cursive"
      >
        Yellow Text
      </AiFont>

      <AiFont
        animationDuration="medium"
        colors="rainbow"
        textShadow="none"
        fontFamily="fantasy"
      >
        Rainbow Text
      </AiFont>
    </div>
  );
};

export default App;
```

### How It Works

The component uses CSS keyframes for animation and JavaScript to dynamically create and inject the keyframes based on the chosen color theme.

### Color Themes

• Rainbow: A colorful gradient animation.
• Blue: Different shades of blue.
• Yellow: Alternating yellow and green.

### Animation Durations

• Short: 10 seconds
• Medium: 20 seconds
• Long: 45 seconds

### Text Shadow

• None: No text shadow
• Default: A white text shadow

### Contributing

If you’d like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

### License

This project is licensed under the MIT License.
