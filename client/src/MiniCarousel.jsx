import React from 'react';

class MiniCarousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }



    render() {
        let firstImage = this.props.image - 1;
        if (this.props.image === 0) {
            firstImage = 0;
        }
        if (this.props.image === (this.props.imagesList.length - 1)) {
            firstImage = (this.props.imagesList.length - 3);
        }
        return (
            <div className="miniCar">
                <img className="miniCarImg" src={this.props.imagesList[firstImage] && this.props.imagesList[firstImage].image}></img>
                <div className="spaceDiv"></div>
                <img className="miniCarImg" src={this.props.imagesList[firstImage + 1] && this.props.imagesList[firstImage + 1].image}></img>
                <div className="spaceDiv"></div>
                <img className="miniCarImg" src={this.props.imagesList[firstImage + 2] && this.props.imagesList[firstImage + 2].image}></img>
            </div>
        )
    }
}

export default MiniCarousel;