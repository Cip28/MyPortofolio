import React from 'react';
import './sass/Button.scss';


const Button = (props) => {
    return (
        <button className={ props.classTag}>
            {props.name}
        </button>
    );
};

export default Button;
