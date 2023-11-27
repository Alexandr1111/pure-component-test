import React, {memo} from "react";

//Если React.memo, будет ререндериться только родительский и ChildRegular
export const ChildPure = memo((props) => {
    console.log('render ChildPure');

    return (
        <>
            ChildPure
            <button onClick={props.onClick}>click me</button>
        </>
    )
},)