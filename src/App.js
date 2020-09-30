import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import axios from 'axios';
import {setMatreshki as setMatreshkiActions} from './redux/actions/matreshka'
import Header from "./components/Header/Header";
import Gallery from "./Pages/ Gallery/Gallery";
import About from "./Pages/About/About";
import Card from "./Pages/Buy/Card";
import Home from "./Pages/Home/home";
import {connect} from 'react-redux'


//
// function App() {
//
//     const [matreshka,setMatreshka] = React.useState([])
//
//     React.useEffect( () => {
//
//       axios.get('http://localhost:3000/db.json').then(({data}) => { setMatreshka(data.matreshki)}).catch((e)=> console.log('error', e) )
//
//         // fetch('http://localhost:3000/db.json')
//         //     .then((response)=> response.json())
//         //     .then(json =>{
//         //         setMatreshka(json.matreshki)
//         //     } )
//         // console.log('массив матрешек ' , matreshka)
//     },[]);
//
//   return (
//       <div className="wrapper">
//           <Header/>
//           <div className="content">
//               <Route path={'/gallery'} render={() => <Gallery items={matreshka}/>}/>
//               <Route path={'/about'} component={About}/>
//               <Route path={'/buy'} component={Card}/>
//              <Route path={'/'} component={Home} exact/>
//             </div>
//              </div>
//
//
//   );
// }

class App extends Component {

   componentDidMount() {
       axios.get('http://localhost:3000/db.json')
           .then(({data}) => { this.props.setMatreshki(data.matreshki) })
           .catch((e)=> console.log('error', e) )

   }


    render() {
        return (
            <div className="wrapper">
                          <Header/>
                           <div className="content">
                             <Route path={'/gallery'} render={() => <Gallery items={this.props.items}/>}/>
                             <Route path={'/about'} component={About}/>
                             <Route path={'/buy'} component={Card}/>
                           <Route path={'/'} component={Home} exact/>
                         </div>
                              </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.matreshkis.items ,
        filters: state.filters
    }
}

const mapDispatchToProps = dispatch => {
    return{
        setMatreshki: (items) => dispatch(setMatreshkiActions(items))
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (App);


