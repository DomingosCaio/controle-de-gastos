import { Balance } from "./Components/Balance/balance";
import { Header } from "./Components/Header/header";
import { HistoryComp } from "./Components/HistoryComp/history";
import { Income } from "./Components/Income/income";
import { NewTransaction } from "./Components/NewTransaction/newTransaction";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Header title={"Controle de despesas"} />
      <Balance />
      <Income />
      <HistoryComp />
      <NewTransaction />
    </GlobalProvider>
  );
}

export default App;
