import React from "react";
import ChildRegular from "./ChildRegular";
import ChildPure from "./ChildPure";
import { render } from "@testing-library/react";

// Если бы был функциональным компонентом-при '===' стейте из setInteval нет ререндера компонента!
//Если комплексный тип данных-использовать shouldComponentUpdate из папок с соответствующими примерами
class ParentOfFunctional extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            primitiveValue: 5
        }
    }

    componentDidMount() {
        setInterval(() => 
            this.setState((prevState) => {
                // c: 1 или 0 каждые 3 секунды,
                // в случае повторного одинакового значения ререндер не происходит
                return { primitiveValue: '5' };
            }), 3000);
    }

    //Можем просто запретить ререндер на уровне родителя, тогда можно не писать memo в дочернем
    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     return this.state.primitiveValue != nextState.primitiveValue; // 5 != '5' false
    // }

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

export default ParentOfFunctional