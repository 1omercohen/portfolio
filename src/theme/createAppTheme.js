import { createTheme } from "@mui/material";

export function createAppTheme(isHebrew) {
  return createTheme({
    direction: isHebrew ? "rtl" : "ltr",
    palette: {
      mode: "dark",
      primary: { main: "#62adff" },
      background: { default: "#0f131a", paper: "#161b24" },
      text: { primary: "#f2f4f8", secondary: "#c7cfdd" },
    },
    typography: {
      fontFamily: isHebrew ? '"Heebo", sans-serif' : '"Sora", sans-serif',
      h1: { fontWeight: 800, lineHeight: 1.1 },
      h2: { fontWeight: 700 },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
            borderRadius: 10,
            fontWeight: 600,
          },
        },
      },
      MuiTextField: {
        defaultProps: { variant: "outlined" },
      },
    },
  });
}
