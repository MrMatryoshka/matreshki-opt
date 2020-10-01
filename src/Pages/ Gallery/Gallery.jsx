import React from "react";
import Categories from "../../components/Categories/Categories";
import SortPopup from "../../components/SortPopup/SortPopup";
import Matreshka from "../../components/Matreshka/Matreshka";
import {useDispatch, useSelector} from "react-redux";
import {setCategory} from "../../redux/actions/filters";

const categoryName =["Семеновские", 'Майдановские','Загорские','Вятские','Авторские'];
const sortItem =[
    {name:'Популярности', type:'popular'},
    {name: 'Цене', type: 'price'},
    {name:'Алфавиту', type: 'alphabet'}
]

function Gallery () {
    const dispatch = useDispatch()
    const items = useSelector(({ matreshkis }) => matreshkis.items);

    const onSelectCategory = React.useCallback((index) =>{
        dispatch(setCategory(index))
    },[])
    return(
            <div className="container">
                <div className="content__top">
                    <Categories items={categoryName}
                                onClickItem={onSelectCategory }
                    />
                    <SortPopup items ={sortItem}/>
                </div>
                <h2 className="content__title">Все Матрешки</h2>
                <div className="content__items">

                    {items && items.map(obj => (
                        <Matreshka
                            key={obj.id}
                            {...obj}

                        />

                        ))}

                </div>
            </div>

    )
}

export default Gallery
