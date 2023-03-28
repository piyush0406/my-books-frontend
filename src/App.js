import React,{Component} from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import './App.css'

import Home from "./components/Home/Home";
import AddBook from './components/Add/AddBook';
import ViewBook from './components/Book/ViewBook'

class App extends Component {

  constructor() {
      super();
      this.state = { game_selected: null };
  }

  render(){
    return(
      //add your component to this by Route path = "/{component name}"      
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/addbook" title="Add a Book" element={<AddBook/>}/>
            <Route path="/viewbook/:_id" element={<ViewBook/>}/>
          </Routes>
        </div>
      </BrowserRouter>


    );
  }
}

export default App;