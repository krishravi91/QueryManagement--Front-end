import React from 'react';
import './App.css';
import {Entry} from "./pages/entry/Entry.page.js";
import {DefaultLayout} from "./layout/DefaultLayout";
import {Dashboard} from "./pages/Dashboard/Dashboard.page";


function App() {
  return (
    <div className="App">
       {/* <Entry /> */}
       <DefaultLayout>
        <Dashboard />
       </DefaultLayout>

    </div>
  );
}

export default App;
