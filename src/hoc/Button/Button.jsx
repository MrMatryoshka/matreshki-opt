import React from "react";
import classNames from 'classnames';


const  Button = ({onClick , className , outline, children}) =>{

    return (
        <button
        className={ classNames('button', className, {
            'button--outline' :outline,
        })}
        onClick={onClick}
        >
            {children}
        </button>
    )
};

export default Button;
