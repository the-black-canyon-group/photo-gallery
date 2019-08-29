import React from 'react';
import MiniCarousel from './MiniCarousel.jsx';
import Description from './Description.jsx';

class DescriptionCarousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return (
            <div>
                <div className="exitCarousel" onClick={this.props.unshowCarousel}>exit</div>
                <MiniCarousel imagesList={this.props.imagesList} image={this.props.image}/>
                <Description imagesList={this.props.imagesList} image={this.props.image}/>
            </div>
        )
    }
}

export default DescriptionCarousel;