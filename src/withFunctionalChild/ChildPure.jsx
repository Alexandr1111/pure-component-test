import React from "react";

const areEqual = ( prevProps, nextProps ) => {
    //Позволяем не ререндерить ChildPure независимо от типа String или Number с одинаковым значением
    return prevProps.value == nextProps.value;
}

const ChildPure = ({ value }) => {  
    console.log('render ChildPure', value)
    return (
        <>
            ChildPure, { value } 
        </>
    )
}

//Если не передать areEqual в React.memo, то будет производиться только поверхностное сравнение props
export default React.memo(ChildPure, areEqual)