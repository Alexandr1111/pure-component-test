import React from "react";
import ChildRegular from "./ChildRegular";
import ChildPure from "./ChildPure";

// т.к работа с примитивами-тут можно не писать shouldComponentUpdate, extends pureComponent даст ожидаемый эффект
class ParentWithPrimitive extends React.PureComponent {  
    constructor(props) {
        super(props)
        this.state = {
            primitiveValue: 5
        }
    }

    componentDidMount() {
        setInterval(() => 
            this.setState((prevState) => {
                // c: 1 или 0 каждые 3 секунды,
                // в случае повторного одинакового значения ререндер не происходит
                return { primitiveValue: Number(Math.random().toFixed()) };
            }), 3000);
    }

    /* ===== Или же как в случае со сложными типами, хотя в этот раз у нас у нас есть опция написать просто pureComponent
             без лишнего lifecycle метода..
    shouldComponentUpdate( nextProps, nextState, nextContext ) {
        // Если примитивное значение в стейте не равно примитивному значению результата setState,
        // то компонент Parent и его дочерние не перерендериваются
        return this.state.primitiveValue !== nextState.primitiveValue;
    }
    ===== */

    render() {
        console.log('render Parent');
        return (
            <>
                <div>
                    hello from parent
                </div>

                <>
                    <ChildRegular value={this.state.primitiveValue} />
                    <ChildPure value={this.state.primitiveValue} />
                </>
            </>
        )
    }
}

export default ParentWithPrimitive
