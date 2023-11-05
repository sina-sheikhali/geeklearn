import routes from "./routes";
import { useRoutes } from "react-router-dom";
import React from "react";
import "./App.css";

function App() {
  const router = useRoutes(routes);
  return <div>{router}</div>;
}

export default App;
