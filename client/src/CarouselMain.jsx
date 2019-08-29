import React from 'react';
import Carousel from './Carousel.jsx';
import DescriptionCarousel from './DescriptionCarousel.jsx';

class CarouselMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {
        return (
            <div className="descriptionCarousel" className="zIndex">
                <Carousel imagesList={this.props.imagesList} image={this.props.image} setStateLeft={this.props.leftButton} setStateRight={this.props.rightButton}/>
                <DescriptionCarousel imagesList={this.props.imagesList} image={this.props.image} unshowCarousel={this.props.unshowCarousel}/>
            </div>
        )
    }
}

export default CarouselMain;