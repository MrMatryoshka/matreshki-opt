import React from 'react';
import {Route} from 'react-router-dom';
import axios from 'axios';
import Header from "./components/Header/Header";
import Gallery from "./Pages/ Gallery/Gallery";
import About from "./Pages/About/About";
import Card from "./Pages/Buy/Card";
import Home from "./Pages/Home/home";


function App() {

    const [matreshka,setMatreshka] = React.useState([])

    React.useEffect( () => {

      axios.get('http://localhost:3000/db.json').then(({data}) => { setMatreshka(data.matreshki)}).catch((e)=> console.log('error', e) )

        // fetch('http://localhost:3000/db.json')
        //     .then((response)=> response.json())
        //     .then(json =>{
        //         setMatreshka(json.matreshki)
        //     } )
        // console.log('массив матрешек ' , matreshka)
    },[]);

  return (
      <div className="wrapper">
          <Header/>
          <div className="content">
              <Route path={'/gallery'} render={() => <Gallery items={matreshka}/>}/>
              <Route path={'/about'} component={About}/>
              <Route path={'/buy'} component={Card}/>
             <Route path={'/'} component={Home} exact/>
            </div>
             </div>


  );
}

export default App;
