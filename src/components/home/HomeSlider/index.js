import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

// import SliderImage01 from "../../images/slider-01.png"
// import SliderImage02 from "../../images/slider-02.png"
// import SliderImage03 from "../../images/slider-03.png"

import {
  Break,
  SliderDot,
  SlideCaption,
  SlideCaptionContainer,
  StrongText,
  SlideCaptionButton,
  BackgroundImageContainer01,
  BackgroundImageContainer02,
  BackgroundImageContainer03
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
      autoplaySpeed: 4000000,
      pauseOnHover: false,
      arrows: false,
      className: "slides",
      dotsClass: "slick-dots slick-thumb",
    }
    return (
      <Slider {...settings}>
        <div>
          <BackgroundImageContainer01>
            <SlideCaptionContainer>
              <SlideCaption>
                Oferecemos <Break />
                <StrongText>assistência e consultoria</StrongText>
                <Break /> para o <StrongText>agronegócio</StrongText>
              </SlideCaption>
              <SlideCaptionButton to="/a-versagro">
                Conheça a Versagro
              </SlideCaptionButton>
            </SlideCaptionContainer>
          </BackgroundImageContainer01>
        </div>
        <div>
          <BackgroundImageContainer02>
            <SlideCaptionContainer>
              <SlideCaption>
                Soluções <StrongText>corporativas</StrongText> <Break />
                <StrongText>e tecnológicas para otimizar</StrongText>
                <Break /> a gestão da sua empresa
              </SlideCaption>
              <SlideCaptionButton to="/solucoes">
                Conheça nossas Soluções
              </SlideCaptionButton>
            </SlideCaptionContainer>
          </BackgroundImageContainer02>
        </div>
        <div>
          <BackgroundImageContainer03>
            <SlideCaptionContainer>
              <SlideCaption>
                Podemos te ajudar? <Break />
                Entre em <StrongText>contato</StrongText> com um
                <Break />
                <StrongText>consultor especializado</StrongText>
              </SlideCaption>
              <SlideCaptionButton to="/contato">
                Entre em Contato
              </SlideCaptionButton>
            </SlideCaptionContainer>
          </BackgroundImageContainer03>
        </div>
      </Slider>
    )
  }
}

export default HomeSlider

// class HomeSlider extends React.Component {
//   render() {
//     var settings = {
//       customPaging: function () {
//         return (
//           <a href="_blank">
//             <SliderDot />
//           </a>
//         )
//       },
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       autoplay: true,
//       autoplaySpeed: 4000000,
//       pauseOnHover: false,
//       arrows: false,
//       className: "slides",
//       dotsClass: "slick-dots slick-thumb",
//     }
//     return (
//       <Slider {...settings}>
//         <div>
//           <SlideContainer image={SliderImage01}>
//             <SlideCaptionContainer>
//               <SlideCaption>
//                 Oferecemos <Break />
//                 <StrongText>assistência e consultoria</StrongText>
//                 <Break /> para o <StrongText>agronegócio</StrongText>
//               </SlideCaption>
//               <SlideCaptionButton to="/a-versagro">
//                 Conheça a Versagro
//               </SlideCaptionButton>
//             </SlideCaptionContainer>
//           </SlideContainer>
//         </div>
//         <div>
//           <SlideContainer image={SliderImage02}>
//             <SlideCaptionContainer>
//               <SlideCaption>
//                 Soluções <StrongText>corporativas</StrongText> <Break />
//                 <StrongText>e tecnológicas para otimizar</StrongText>
//                 <Break /> a gestão da sua empresa
//               </SlideCaption>
//               <SlideCaptionButton to="/solucoes">
//                 Conheça nossas Soluções
//               </SlideCaptionButton>
//             </SlideCaptionContainer>
//           </SlideContainer>
//         </div>
//         <div>
//           <SlideContainer image={SliderImage03}>
//             <SlideCaptionContainer>
//               <SlideCaption>
//                 Podemos te ajudar? <Break />
//                 Entre em <StrongText>contato</StrongText> com um
//                 <Break />
//                 <StrongText>consultor especializado</StrongText>
//               </SlideCaption>
//               <SlideCaptionButton to="/contato">
//                 Entre em Contato
//               </SlideCaptionButton>
//             </SlideCaptionContainer>
//           </SlideContainer>
//         </div>
//       </Slider>
//     )
//   }
// }