import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import SliderImage01 from './SliderImage01'
import SliderImage02 from './SliderImage02'
import SliderImage03 from './SliderImage03'

import { SliderDot } from './styled'


class HomeSlider extends React.Component {
  render() {
    var settings = {
      customPaging: function() {
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
      autoplaySpeed: 4000,
      pauseOnHover: false,
      arrows: false,
      className: 'slides',
      dotsClass: 'slick-dots slick-thumb'
    }
    return (
      <Slider {...settings}>
        <div>
          <SliderImage01 />
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
