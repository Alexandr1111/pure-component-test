import React from "react";

const ChildRegular = ({ value }) => { 
    console.log('render ChildRegular', value)
    return (
        <div>
            ChildRegular, { value }
        </div>
    )
}

export default ChildRegular