import React from "react";

class ChildRegular extends React.Component { 
    render() {
        console.log('render ChildRegular', this.props.value)
        return (
            <div>
                ChildRegular, { this.props.value }
            </div>
        )
    }
}

export default ChildRegular