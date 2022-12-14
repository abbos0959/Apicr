import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';

import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
// import Chatprovider from "./context/Chatprovider";
import ChatProvider from "./context/Chatprovider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <ChatProvider>
      <BrowserRouter>
         <ChakraProvider>
            <App />
         </ChakraProvider>
      </BrowserRouter>
   </ChatProvider>
);
