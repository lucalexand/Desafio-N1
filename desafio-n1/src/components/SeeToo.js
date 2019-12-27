import React, { Component } from 'react';
import Shelf from './Shelf';
import Slider from 'infinite-react-carousel';

class SeeToo extends Component{
    constructor(props) {
        super(props);

        this.state = {carousel: this.props.products};
    }
    render() {
        const settings =  {
            dots: true,
            dotsScroll: 2,
            slidesToShow: 4
        };
        return(
            <div className="SeeToo">
                <h2>Quem viu, viu também</h2>
                <Slider {...settings}>
                    <div className="SeeToo-item">
                        <Shelf name={this.state.carousel[0].name} product={this.state.carousel[0]} />
                    </div>
                    <div className="SeeToo-item">
                        <Shelf name={this.state.carousel[1].name} product={this.state.carousel[1]} />
                    </div>
                    <div className="SeeToo-item">
                        <Shelf name={this.state.carousel[2].name} product={this.state.carousel[2]} />
                    </div>
                    <div className="SeeToo-item">
                        <Shelf name={this.state.carousel[3].name} product={this.state.carousel[3]} />
                    </div>
                    <div className="SeeToo-item">
                        <Shelf name={this.state.carousel[0].name} product={this.state.carousel[0]} />
                    </div>
                    <div className="SeeToo-item">
                        <Shelf name={this.state.carousel[1].name} product={this.state.carousel[1]} />
                    </div>
                    <div className="SeeToo-item">
                        <Shelf name={this.state.carousel[2].name} product={this.state.carousel[2]} />
                    </div>
                    <div className="SeeToo-item">
                        <Shelf name={this.state.carousel[3].name} product={this.state.carousel[3]} />
                    </div>
                </Slider>
            </div>
        );  
    }
}

export default SeeToo;