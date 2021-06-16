import logo from './logo.svg';
import './App.css';
import React from "react";
import Hello from './component/Hello';
import Welcome from './component/Welcome';
import UserHello from './component/UserHello';
import { useState } from 'react';
import Header from './component/Header';
import DayList from './component/DayList.';
import Day from './component/Day';
import EmptyPage from './component/EmptyPage';
import CreateDay from './component/CreateDay';
import { BrowserRouter, Route ,useParams, Switch} from "react-router-dom";
import CreateWord from './component/CreateWord';

function App() {

  
  return (
    <BrowserRouter>
         <div className="App">
         <Header/>
             <Switch>

                 <Route exact path="/">
                 <DayList/>
                 </Route>

                 <Route path = "/day/:day">
                 <Day/>
                 </Route>


                 <Route path = "/create_word">
                 <CreateWord/>
                 </Route>

                 <Route path = "/create_day">
                 <CreateDay/>
                 </Route>
                
                 <Route>
                 <EmptyPage />
                 </Route>
             </Switch>
         </div>
    </BrowserRouter>
  );
}

export default App;
