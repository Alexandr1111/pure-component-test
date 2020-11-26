import React from "react";
import ChildRegular from "./ChildRegular";
import ChildPure from "./ChildPure";

class Parent extends React.Component {
    state = {
        a: '66'
    }
    //Первый раз свой рендер и второй раз, т.к увидит что 66(новый стейт) != '66'(init state) по типу.
    //Если поставить init state 66, то будет не 2, а 1 рендер.

    componentDidMount() {
        setInterval(() => 
            this.setState(() => ({ a: 66 }))
            , 3000);
        // setInterval(() => 
        //     this.setState(prevState =>
        //         ( {a: [...prevState.a,68]} )
        //     )
        //     ,3000);
    }

    // ===== то-же что и React.PureComponent =====
    // shouldComponentUpdate( nextProps, nextState, nextContext ) {
    //     return this.state.a !== nextState.a || this.props !== nextProps;
    // }

    render() {
        console.log(`render Parent`);
        return (
            <>
                <div>
                    hello from parent
                </div>

                <>
                    <ChildRegular num={this.state.a} />
                    <ChildPure num={this.state.a} />
                </>
            </>
        )
    }
}

export default Parent
