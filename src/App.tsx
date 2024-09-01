import { AppShell } from "@mantine/core";
import Header from "./components/Header";

function App() {
  return (
    <AppShell header={{ height: 60 }} padding="md">
      <AppShell.Header>
        <Header />
      </AppShell.Header>
      <AppShell.Main>Main</AppShell.Main>
    </AppShell>
  );
}

export default App;
