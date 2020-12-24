import React from "react";
import {useSelector} from "react-redux";
import MyLoader from "../../components/Loader/MyLoader";


export const MatreshkaId = () => {
    const {items,isLoaded} = useSelector(({matreshkaOne}) => (matreshkaOne))

    return<React.Fragment>
        <div className="container">
        <h2 className="content__title"> Матрешка</h2>
        <div className="content__items" >

            {isLoaded ? items.map(obj => (
                <React.Fragment key={obj.id}>
                    <div className="matreshka-block"  >
                        <img
                            className="matreshka-block__image"
                            src={obj.imageUrl}
                            alt="Matreshka"
                        />
                        <h4 className="matreshka-block__title"> {obj.name} </h4>
                        <div className="matreshka-block__price">от {obj.price} ₽</div>
                        <div  style={{color:"gold"}}>
                            <h4>
                            {obj.about}
                        </h4>
                        </div>

                    </div>
                </React.Fragment>
            )):Array(1)
                .fill(0)
                .map((_,index) => <MyLoader key={index}/>) }

            </div>
        </div>
    </React.Fragment>



}
