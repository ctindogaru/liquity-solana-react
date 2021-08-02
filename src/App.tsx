import React from "react";
import "./App.css";
import { Button, Flex, Box, ThemeProvider } from "theme-ui";
import { Icon } from "./Icon";
import theme from "./theme";
import {
  establishConnection,
  establishPayer,
  checkProgram,
} from "./connectionHelpers";

function App() {
  const connectToLocalWallet = async (): Promise<void> => {
    // Establish connection to the cluster
    await establishConnection();

    // Determine who pays for the fees
    await establishPayer();

    // Check if the program has been deployed
    await checkProgram();
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
              connectToLocalWallet();
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
