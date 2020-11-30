import React from "react";

//Если PureComponent, будет ререндериться только родительский и ChildRegular
class ChildPure extends React.PureComponent {  
    render() {
        console.log('render ChildPure', this.props.value)
        return (
            <>
                ChildPure, { this.props.value.a }
            </>
        )
    }
}

export default ChildPure