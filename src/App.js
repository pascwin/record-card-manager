import { Route, Switch, Redirect } from "react-router-dom";

import Header from "./components/Layout/Header";
import RecordCardProvider from "./store/RecordCardProvider";
import RecordCardTable from "./pages/RecordCardTable.js"
import EditRecordCard from "./pages/EditRecordCard";
import AddRecordCards from "./pages/AddRecordCards";


function App() {

  return (
    <RecordCardProvider>
      <Header />
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Switch>
        <Route path="/" exact><Redirect to="/record-table" /></Route>
        <Route path="/record-table"><RecordCardTable /></Route>
        <Route path="/edit-record/:recordId"><EditRecordCard /></Route>
        <Route path="/add-records"><AddRecordCards /></Route>
      </Switch>
    </RecordCardProvider>
  );
}

export default App;
