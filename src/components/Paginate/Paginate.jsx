import React from "react";
import PropTypes from "prop-types";

const Paginate = React.memo(function Paginate({items,activePaginateType,onClickPaginateType}) {

        return (
            <div className="container">
                    {items.map((name, index) => (
                        <span
                            key={`${name}_${index}`}
                            className={ activePaginateType === index +1 ? 'content__active' : 'content__page'}
                            onClick={ () => onClickPaginateType(index)}

                        >{name}</span>
                    ))}
            </div>
        )
    })
Paginate.propTypes ={
        activePaginate: PropTypes.number,
        items:PropTypes.arrayOf(PropTypes.number).isRequired,
    onClickPaginateType: PropTypes.func.isRequired


    }
Paginate.defaultProps ={
        activePaginate:null,
        items:[],
    }
    export default Paginate ;
