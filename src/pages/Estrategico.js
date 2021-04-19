import React, {Component, useState, useEffect} from "react";
import { Badge,Table, Button, ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle, Dropdown } from 'reactstrap';
import { Card, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faClipboardList } from '@fortawesome/free-solid-svg-icons';


class Estrategico extends  Component{
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
        return (
            <>
            <div class="d-flex flex-row">
                    <div className="col-md-4 mx-auto">
                        <Card className="cls-cards-wh shadow-sm mb-5 bg-white rounded shadow-sm mb-5 bg-white rounded">
                            <Card.Header as="h5" id='card-head-anuario' style={ {backgroundColor: "#333", borderColor: "#333" , color:"#fff" } }>Eventos Especiais</Card.Header>
                            <Card.Body>
                                <Card.Title id='card-title-anuario'>
                                    Acompanhe a relação das sextas-feiras mais congestionadas no ano e os 
                                    planejamentos para os principais períodos de feriados, 
                                    férias, CARNAVAL, NATAL e ANO NOVO.
                                <p style={{marginTop: "10px"}}>Confira, a seguir, as opções disponíveis:</p>
                                </Card.Title>
                                <Card.Text>
                                    <Form>
                                        <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Control as="select">
                                                <option>Selecione</option>
                                                <option>Planejamento Estratégico</option>
                                                <option>Calendário</option>
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
                                    de média ou longa duração, 
                                    e que podem gerar impactos na malha aérea do país.
                                    <p style={{marginTop: "10px"}}>Selecione, a seguir, as opções disponíveis:</p>
                                </Card.Title>
                                <Card.Text>
                                    <Form>
                                        <Form.Group controlId="exampleForm.ControlSelect1" >
                                            <Form.Control as="select" >
                                                <option>Selecione</option>
                                                <option>Plano de Contingência</option>
                                                <option >Calendário</option>
                                        </Form.Control>
                                        </Form.Group>
                                    </Form>
                                </Card.Text>
                            
                            </Card.Body>
                        </Card>    
                    </div>
                <div className="col-md-4 mx-auto">
                    <Card className="cls-cards-wh shadow-sm mb-5 bg-white rounded">
                        <Card.Header as="h5" id='card-head-anuario' style={ {backgroundColor: "#333", borderColor: "#333" , color:"#fff" } }>Estrutura do Espaço Aéreo</Card.Header>
                        <Card.Body>
                            <Card.Title id='card-title-anuario'>
                                Projetos de curto, médio e longo prazos objetivando melhorias para todos os usuários do espaço aéreo brasileiro.
                                <p style={{marginTop: "28px"}}>Confira, a seguir, as opções disponíveis:</p>
                            </Card.Title>
                            <Card.Text>
                                <Form>
                                    <Form.Group controlId="exampleForm.ControlSelect1">
                                        <Form.Control as="select">
                                            <option>Selecione</option>
                                            <option> Informações de Estrutura do Espaço Aéreo - 28/04/2018</option>
                                    </Form.Control>
                                    </Form.Group>
                                </Form>
                            </Card.Text>
                        
                        </Card.Body>
                    </Card>        
                    </div>
            </div>


            <div className="col-lg-12 mt-1" >
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
                                    <div class='col-lg-12 mt-1' id='text-rpl'>
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
                                        <Dropdown >
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
                                        <Dropdown >
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


            
        </>
        );
    }

}
export default Estrategico;