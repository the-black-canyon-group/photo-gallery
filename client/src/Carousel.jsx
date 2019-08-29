import React from 'react';
import ImageSlides from './ImageSlides.jsx';
import LeftButton from './LeftButton.jsx';
import RightButton from './RightButton.jsx';

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        
        }
    }

    render() {
        return (
            <div>
                <div className="ptgCarouselImg">
                    <LeftButton currentImage={this.props.image} setAboveState={this.props.setStateLeft}/>
                    <ImageSlides imagesList={this.props.imagesList} image={this.props.image}/>
                    <RightButton currentImage={this.props.image} setAboveState={this.props.setStateRight}/>
                </div>
            </div>
        )
    }
}

export default Carousel;