import React from "react";

class ChildRegular extends React.Component { 
    render() {
        console.log('render ChildRegular')
        return (
            <div>
                ChildRegular, {this.props.num}
            </div>
        )
    }
}

export default ChildRegular