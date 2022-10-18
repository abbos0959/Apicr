import "./App.css";
import { Button } from "@chakra-ui/react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ChatPage } from "./pages/ChatPage";
import { FormControll } from "./pages/FormControl";
function App() {
   return (
      <div className="App">
         <Route path="/" component={HomePage} exact />

         <Route path="/chats" component={ChatPage} />
         <Route path="/create" component={FormControll} />
      </div>
   );
}

export default App;
