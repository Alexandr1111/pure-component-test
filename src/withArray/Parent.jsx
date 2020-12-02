import React from "react";
import ChildRegular from "./ChildRegular";
import ChildPure from "./ChildPure";
import { compareArrays } from "../utils/utils";

const incomingArr = [65, 66, 67];

// т.к работа с массивами-тут extends pureComponent не даст ожидаемого рез-та
class ParentWithArray extends React.Component {  
    constructor(props) {
        super(props)
        this.state = {
            arr: [65, 66]
        }
    }

    //Есть массив в стейте, если приходящий массив(например, из пропсов) будет иметь такие-же элементы,
    //то pureComponent не будет ререндерится. Если элементы приходящего массива не будут иметь
    //такие же элементы как в стейтовом, то они будут.

    componentDidMount() {
        setInterval(() => 
            this.setState(() => {
                return { arr: incomingArr };
            }), 3000);
    }

    shouldComponentUpdate( nextProps, nextState, nextContext ) {
        // Если объект в стейте не равен объекту результата setState,
        // то компонент Parent и его дочерние не перерендериваются

        return !compareArrays(this.state.arr, nextState.arr);
    }

    render() {
        console.log('render Parent');
        return (
            <>
                <div>
                    hello from parent
                </div>

                <>
                    <ChildRegular value={this.state.arr} />
                    <ChildPure value={this.state.arr} />
                </>
            </>
        )
    }
}

export default ParentWithArray
