import { useState } from "react";
import { ModuloN } from "./views/modulon";
import { ModuloN2 } from "./views/modulon2";

function App() {
  const [screen, setScreen] = useState("modulon");

  if (screen === "modulon")
    return <ModuloN screen={screen} changeScreen={setScreen} />;
  if (screen === "modulon2")
    return <ModuloN2 screen={screen} changeScreen={setScreen} />;
  return null;
}

export default App;
