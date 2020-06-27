import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import SliderImage01 from './SliderImage01'
import SliderImage02 from './SliderImage02'
import SliderImage03 from './SliderImage03'


class HomeSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      pauseOnHover: false
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
