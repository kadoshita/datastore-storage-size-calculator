import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";
import { Header } from "./ui/header";
import { Calculator } from "./ui/calculator";

function App() {
  return (
    <MantineProvider>
      <Header></Header>
      <Calculator></Calculator>
    </MantineProvider>
  );
}

export default App;
