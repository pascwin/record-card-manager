import Header from "./components/Layout/Header";
import RecordCardProvider from "./store/RecordCardProvider";
import RecordsTable from "./components/RecordCard/Overview/RecordsTable";
import { useState } from "react";
import EditForm from "./components/RecordCard/Edit/EditForm";

function App() {
  const [showTable, setShowTable] = useState(false)

  const show = () => {
    setShowTable(true)
  }

  const back = () => {
    setShowTable(false)
  }

  return (
    <RecordCardProvider>
      <Header show={show} />
      <main>
      {
        showTable ?  <EditForm back={back} /> : <RecordsTable show={show} /> 
      }
      </main>
    </RecordCardProvider>
  );
}

export default App;
