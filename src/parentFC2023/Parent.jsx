import React, { useCallback, useState } from "react";
import { ChildPure } from "./ChildPure";

export const Parent = () => {
    const [value, setValue] = useState(5);
    const [otherState, setOtherState] = useState(999)

    const clickHandler = useCallback(() => {
        return setOtherState(() =>  Math.random() * 1000);
    }, [])

    const clickHandler2 = () => {
        return setValue(() => Math.random() * 1000);
    }

    console.log('render Parent');
    return (
        <>
            <div>
                hello from parent, value: {value}
                {otherState}
            </div>
            <button onClick={clickHandler2}>click me2</button>

            <>
                {/*<ChildRegular value={value} onClick={clickHandler} />*/}
                <ChildPure value={value} onClick={clickHandler} />
            </>
        </>
    )
}