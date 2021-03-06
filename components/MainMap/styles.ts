import styled from "styled-components";

export const Container = styled.div`
  @import "mapbox-gl/dist/mapbox-gl.css";

  width: 100%;
  height: 80vh;
  background-color: #121212;

  .map-container {
    width: 100%;
    height: 100%;
    z-index: 1;
  }
  .mapboxgl-marker {
    z-index: 2;
  }

  .mapboxgl-ctrl-bottom-right,
  .mapboxgl-ctrl-bottom-left {
    display: none;
  }

  .mapboxgl-ctrl-attrib-inner {
    a {
      display: none;
    }
  }

  @media (max-width: 768px) {
    height: 130vh;
  }
`;
