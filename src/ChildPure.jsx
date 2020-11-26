import React from "react";

class ChildPure extends React.PureComponent {  //Если Pure, будет ререндериться только родительский
    render() {
        console.log('render ChildPure')
        return (
            <>
                ChildPure, { this.props.num }
            </>
        )
    }
}

export default ChildPure