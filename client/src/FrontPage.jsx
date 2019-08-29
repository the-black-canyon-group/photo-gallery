import React from 'react';

class FrontPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imagesList: [],
        }
    }
    
    render() {
        return (
            <div>
                <div className="ptgFrontpage">
                    <div className="ptgFrontpageMainImg">
                        <div className="ptgFrontpageImgContainer">
                            <img className="ptgFrontpageImg" onClick={this.props.Car0} src={this.props.imagesList[0] && this.props.imagesList[0].image}></img>
                        </div>
                    </div>
                    <div className="ptgFrontpageExtraImgs">
                        <div className="ptgFrontpageImg2Container">
                            <img className="ptgFrontpageImg2" onClick={this.props.Car1} src={this.props.imagesList[1] && this.props.imagesList[1].image}></img>
                        </div>
                        <div className="ptgFrontpageImg2Container">
                            <img className="ptgFrontpageImg2" onClick={this.props.Car2} src={this.props.imagesList[2] && this.props.imagesList[2].image}></img>
                        </div>
                        <div className="ptgFrontpageImg2Container">
                            <img className="ptgFrontpageImg2" onClick={this.props.Car3} src={this.props.imagesList[3] && this.props.imagesList[3].image}></img>
                        </div>
                        <div className="ptgFrontpageImg2Container">
                            <img className="ptgFrontpageImg2" onClick={this.props.Car4} src={this.props.imagesList[4] && this.props.imagesList[4].image}></img>
                            <div className="enterCarousel" onClick={this.props.showCarousel}>view</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FrontPage;