import React, {useState} from "react";


function Categories({items}) {
    const [activeItem,setActiveItem]= useState(null)

    const onSelectItem = index => {
        setActiveItem(index)
    }

    return (
            <div className="categories">
                <ul>
                    <li className={ activeItem === null ? 'active' : ''} onClick={ () => onSelectItem(null) }>Все</li>
                    {items && items.map((name, index) => (
                        <li
                            key={`${name}_${index}`}
                            className={ activeItem === index ? 'active' : ''}
                            onClick={ () => onSelectItem(index)}

                        >{name}</li>
                    ))}
                </ul>
            </div>
        )
}


export default Categories;


// class Categories extends Component {
//     state ={
//         activeItem :null,
//
//     };
//
//         onSelectItem = index => {
//         this.setState({
//                 activeItem :index,
//
//             })
//         }
//
//
//     render() {
//         const {items } = this.props
//         return (
//             <div className="categories">
//                 <ul>
//                     <li className={this.state.activeItem === null ? 'active' : ''} onClick={ () => this.onSelectItem(null)} >Все</li>
//                     {items.map((name, index) => (
//                         <li
//                             key={`${name}_${index}`}
//                             className={this.state.activeItem === index ? 'active' : ''}
//                             onClick={ () => this.onSelectItem(index)}
//
//                         >{name}</li>
//                     ))}
//                 </ul>
//             </div>
//         )
//     }
// }
