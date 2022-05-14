  import React from 'react';
  import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';
  import './App.css';
  import {Entry} from "./pages/entry/Entry.page.js";
  import {Dashboard} from "./pages/Dashboard/Dashboard.page";
  import {AddTicket} from "./pages/new-ticket/AddTicket.page"
  import { TicketLists } from './pages/ticket-listing/TicketLists.page';
  import {Ticket} from './pages/ticket/Ticket.page';
  import {PrivateRoute} from "./components/private-route/PrivateRoute";
import { DefaultLayout } from './layout/DefaultLayout';
import {Header} from "./layout/partials/Header.comp"
import { Footer } from './layout/partials/Footer.comp';

  function App() {
    return (
      
      <div className="App">
        <Router>

            <Routes>

              <Route  exact path="/" element={<Entry />} />
              
              <Route path="/" element={<PrivateRoute /> } >
                {/* <Route element={<Header />} /> */}
              {/* <Route element={<DefaultLayout />} > */} 
              {/* <Route  path="/dashboard" element={<DefaultLayout><Dashboard /></DefaultLayout>} />
              <Route  path="/add-ticket" element={<DefaultLayout><AddTicket /></DefaultLayout>} />              
              <Route  path="/tickets" element={<DefaultLayout><TicketLists /></DefaultLayout>} />             
              <Route  path="/ticket/tid:" element={<DefaultLayout><Ticket /></DefaultLayout>} /> */}
              {/* <Route element={<DefaultLayout />}> */}
              <Route  path="/dashboard" element={<><Header /><Dashboard /></>} />
              {/* </Route> */}
              <Route  path="/add-ticket" element={<><Header /><AddTicket /></>} />              
              <Route  path="/tickets" element={<><Header /><TicketLists /></>} />             
              <Route  path="/ticket/:tId" element={<><Header /><Ticket /></>} />
              
              </Route>
              {/* </Route> */}
                
            </Routes>
  
       </Router> 
      </div>
      
    );
  }

  export default App;
