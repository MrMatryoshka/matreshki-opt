import React from "react";
import Categories from "../../components/Categories/Categories";
import SortPopup from "../../components/SortPopup/SortPopup";
import Matreshka from "../../components/Matreshka/Matreshka";


function Gallery ({items}) {
    // console.log(items)
    return(
            <div className="container">
                <div className="content__top">
                    <Categories items={[
                        "Семеновские", 'Майдановские','Загорские','Вятские','Авторские'
                    ]}
                    />
                    <SortPopup items ={[
                        {name:'Популярности', type:'popular'},
                        {name: 'Цене', type: 'price'},
                        {name:'Алфавиту', type: 'alphabet'}
                        ]}/>
                </div>
                <h2 className="content__title">Все Матрешки</h2>
                <div className="content__items">

                    { items.map(obj => (
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
