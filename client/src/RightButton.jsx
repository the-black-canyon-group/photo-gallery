import React from 'react';

class RightButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="ptgRightButton" onClick={this.props.setAboveState}>Right Button</div>
        )
    }
}

export default RightButton;