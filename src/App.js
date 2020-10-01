import React from 'react';
import {Route} from 'react-router-dom';
import axios from 'axios';
import {setMatreshki as setMatreshkiActions} from './redux/actions/matreshka'
import Header from "./components/Header/Header";
import Gallery from "./Pages/ Gallery/Gallery";
import About from "./Pages/About/About";
import Card from "./Pages/Buy/Card";
import Home from "./Pages/Home/home";
import {useDispatch} from 'react-redux'


function App () {

    const dispatch = useDispatch()

    React.useEffect( ()=> {
        // console.log( setMatreshkiActions)
        axios.get('http://localhost:3000/db.json')
            .then(({data}) => { dispatch( setMatreshkiActions(data.matreshki))  })
            .catch((e)=> console.log('error', e) )

    },[])

    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Route path={'/gallery'}  component={Gallery } />
                <Route path={'/about'} component={About}/>
                <Route path={'/buy'} component={Card}/>
                <Route path={'/'} component={Home} exact/>
            </div>
        </div>
    )
}

export default App



