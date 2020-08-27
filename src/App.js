import React from 'react';
import './App.css';
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import SearchPage from "./components/SearchPage";

function App() {
    return (
        <div className="app">
            <Router>
                <Header/>
                <Switch>
                    <Route exact path={'/'}>
                        <Home/>
                    </Route>
                    <Route path={'/search'}>
                        <SearchPage/>
                    </Route>
                </Switch>
                <Footer/>
            </Router>


        </div>
    );
}

export default App;
