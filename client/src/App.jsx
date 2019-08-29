import React from 'react';
import FrontPage from './FrontPage.jsx';
import CarouselMain from './CarouselMain.jsx';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imagesList: [],
            viewCarousel: false,
            image: 0,
        }
        this.showCarousel = this.showCarousel.bind(this);
        this.unshowCarousel = this.unshowCarousel.bind(this);
        this.leftButton = this.leftButton.bind(this);
        this.rightButton = this.rightButton.bind(this);
        this.change0 = this.change0.bind(this);
        this.change1 = this.change1.bind(this);
        this.change2 = this.change2.bind(this);
        this.change3 = this.change3.bind(this);
        this.change4 = this.change4.bind(this);
    }

    componentDidMount() {
        fetch('http://localhost:3003/api/propertyImages/11')
            .then((data) => { return data.json() })
            .then((result) => { 
                this.setState( { imagesList: result })})
            .catch((err) => { return console.log('This is my error: ', err)} )
    }

    showCarousel() {
        this.setState({
            viewCarousel: true,
        })
    }

    unshowCarousel() {
        this.setState({
            viewCarousel: false,
        })
    }
    
    leftButton() {
        let numberOfImages = this.state.imagesList.length;
        if (this.state.image === 0) {
            this.setState({
                image: (numberOfImages - 1)
            })
        } else {
            this.setState({
                image: (this.state.image - 1),
            })
        }
    }

    rightButton() {
        let numberOfImages = this.state.imagesList.length;
        if (this.state.image === (numberOfImages - 1)) {
            this.setState({
                image: 0
            })
        } else {
            this.setState({
                image: (this.state.image + 1),
            })
        }
    }

    change0() {
        this.setState({
            image: 0,
            viewCarousel: true,
        })
    }

    change1() {
        this.setState({
            image: 1,
            viewCarousel: true,
        })
    }

    change2() {
        this.setState({
            image: 2,
            viewCarousel: true,
        })
    }

    change3() {
        this.setState({
            image: 3,
            viewCarousel: true,
        })
    }

    change4() {
        this.setState({
            image: 4,
            viewCarousel: true,
        })
    }

    render() {
        let carousel;
        if (this.state.viewCarousel) {
            carousel = <CarouselMain imagesList={this.state.imagesList} image={this.state.image} leftButton={this.leftButton} rightButton={this.rightButton} unshowCarousel={this.unshowCarousel}/>
        }

        return (
            <div>
                <FrontPage imagesList={this.state.imagesList} Car0={this.change0} Car1={this.change1} Car2={this.change2} Car3={this.change3} Car4={this.change4} showCarousel={this.showCarousel}/>

                {carousel}
            </div>
        )
    }
}

export default App;