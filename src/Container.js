import React from 'react';
import ReactDOM from 'react-dom';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import Recursos from './pages/Recursos';
import Estrategico from './pages/Estrategico';
import PreTatico from './pages/PreTatico';
import Tatico from "./pages/Tatico";
import PosOperacao from './pages/PosOperacao';



export class Container extends React.Component  {

  constructor(){
      super();

        this.state = {
          showComp : true,
          showStrat: false,
          showPre: false,
          showTatico: false,
          showPos: false
        }
  }

  handleClick = () => {
      this.setState({
        showComp: true,
        showStrat: false,
        showPre: false,
        showTatico: false,
        showPos: false
    })
  }

  enableEstrat = () => {
    this.setState({
        showComp: false,
        showStrat: true,
        showPre: false,
        showTatico: false,
        showPos: false
    })
  }

  enablePre = () => {
    this.setState({
        showComp: false,
        showStrat: false,
        showPre: true,
        showTatico: false,
        showPos: false
    })
  }

  enableTatical = () => {
    this.setState({
        showComp: false,
        showStrat: false,
        showPre: false,
        showTatico: true,
        showPos: false
    })
  }


  enablePos = () => {
      this.setState({
        showComp: false,
        showStrat: false,
        showPre: false,
        showTatico: false,
        showPos: true
    })
  }

  render() {

    const { showComp, showStrat, showPre, showTatico, showPos } = this.state;

    return(
      <body>
        <div className="container-fluid">
          <div id='div-container-box'>
              <div class="row shadow p-3 mb-5 bg-white rounded">
                <div class="col-sm">
                  <Button color="secondary" size="lg" block onClick={this.handleClick}>Recursos</Button>
                </div>
                <div class="col-sm">
                  <Button color="primary" size="lg" block onClick={this.enableEstrat}>Estratégico</Button>
                </div>
                <div class="col-sm">
                  <Button color="info" size="lg" block onClick={this.enablePre}>Pré-Tatico</Button>
                </div>
                <div class="col-sm">
                  <Button color="success" size="lg" block onClick={this.enableTatical}>Tatico</Button>
                </div>
                <div class="col-sm">
                  <Button color="warning" size="lg" block onClick={this.enablePos}>Pós-Operação</Button>
                </div>
              </div>
          </div>

          <div class="shadow p-3 mb-5 bg-light rounded" id="div-box-shadow">
            
              {showComp && <Recursos /> }
              {showStrat && <Estrategico /> }
              {showPre && <PreTatico /> }
              {showTatico && <Tatico /> }
              {showPos && <PosOperacao /> }

          </div>

        </div>
      </body>
    )
  }
}