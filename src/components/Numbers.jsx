import React from "react";
import MyButton from "./UI/MyButton/MyButton";

function Numbers(props) {
    return (
        <div className="numbers__wrapper">
            <div className="numbers">
                <div className="reset">
                    <MyButton onClick={() => props.change('clear')} style={{width: '100%'}}>clear</MyButton>
                </div>
                <div className="cell-numbers">
                    {props.numbers.map(number => 
                        <MyButton key={number} onClick={() => props.update(number)}>{number}</MyButton>    
                    )}
                </div>
            </div>
            <div className="operators">
                <MyButton onClick={() => props.change('=')}>=</MyButton>
                {props.operators.map(operator => 
                        <MyButton key={operator} onClick={() => props.change(operator)}>{operator}</MyButton>    
                    )}
            </div>
        </div>
    );
}

export default Numbers;
