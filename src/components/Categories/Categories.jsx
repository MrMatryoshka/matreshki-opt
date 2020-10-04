import React from "react";
import PropTypes from "prop-types";


const Categories = React.memo(function Categories({activeCategory,items,onClickCategory}) {
    // const [activeItem,setActiveItem]= useState(null)

    // const onSelectItem = index => {
    //     // setActiveItem(index)
    //     onClickCategory(index)
    // }

    return (
        <div className="categories">
            <ul>
                <li className={ activeCategory === null ? 'active' : ''} onClick={ () => onClickCategory(null) }>Все</li>
                {items && items.map((name, index) => (
                    <li
                        key={`${name}_${index}`}
                        className={ activeCategory === index ? 'active' : ''}
                        onClick={ () => onClickCategory(index)}

                    >{name}</li>
                ))}
            </ul>
        </div>
    )
})
Categories.propTypes ={
    activeCategory: PropTypes.oneOf([0,1,2,3,4,null]),
    items:PropTypes.arrayOf(PropTypes.string).isRequired,
    onClickCategory: PropTypes.func.isRequired


}
Categories.defaultProps ={
    activeCategory:null,
    items:[],
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
