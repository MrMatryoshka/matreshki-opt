import React from "react";
import PropTypes from 'prop-types';
import classNames from 'classnames';


function Matreshka ({name,imageUrl,price,sizes, types}) {

    const availableTypes= ['Традиционная','Авторская']

    const [activeType,setActiveType]= React.useState(types[0])
    const [activeSize,setActiveSize]= React.useState(sizes[0])

    const availableSize =[10, 15, 18]


    const onSelectTypes = (index) => {
        setActiveType(index)

    }
    const onSelectSize = (index) => {
        setActiveSize(index)

    }

    return (
        <div className="matreshka-block">
            <img
                className="matreshka-block__image"
                src={imageUrl}
                alt="Matreshka"
            />
            <h4 className="matreshka-block__title"> {name}</h4>
            <div className="matreshka-block__selector">
                <ul>
                    {availableTypes.map((type,index)=>
                        <li
                            key={type}
                            onClick={() => onSelectTypes(index)}
                            className={classNames({
                                active: activeType === index,
                                disabled: !types.includes(index)
                            })}
                        >{type}
                        </li>)}
                </ul>
                <ul>
                    {availableSize.map((size,index)=>
                        <li
                            key={size}
                            onClick={() => onSelectSize(index)}
                            className={classNames({
                                active: activeSize === index,
                                disabled: !sizes.includes(size)
                            })}
                        >{size} см
                        </li>)}
                </ul>
            </div>
            <div className="matreshka-block__bottom">
                <div className="matreshka-block__price">от {price} ₽</div>
                <div className="button button--outline button--add">
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="white"
                        />
                    </svg>
                    <span>Добавить</span>
                    <i>2</i>
                </div>
            </div>
        </div>
    )

}

Matreshka.propTypes ={
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    price:PropTypes.number.isRequired,
    sizes:PropTypes.arrayOf(PropTypes.number).isRequired,
    types:PropTypes.arrayOf(PropTypes.number).isRequired,


}
Matreshka.defaultProps ={
    name:'Название матрешки ',
    imageUrl: 'https://static.ngs.ru/news/2020/99/preview/89204197f0c2e9ee0464abf2d59a416206614b18_1280_960.jpg',
    price: 100,
    size: 100 ,
    types:[],


}
export default Matreshka;
