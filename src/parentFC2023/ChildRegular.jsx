import React from "react";

export const ChildRegular = (props) => {
    console.log('render ChildRegular');

    return (
        <div>
            ChildRegular
            <button onClick={props.onClick}>click me</button>
        </div>
    )
}