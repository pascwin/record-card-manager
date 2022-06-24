import { Fragment } from "react";
import Header from "./components/Layout/Header";
import AddCardForm from "./components/RecordCard/Add/AddCardForm";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <AddCardForm />
      </main>
    </Fragment>

  );
}

export default App;
