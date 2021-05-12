import React from 'react';

const Word = (props) => {
    return (
        <div className="container">
            {!isNaN(props.param)? <h1 className="mt-5" style= {{backgroundColor: props.bgColor, color: props.textColor}}>The Number is: {props.param}</h1> :
            <h1 className="mt-5" style= {{backgroundColor: props.bgColor, color: props.textColor}}>The Word is: {props.param}</h1>}
        </div>
    );
};

export default Word;