import React from 'react'

class Display extends React.Component {

    render() {
    return (
        <div className="result">
            <div className="calc-prev">{this.props.history}</div>
            <div className="calc-display">{this.props.value}</div>
        </div>
    )
}
}

export default Display
