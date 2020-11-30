import React from "react";
import ChildRegular from "./ChildRegular";
import ChildPure from "./ChildPure";
import { compareObjects } from "./utils/utils";

// т.к работа с объектами-тут extends pureComponent не даст ожидаемого рез-та
class Parent extends React.Component {  
    constructor(props) {
        super(props)
        this.state = {
            obj: { a: 65, b: 66 }
        }
    }

    componentDidMount() {
        setInterval(() => 
            this.setState((prevState) => {
                // c: 1 или 0 каждые 3 секунды,
                // в случае повторного одинакового значения ререндер не происходит
                return { obj: { ...prevState.obj, c: Number(Math.random().toFixed()) } };
            }), 3000);
    }

    shouldComponentUpdate( nextProps, nextState, nextContext ) {
        // Если объект в стейте не равен объекту результата setState,
        // то компонент Parent и его дочерние не перерендериваются

        return !compareObjects(this.state.obj, nextState.obj);
        
        // Способ, не чувствительный к положению ключей объекта
        // return JSON.stringify(this.state.obj) !== JSON.stringify(nextState.obj);
    }

    render() {
        console.log('render Parent');
        return (
            <>
                <div>
                    hello from parent
                </div>

                <>
                    <ChildRegular value={this.state.obj} />
                    <ChildPure value={this.state.obj} />
                </>
            </>
        )
    }
}

export default Parent
