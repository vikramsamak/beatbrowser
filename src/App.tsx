import { AppShell } from "@mantine/core";
import Header from "./components/Header";
import MainView from "./components/MainView";

function App() {
  return (
    <AppShell header={{ height: 60 }} padding="md">
      <AppShell.Header>
        <Header />
      </AppShell.Header>
      <AppShell.Main>
        <MainView />
      </AppShell.Main>
    </AppShell>
  );
}

export default App;
