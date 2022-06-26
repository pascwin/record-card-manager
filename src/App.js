import Header from "./components/Layout/Header";
import AddCardForm from "./components/RecordCard/Add/AddCardForm";
import RecordCardProvider from "./store/RecordCardProvider";
import RecordsTable from "./components/RecordCard/Overview/RecordsTable";
import { useState } from "react";

function App() {
  const [showTable, setShowTable] = useState(false)

  const show = () => {
    setShowTable(true)
  }

  return (
    <RecordCardProvider>
      <Header show={show} />
      <main>
      {
        showTable ?  <RecordsTable /> : <AddCardForm />
      }
      </main>
    </RecordCardProvider>
  );
}

export default App;
