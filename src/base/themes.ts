interface Dark {
  background: string;
  elements: string;
  text: string;
}

interface Light {
  background: string;
  elements: string;
  text: string;
  input: string;
}

export interface Theme {
  font: string;
  transition: string;
  dark: Dark;
  light: Light;
}
const theme: Theme = {
  font: "Nunito Sans, sans-serif",
  transition: "background 0.3s ease-in-out, color 0.3s ease-in-out",
  dark: {
    background: "hsl(207, 26%, 17%)",
    elements: "hsl(209, 23%, 22%)",
    text: "hsl(0, 0%, 100%)",
  },

  light: {
    background: "hsl(0, 0%, 98%)",
    elements: "hsl(0, 0%, 100%)",
    text: "hsl(200, 15%, 8%)",
    input: "hsl(0, 0%, 52%)",
  },
};

export default theme;
