import React from "react";
import Categories from "../../components/Categories/Categories";
import SortPopup from "../../components/SortPopup/SortPopup";
import Matreshka from "../../components/Matreshka/Matreshka";
import {useDispatch, useSelector} from "react-redux";
import {setCategory, setSortBy} from "../../redux/actions/filters";
import {fetchMatreshki} from "../../redux/actions/matreshka";
import MyLoader from "../../components/Loader/MyLoader";

const categoryName =["Семеновские", 'Майдановские','Загорские','Вятские','Авторские'];
const sortItem =[
    {name:'Популярности', type:'popular', order:'desc'},
    {name: 'Цене', type: 'price', order:'desc'},
    {name:'Алфавиту', type: 'name', order:'asc'}
]

function Gallery () {
    const dispatch = useDispatch()
    const items = useSelector(({ matreshkis }) => matreshkis.items);
    const isLoaded = useSelector(({ matreshkis }) => matreshkis.isLoaded);
    const {category,sortBy} = useSelector(({ filters }) => filters);

    React.useEffect( ()=> {

            dispatch(fetchMatreshki(sortBy,category))


    },[category,sortBy])

    const onSelectCategory = React.useCallback((index) =>{
        dispatch(setCategory(index))
    },[])

    const onSelectSortType = React.useCallback((type) =>{
        dispatch(setSortBy(type))
    },[])
    return(
            <div className="container">
                <div className="content__top">
                    <Categories activeCategory={category} items={categoryName}
                                onClickCategory={onSelectCategory }
                    />
                    <SortPopup activeSortType={sortBy.type} items ={sortItem} onClickSortType={onSelectSortType} />
                </div>
                <h2 className="content__title">Все Матрешки</h2>
                <div className="content__items">

                    {isLoaded ? items.map(obj => (

                        <Matreshka
                            key={obj.id}
                            isLoading={true}
                            {...obj}

                        />

                        )) :Array(10)
                        .fill(0)
                        .map((_,index) => <MyLoader key={index}/>)}

                </div>
            </div>

    )
}


export default Gallery
