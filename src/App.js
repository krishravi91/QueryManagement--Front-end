import React from 'react';
import './App.css';
import {Entry} from "./pages/entry/Entry.page.js";
import {DefaultLayout} from "./layout/DefaultLayout";
function App() {
  return (
    <div className="App">
       {/* <Entry /> */}
       <DefaultLayout>
        //Dashboard
       </DefaultLayout>

    </div>
  );
}

export default App;
