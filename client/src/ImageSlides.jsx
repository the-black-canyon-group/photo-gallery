import React from 'react';

class ImageSlides extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: 0,
        }
    }

    componentDidMount() {
        this.setState({
            image: this.props.image,
        })
    }

    render() {
        return (
            <div className="ImageSlides">
                    <img className="ImageSlidesImg" src={this.props.imagesList[this.props.image] && this.props.imagesList[this.props.image].image}></img>
            </div>
        )
    }
}

export default ImageSlides;