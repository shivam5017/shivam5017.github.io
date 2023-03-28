import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "./Context/theme";
import { ChakraProvider } from "@chakra-ui/react";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <ChakraProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </ChakraProvider>,
  rootElement
);
