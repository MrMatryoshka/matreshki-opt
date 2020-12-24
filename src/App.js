import React from 'react';
import {Route} from 'react-router-dom';
import Header from "./components/Header/Header";
import Gallery from "./Pages/ Gallery/Gallery";
import About from "./Pages/About/About";
import Card from "./Pages/Buy/Card";
import Home from "./Pages/Home/home";
import {MatreshkaId} from "./Pages/ Gallery/[id]";

function App () {

    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Route path={'/gallery'}  component={Gallery } />
                <Route path={'/matreshka/:id'}  component={MatreshkaId} />
                <Route path={'/about'} component={About}/>
                <Route path={'/buy'} component={Card}/>
                <Route path={'/'} component={Home} exact/>
            </div>
        </div>
    )
}

export default App



