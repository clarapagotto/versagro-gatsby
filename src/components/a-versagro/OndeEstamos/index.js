import React, { useState } from "react"
import ReactMapGL, { Marker, NavigationControl } from "react-map-gl"

import {
  OndeEstamosWrapper,
  OndeEstamosContainer,
  Title,
  Icon,
  CustomMapStyle,
  ButtonsContainer,
} from "./styled"

export default function OndeEstamos() {
  const [viewport, setViewport] = useState({
    latitude: -20.7470,
    longitude: -42.8814,
    width: "100%",
    height: "240px",
    zoom: 15,
    bearing: 0,
    pitch: 0,
  })

  return (
    <OndeEstamosWrapper>
      <CustomMapStyle />
      <OndeEstamosContainer>
        <Title>Onde Estamos</Title>
        <ReactMapGL
          {...viewport}
          scrollZoom={false}
          mapboxApiAccessToken="pk.eyJ1IjoibGF1cm8tbGFkZWlyYSIsImEiOiJja2N0YjZuc20xZTJuMnJvY2xnYzZoNm9rIn0.lt1m48ii9VMIPHNnWtT3qg"
          mapStyle="mapbox://styles/lauro-ladeira/ckctbjqn31qfk1iorevt6nl0u"
          onViewportChange={viewport => {
            setViewport(viewport)
          }}
        >
          <Marker latitude={-20.7470} longitude={-42.8814}>
            <Icon />
          </Marker>
          <ButtonsContainer>
            <NavigationControl showCompass={false} />
          </ButtonsContainer>
        </ReactMapGL>
      </OndeEstamosContainer>
    </OndeEstamosWrapper>
  )
}
