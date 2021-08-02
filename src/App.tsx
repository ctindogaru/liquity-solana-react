import React from "react";
import "./App.css";
import { Button, Flex, Box, ThemeProvider } from "theme-ui";
import { Icon } from "./Icon";
import theme from "./theme";

function App() {
  const doSomething = (): void => {
    console.log("clicked");
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Flex
          sx={{
            height: "100vh",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            onClick={() => {
              doSomething();
            }}
          >
            <>
              <Icon name="plug" size="lg" />
              <Box sx={{ ml: 2 }}>Connect to local wallet</Box>
            </>
          </Button>
        </Flex>
      </ThemeProvider>
    </>
  );
}

export default App;
