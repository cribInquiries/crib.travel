// theme.ts
import { defineConfig, createSystem, defaultConfig } from "@chakra-ui/react";

const config = defineConfig({
  globalCss: {
    html: {
        
      colorPalette: "blue", // Replace "blue" with your preferred color palette
    },
  },
});

export const system = createSystem(defaultConfig, config);
