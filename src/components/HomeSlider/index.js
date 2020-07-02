import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import SliderImage01 from "./SliderImage01"
import SliderImage02 from "./SliderImage02"
import SliderImage03 from "./SliderImage03"

import {
  Break,
  SliderDot,
  SlideCaption,
  SlideCaptionContainer,
  StrongText,
  SlideCaptionButton
} from "./styled"

class HomeSlider extends React.Component {
  render() {
    var settings = {
      customPaging: function () {
        return (
          <a href="_blank">
            <SliderDot />
          </a>
        )
      },
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 40000,
      pauseOnHover: false,
      arrows: false,
      className: "slides",
      dotsClass: "slick-dots slick-thumb",
    }
    return (
      <Slider {...settings}>
        <div>
          <SliderImage01 />
          <SlideCaptionContainer>
            <SlideCaption>
              Oferecemos <Break />
              <StrongText>assistência e consultoria</StrongText>
              <Break /> para o <StrongText>agronegócio</StrongText>
            </SlideCaption>
            <SlideCaptionButton to="/a-versagro">Conheça a Versagro</SlideCaptionButton>
          </SlideCaptionContainer>
        </div>
        <div>
          <SliderImage02 />
        </div>
        <div>
          <SliderImage03 />
        </div>
      </Slider>
    )
  }
}

export default HomeSlider
