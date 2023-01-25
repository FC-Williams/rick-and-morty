import * as React from "react";
import IconButton from "@mui/material/IconButton";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import Icon from "@mdi/react";
import { mdiThemeLightDark } from "@mdi/js";
import Home from "../pages/Home";
import { Grid } from "@mui/material";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function MyApp() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <Grid container
      minHeight={"100%"}
      sx={{
        display: "flex",
        width: "100%",
        alignItems: "left",
        justifyContent: "center",
        bgcolor: "background.default",
        color: "text.primary",
        borderRadius: 1,
        p: 3,
      }}
    >
      <Grid item xs={12}>
        Modo {theme.palette.mode === "light" ? "claro" : "oscuro"}
        <IconButton
          sx={{ ml: 1 }}
          onClick={colorMode.toggleColorMode}
          color="inherit"
        >
          {<Icon size={1} path={mdiThemeLightDark} color={theme.palette.mode === "light" ? "black" : "white"} />}
        </IconButton>
      </Grid >
            <Grid item xs={12}>
        <Home />
      </Grid>
    </Grid>
  );
}

export default function ToggleColorMode() {
  const [mode, setMode] = React.useState<"light" | "dark">("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <MyApp />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
