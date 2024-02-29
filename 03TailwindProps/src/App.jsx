import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl">
        Ankit is back with React
      </h1>
      <Card username="Ankit" btnText="visit me" />
      <Card username="Bipn" btnText="Click me" />
    </>
  );
}

export default App;
