import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

class Carousel extends Component {
    constructor() {
        super();
        this.state = {
            index: 0
        };
    }

    handlePrev = () => {
        this.setState({
            index: (this.state.index - 1 + images.length) % images.length
        });
    };

    handleNext = () => {
        this.setState({
            index: (this.state.index + 1) % images.length
        });
    };

    render() {
        let currentImage = images[this.state.index];

        return (
            <>
                <div className="mainContainer">
                    <div className="arrowIcon"><ArrowBackIosIcon onClick={this.handlePrev} /></div>
                    <div className="imageBox">
                        <img src={currentImage.img} alt="" />
                        
                    </div>
                    <div className="imageContainer">
                        <div className="titleBox">
                            <p>{currentImage.title}</p>
                        </div>
                        <div className="subTitleBox">
                            <p>{currentImage.subtitle}</p>
                        </div>
                    </div>
                    <div className="arrowIcon1"><ArrowForwardIosIcon onClick={this.handleNext} /></div>
                </div>
            </>
        );
    }
}

export default Carousel;
