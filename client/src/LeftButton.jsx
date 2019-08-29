import React from 'react';

class LeftButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    

    render() {
        return (
            <div className="ptgLeftButton" onClick={this.props.setAboveState}>Left Button</div>
        )
    }
}

export default LeftButton;