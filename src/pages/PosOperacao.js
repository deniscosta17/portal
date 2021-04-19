import React, {Component, useState, useEffect} from "react";
import { Badge,Table, Button, ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle, Dropdown } from 'reactstrap';
import { Card, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faClipboardList } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

class PosOperacao extends  Component{
    constructor(props) {
        super(props);
    }

    state = {
        currency: '',
        dropDownOpen: '',
        dropDownOpenB: '',
        dropDownOpenC: '',
        dropDownOpenD: '',
     }

    toggle = () => {
        this.setState({
           dropDownOpen: !this.state.dropDownOpen,
           dropDownOpenB: !this.state.dropDownOpenB,
           dropDownOpenC: !this.state.dropDownOpenC,
           dropDownOpenD: !this.state.dropDownOpenD,
        })
    }
    
    handleChange = (code) => {
        this.setState({
            currency: code,
            
        })
    }
  
    render() {

        const Clock = () => {
            const [currentCount, setCount] = useState(59);
            const timer = () => setCount(currentCount - 1);
        
            useEffect(
                () => {
                    if (currentCount <= 0) {
                        return;
                    }
                    const id = setInterval(timer, 1000);
                    return () => clearInterval(id);
                },
                [currentCount]
            );
        
            return <small>{currentCount}</small>;
        };

        return (
            <>
            <div class="d-flex flex-row">
                <div className="col-md-12 mx-auto">
                    <div class="shadow-lg p-3 mb-5 bg-white rounded">
                        <Card>
                        <Card.Header as="h5" id='card-head-anuario' style={ {backgroundColor: "#333", borderColor: "#333" , color:"#fff" } }>Medidas ATFM</Card.Header>
                            <Card.Body>
                                <Card.Title>
                                       <b class="text-primary">Medidas ATFM</b>   <Badge href="#" color="secondary">Encerradas </Badge> 
                                       <b class="text-primary"> Data Alvo: </b>   <Badge href="#" color="secondary">05/04/2021</Badge> 
                                       <br/>
                                       <br/>
                                       <p class="text-center text-primary"><b>Nova Atualização</b></p>
                                       <p class="text-center"><Clock /></p>
                                </Card.Title>
                                <Card.Text>
                                </Card.Text>

                                <Table striped>
                                    <thead>
                                        <tr>
                                        <th>Aplicação</th>
                                        <th>Encerramento</th>
                                        <th>Localidades de Origem</th>
                                        <th>Localidades de Destino</th>
                                        <th>Medida ATFM</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <th scope="row">1</th>
                                        <td>05/04/2021 22:16:17</td>
                                        <td>   
                                            <Badge href="#" color="warning">SBCW </Badge> 
                                        </td>
                                        <td>   
                                            <Badge href="#" color="primary">SBXP </Badge> 
                                        </td>
                                        <td>20 NM, por aeródromo, para ingresso na TMA</td>
                                        </tr>
                                        <tr>
                                        <th scope="row">2</th>
                                        <td>05/04/2021 22:17:21</td>
                                        <td>   
                                            <Badge href="#" color="warning">SBCW </Badge> 
                                        </td>
                                        <td>   
                                            <Badge href="#" color="primary">SBXP </Badge> 
                                        </td>
                                        <td>20 NM, por aeródromo, para ingresso na TMA</td>
                                        </tr>
                                        <tr>
                                        <th scope="row">3</th>
                                        <td>05/04/2021 22:20:33</td>
                                        <td>   
                                            <Badge href="#" color="warning">SBCW </Badge> 
                                        </td>
                                        <td>   
                                            <Badge href="#" color="primary">SBXP </Badge> 
                                        </td>
                                        <td>20 NM, por aeródromo, para ingresso na TMA</td>
                                        </tr>
                                    </tbody>
                                </Table>


                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
            <div class="d-flex flex-row">
                    <div className="col-md-4 mx-auto">
                        <Card className="cls-cards-wh shadow-sm mb-5 bg-white rounded">
                            <Card.Header as="h5" id='card-head-anuario' style={ {backgroundColor: "#333", borderColor: "#333" , color:"#fff" } }style={ {backgroundColor: "#333", borderColor: "#333" , color:"#fff" } }>Eventos Especiais</Card.Header>
                            <Card.Body>
                                <Card.Title id='card-title-anuario'>
                                    Acompanhe o planejamento para períodos de feriados, férias, CARNAVAL, NATAL e ANO NOVO.
                                    <p style={{marginTop: "10px"}}>Confira, a seguir, os anuários disponíveis:</p>
                                </Card.Title>
                                <Card.Text>
                                    <Form>
                                        <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Control as="select">
                                                <option>Selecione</option>
                                                <option>Anuário 2020</option>
                                                <option>Anuário 2019</option>
                                                <option>Anuário 2018</option>
                                                <option>Anuário 2017</option>
                                                <option>Anuário 2016</option>
                                        </Form.Control>
                                        </Form.Group>
                                    </Form>
                                </Card.Text>
                            
                            </Card.Body>
                        </Card>        
                    </div>
                    <div className="col-md-4 mx-auto">
                        <Card className="cls-cards-wh shadow-sm mb-5 bg-white rounded">
                            <Card.Header as="h5" id='card-head-anuario' style={ {backgroundColor: "#333", borderColor: "#333" , color:"#fff" } }style={ {backgroundColor: "#333", borderColor: "#333" , color:"#fff" } } >Briefing Diário Meteorológico</Card.Header>
                            <Card.Body>
                                <Card.Title id='card-title-anuario'>Informações meteorológicas que visam apoiar toda a comunidade aeronáutica
                                                                    na vigilância e previsões meteorológicas para auxiliar no planejamento
                                                                    e execução dos serviços ATM.
                                    <p style={{marginTop: "10px"}}>Selecione, a seguir, as opções disponíveis:</p>
                                </Card.Title>
                                <Card.Text>
                                    <Form>
                                        <Form.Group controlId="exampleForm.ControlSelect1" >
                                            <Form.Control as="select" >
                                                <option>Selecione</option>
                                                <option>Briefing Diario Meteorológico - Atualizado em 05/04/2021 </option>
                                                <option >Cinzas Vulcanicas - Atualizado em 04/04/2021 </option>
                                        </Form.Control>
                                        </Form.Group>
                                    </Form>
                                </Card.Text>
                            
                            </Card.Body>
                        </Card>    
                    </div>
                <div className="col-md-4 mx-auto">
                    <Card className="cls-cards-wh shadow-sm mb-5 bg-white rounded">
                        <Card.Header as="h5" id='card-head-anuario' style={ {backgroundColor: "#333", borderColor: "#333" , color:"#fff" } }>Contingência</Card.Header>
                        <Card.Body>
                            <Card.Title id='card-title-anuario'>
                                   Os procedimentos de contingência são aqueles a serem adotados em eventos específicos, 
                                   de média ou longa duração, e que podem gerar impactos na malha aérea do país.
                                <p style={{marginTop: "10px"}}>Confira, a seguir, as opções disponíveis:</p>
                            </Card.Title>
                            <Card.Text>
                                <Form>
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                        <Form.Control as="select">
                                            <option>Selecione</option>
                                            <option >Plano de Contingência - Atualizado em 25/05/2018 </option>
                                    </Form.Control>
                                    </Form.Group>
                                </Form>
                            </Card.Text>
                        
                        </Card.Body>
                    </Card>        
                    </div>
            </div>
            <div class="d-flex flex-row" >
                <div className="col-md-4 mt-1">
                        <Card className="cls-cards-wh shadow-sm mb-5 bg-white rounded">
                            <Card.Header as="h5" id='card-head-anuario' style={ {backgroundColor: "#333", borderColor: "#333" , color:"#fff" } }>Relatórios Pós-Operações</Card.Header>
                            <Card.Body>
                                <Card.Title id='card-title-anuario'>
                                    Apresentam as análises do que foi planejado e executado, pontuando aspectos positivos e 
                                    negativos objetivando planejamentos futuros.
                                    <p style={{marginTop: "10px"}}>Confira, a seguir, as opções disponíveis:</p>
                                </Card.Title>
                                <Card.Text>
                                    <Form>
                                        <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Control as="select">
                                                <option>Selecione</option>
                                                <option>Anuário 2020</option>
                                                <option>Anuário 2019</option>
                                                <option>Anuário 2018</option>
                                                <option>Anuário 2017</option>
                                                <option>Anuário 2016</option>
                                        </Form.Control>
                                        </Form.Group>
                                    </Form>
                                </Card.Text>
                            
                            </Card.Body>
                        </Card>        
                </div>

                <div className="col-md-8 mt-1" >
                        <Card id='card-pos-rpl' >
                            <Card.Header id='card-head-anuario' style={ {backgroundColor: "#333", borderColor: "#333" , color:"#fff" } }  >Planos de Voo Repetitivo - RPL</Card.Header>
                            <Card.Body>
                                <Card.Title id='card-title-anuario'>
                                    O RPL é o Plano de Voo relativo a uma série de voos regulares, 
                                    com base no registro dos serviços de transporte aéreo, que se realiza frequentemente, 
                                    com idênticas características básicas, 
                                    apresentado pelo explorador para retenção e uso repetitivo pelos órgãos ATS.
                                </Card.Title>
                                <Card.Text>
                                <div class="row">
                                    <div class="col-sm">
                                        <h3>
                                            <Badge href="https://publicacoes.decea.mil.br/api//storage/uploads/files/54552bee-6f1e-41f8-aaf16978f52997fd.pdf" color="primary">
                                                Ref.: ICA 100-11
                                            </Badge> 
                                        </h3>
                                    </div>
                                    <div class="col-sm">
                                        <h4>
                                        
                                        <Badge href="http://portal.cgna.gov.br/files/abas/2020-11-26/painel_rpl/1721-painel_rpl_p2.pdf" color="primary" class='bdg-rpl' >
                                            <FontAwesomeIcon icon={faCalendarAlt} class='icon-calendar' /> 
                                                Calendario de RPL
                                            </Badge> 
                                        </h4>
                                            
                                    </div>

                                </div>               

                                <div class="row">
                                    <div class='col-md-8 mt-1' id='text-rpl'>
                                        <h3>
                                            <FontAwesomeIcon icon={faClipboardList} class='icon-clipboard' />    
                                            Edição 03/03/2021 a 11/04/2021
                                        </h3>
                                    </div>
                                
                                </div>
                                <div class='row' id='line-pos-rpl'>
                                    <p id='text-rpl-vigente'>RPL vigente em</p>
                                    <h4><Badge color='warning' id='badge-data-rpl' >05/04/2021</Badge></h4>
                                    
                                </div>

                                <div class='row'>
                                    <div class='col-sm'>
                                        <ButtonDropdown >
                                        <Dropdown isOpen={this.state.dropDownOpen} toggle={this.toggle} >
                                                <DropdownToggle color="primary" caret className="dropdown-toggle">
                                                    Compahias <Badge> 8</Badge>
                                                </DropdownToggle>
                                                <DropdownMenu className="currency-dropdown">
                                                        <DropdownItem dropDownValue="USD">AZUL</DropdownItem>
                                                        <DropdownItem dropDownValue="EUR">LINHAS AEREAS PARAGUAIAS</DropdownItem>
                                                        <DropdownItem dropDownValue="INR">TOTAL</DropdownItem>
                                                        <DropdownItem dropDownValue="AFT">GOL</DropdownItem>
                                                        <DropdownItem dropDownValue="SID">SIDERAL</DropdownItem>
                                                        <DropdownItem dropDownValue="MAP">MAP</DropdownItem>
                                                        <DropdownItem dropDownValue="LAT">LATAM</DropdownItem>
                                                        <DropdownItem dropDownValue="PASS">PASSAREDO</DropdownItem>

                                                </DropdownMenu>
                                            </Dropdown>
                                        </ButtonDropdown>
                                    </div>
                                    <div class='col-sm'>
                                        <ButtonDropdown >
                                        <Dropdown  >
                                                <DropdownToggle color="primary" caret className="dropdown-toggle">
                                                    Localidades <Badge> 91</Badge>
                                                </DropdownToggle>
                                                <DropdownMenu className="currency-dropdown">
                                                        <DropdownItem dropDownValue="USD">AZUL</DropdownItem>
                                                        <DropdownItem dropDownValue="EUR">LINHAS AEREAS PARAGUAIAS</DropdownItem>
                                                        <DropdownItem dropDownValue="INR">TOTAL</DropdownItem>
                                                        <DropdownItem dropDownValue="AFT">GOL</DropdownItem>
                                                        <DropdownItem dropDownValue="SID">SIDERAL</DropdownItem>
                                                        <DropdownItem dropDownValue="MAP">MAP</DropdownItem>
                                                        <DropdownItem dropDownValue="LAT">LATAM</DropdownItem>
                                                        <DropdownItem dropDownValue="PASS">PASSAREDO</DropdownItem>

                                                </DropdownMenu>
                                            </Dropdown>
                                        </ButtonDropdown>
                                    </div>
                                    <div class='col-sm'>
                                        <ButtonDropdown >
                                        <Dropdown  >
                                                <DropdownToggle color="primary" caret className="dropdown-toggle">
                                                    Movimentos <Badge> 92</Badge>
                                                </DropdownToggle>
                                                <DropdownMenu className="currency-dropdown">
                                                        <DropdownItem dropDownValue="USD">AZUL</DropdownItem>
                                                        <DropdownItem dropDownValue="EUR">LINHAS AEREAS PARAGUAIAS</DropdownItem>
                                                        <DropdownItem dropDownValue="INR">TOTAL</DropdownItem>
                                                        <DropdownItem dropDownValue="AFT">GOL</DropdownItem>
                                                        <DropdownItem dropDownValue="SID">SIDERAL</DropdownItem>
                                                        <DropdownItem dropDownValue="MAP">MAP</DropdownItem>
                                                        <DropdownItem dropDownValue="LAT">LATAM</DropdownItem>
                                                        <DropdownItem dropDownValue="PASS">PASSAREDO</DropdownItem>

                                                </DropdownMenu>
                                            </Dropdown>
                                        </ButtonDropdown>
                                    </div>
                                    <div class='col-sm'>
                                        <ButtonDropdown >
                                        <Dropdown  >
                                                <DropdownToggle color="primary" caret className="dropdown-toggle">
                                                    BDR <Badge> 5</Badge>
                                                </DropdownToggle>
                                                <DropdownMenu className="currency-dropdown">
                                                        <DropdownItem dropDownValue="USD">AZUL</DropdownItem>
                                                        <DropdownItem dropDownValue="EUR">LINHAS AEREAS PARAGUAIAS</DropdownItem>
                                                        <DropdownItem dropDownValue="INR">TOTAL</DropdownItem>
                                                        <DropdownItem dropDownValue="AFT">GOL</DropdownItem>
                                                        <DropdownItem dropDownValue="SID">SIDERAL</DropdownItem>
                                                        <DropdownItem dropDownValue="MAP">MAP</DropdownItem>
                                                        <DropdownItem dropDownValue="LAT">LATAM</DropdownItem>
                                                        <DropdownItem dropDownValue="PASS">PASSAREDO</DropdownItem>

                                                </DropdownMenu>
                                            </Dropdown>
                                        </ButtonDropdown>
                                    </div>
                                </div>
                             
                                </Card.Text>
                            
                            </Card.Body>
                        </Card>       
                </div>

            </div>
        </>
        );
    }

}
export default PosOperacao;