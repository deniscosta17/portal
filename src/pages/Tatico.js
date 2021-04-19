import React, {Component} from "react";
import "../styles/style.css";
import GoogleMapReact from "google-map-react";
import MyMarker from "./MyMarker";
import MyMarkerGreen from "./MyMarker_";
import MyMarkerYellow from "./MyMarkerYellow";

// implementation of this function is needed for codesandbox example to work
// you can remove it otherwise
const distanceToMouse = (pt, mp) => {
  if (pt && mp) {
    // return distance between the marker and mouse pointer
    return Math.sqrt(
      (pt.x - mp.x) * (pt.x - mp.x) + (pt.y - mp.y) * (pt.y - mp.y)
    );
  }
};

class Tatico extends  Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="row">
                <div className="col-12" style={{width:'100vh', height:'100vh'}}>

                <GoogleMapReact
                    bootstrapURLKeys={{
                    // remove the key if you want to fork
                        key: "AIzaSyDl2nVG-fWjrowBcWR22ezQjxVTDMszyDs",
                        language: "en",
                        region: "US"
                    }}
                        defaultCenter={{ lat: -14.2400732 , lng: -53.1805017 }}
                        defaultZoom={4}
                        distanceToMouse={distanceToMouse}
                    >
                     
                    <MyMarker lat={-23.6267} lng={-46.6553} text={1} tooltip={'Aeroporto Internacional de São Paulo-Guarulhos'} />
                    <MyMarker lat={-22.332500} lng={-41.739560} text={1} tooltip={'Aeroporto Internacional Tom Jobim-Rio Galeão'} />
                    <MyMarker lat={-19.632690} lng={-43.962420} text={1} tooltip={'Aeroporto Internacional de Belo Horizonte-Confins'} />
                    <MyMarker lat={-23.0064424} lng={-47.1444675} text={1} tooltip={'Aeroporto Internacional de Viracopos-Campinas'} />
                    <MyMarker lat={-22.9107188} lng={-43.1641782} text={1} tooltip={'Aeroporto do Rio de Janeiro-Santos Dumont'} />
                    <MyMarker lat={-21.26083} lng={-50.64278} text={1} tooltip={'Aeroporto Internacional do Recife-Guararapes'} />

                    <MyMarkerGreen lat={ -29.9952684 } lng={ -51.167464 } text={2} tooltip={"Aeroporto Internacional de Porto Alegre-Salgado Filho"} />
                    <MyMarkerGreen lat={ -12.811801316582619 } lng={ -38.38073730468751 } text={2} tooltip={""} />

                    <MyMarkerGreen lat={ -23.625080 } lng={ -46.661320 } text={2} tooltip={"Aeroporto de São Paulo-Congonhas"} />
                    <MyMarkerYellow lat={-15.873670} lng={-47.913190} text={3} tooltip={"Aeroporto Internacional de Brasília"} />
                </GoogleMapReact>

                </div>
            </div>
        );
    }

}
export default Tatico;