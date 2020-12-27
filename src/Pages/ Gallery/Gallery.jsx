import React, {useState} from "react";
import Categories from "../../components/Categories/Categories";
import SortPopup from "../../components/SortPopup/SortPopup";
import Matreshka from "../../components/Matreshka/Matreshka";
import {useDispatch, useSelector} from "react-redux";
import {setCategory, setCurrentPage, setSearch, setSortBy} from "../../redux/actions/filters";
import {fetchMatreshki} from "../../redux/actions/matreshka";
import MyLoader from "../../components/Loader/MyLoader";
import {addMatreshkiToCart} from "../../redux/actions/cart";
import {matreshkaOne} from "../../redux/actions/matreshkaFirst";
import Paginate from "../../components/Paginate/Paginate";
import Button from "../../hoc/Button/Button";


const categoryName =["Семеновские", 'Майдановские','Загорские','Вятские','Авторские'];
const sortItem =[
    {name:'Популярности', type:'popular', order:'desc'},
    {name: 'Цене', type: 'price', order:'desc'},
    {name:'Алфавиту', type: 'name', order:'asc'}
]
const pages = [1,2,3,4,5]


function Gallery () {
    const dispatch = useDispatch()

    const items = useSelector(({ matreshkis }) => matreshkis.items);
    const cartItems = useSelector(({ cart }) => cart.items);
    const isLoaded = useSelector(({ matreshkis }) => matreshkis.isLoaded);
    const {category,sortBy,currentPage,search} = useSelector(({ filters }) => filters);

    const [seach,setSeach] = useState("")

    React.useEffect( ()=> {
            dispatch(fetchMatreshki(sortBy,category,currentPage,search))
    },[category, dispatch, sortBy,currentPage,search])

    const onSelectCategory = React.useCallback((index) =>{
        dispatch(setCategory(index))
    },[dispatch])


    const onSelectSortType = React.useCallback((type) =>{
        dispatch(setSortBy(type))
    },[dispatch])



    const onCurrentPage = (index) =>{
        dispatch(setCurrentPage(index+1))
    }

    const handleAddMatreshkaToCart = (obj) => {
        dispatch(addMatreshkiToCart(obj))
    }

        const handleLinkMatreshkaId = (obj) => {
            dispatch(matreshkaOne(obj))
        }

      function searchHandler (e,obj) {
          dispatch(setSearch(seach))
          // setSeach("")
          console.log(seach)
          console.log(obj)
          e.preventDefault()
    }

    return(
            <div className="container">
                <div className={"search"}>
                    <input value={seach} onChange={ (e) => setSeach(e.target.value)} type="text" placeholder={"Поиск матрешки"}  className={"search-input"}/>
                    <Button className={"pay-btn"} onClick={searchHandler} children={"Поиск"}/>
                </div>
                        <div  className="content__top">
                    <Categories
                        activeCategory={category}
                        items={categoryName}
                        onClickCategory={onSelectCategory }
                    />
                    <SortPopup
                        activeSortType={sortBy.type}
                        items ={sortItem}
                        onClickSortType={onSelectSortType} />
                </div>
                <h2 className="content__title">Все Матрешки</h2>
                <div className="content__items" >

                    {isLoaded ? items.map(obj => (
                        <Matreshka
                            onClickAddMatreshka={handleAddMatreshkaToCart}
                            NavLinkId={handleLinkMatreshkaId}
                            key={obj.id}
                           addedCount={cartItems[obj.id] && cartItems[obj.id].items.length}
                            isLoading={true}
                            {...obj}
                        />
                        )) :Array(10)
                        .fill(0)
                        .map((_,index) => <MyLoader key={index}/>)}

                </div>
                <div >
                    <Paginate
                        items={pages}
                        activePaginateType={currentPage}
                        onClickPaginateType={ onCurrentPage}/>
                </div>
            </div>

    )
}


export default Gallery
