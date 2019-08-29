import React from 'react';

class Description extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {
        return (
            <div>
                <p>{this.props.image + 1} / {this.props.imagesList.length}</p>
                <p>{this.props.imagesList[this.props.image] && this.props.imagesList[this.props.image].description}</p>
            </div>
        )
    }
}

export default Description;