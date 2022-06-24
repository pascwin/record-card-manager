import Header from "./components/Layout/Header";
import AddCardForm from "./components/RecordCard/Add/AddCardForm";
import RecordCards from "./components/RecordCard/Overview/RecordCards";
import RecordCardProvider from "./store/RecordCardProvider";

function App() {
  return (
    <RecordCardProvider>
      <Header />
      <main>
        <AddCardForm />
        <RecordCards />
      </main>
    </RecordCardProvider>
  );
}

export default App;
