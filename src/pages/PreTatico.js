import React, {Component, useState} from "react";
import { Badge,Table, Fade, Label, Input, FormGroup, Button, ButtonDropdown, DropdownItem, DropdownMenu, DropdownToggle, Dropdown } from 'reactstrap';
import { Card, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faClipboardList } from '@fortawesome/free-solid-svg-icons';


class PreTatico extends  Component{
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <>
                <div class="d-flex flex-row">
                        <div className="col-md-4 mx-auto">
                            <Card className="cls-cards-wh shadow-sm mb-5 bg-white rounded shadow-sm mb-5 bg-white rounded">
                                <Card.Header as="h5" id='card-head-anuario' style={ {backgroundColor: "#333", borderColor: "#333" , color:"#fff" } }>Plano Diário ATFM (PDA)</Card.Header>
                                <Card.Body>
                                    <Card.Title id='card-title-anuario'>
                                        Planejamento concluído na fase pré-tática, baseado em hipóteses desenvolvidas na fase estratégica, 
                                        cujo objetivo é otimizar a eficiência do Sistema de Gerenciamento 
                                        de Tráfego Aéreo (ATM) e balancear demanda e capacidade.
                                    </Card.Title>
                                    <Card.Text>
                                        <Button color="primary" size="lg" block> Plano Diário ATFM (PDA) </Button>
                                    </Card.Text>
                                
                                </Card.Body>
                            </Card>        
                        </div>
                        <div className="col-md-4 mx-auto">
                            <Card className="cls-cards-wh shadow-sm mb-5 bg-white rounded">
                                <Card.Header as="h5" id='card-head-anuario' style={ {backgroundColor: "#333", borderColor: "#333" , color:"#fff" } }>Janela de Inspeção em Voo</Card.Header>
                                <Card.Body>
                                    <Card.Title id='card-title-anuario'>Acompanhe neste submódulo os horários recomendados para Inspeção em Voo
                                    </Card.Title>
                                    Selecione uma das opçõs abaixo: 
                                    <Card.Text>
                                        <Form>
                                        <FormGroup check>
                                            <Label check>
                                                <Input type="checkbox" id="checkbox2"  />
                                              <b> S21</b>  &nbsp; &nbsp; &nbsp;
                                            </Label>
                                            <Label check>
                                                <Input type="checkbox" id="checkbox2" />
                                              <b>W20</b> &nbsp; &nbsp; &nbsp;
                                            </Label>
                                            <Label check>
                                                <Input type="checkbox" id="checkbox2" />
                                              <b> S20</b>
                                            </Label>
                                        </FormGroup>

                                        <br />

                                            <FormGroup check  >
                                            <Label check>
                                                <Input type="checkbox" id="checkbox2" />{' '}
                                            <b> 18/04/2021 a 24/04/2021</b>  &nbsp; &nbsp; &nbsp;
                                            </Label>
                                            <Label check>
                                                <Input type="checkbox" id="checkbox2" />{' '}
                                            <b>11/04/2021 a 17/04/2021</b> &nbsp; &nbsp; &nbsp;
                                            </Label>
                                            </FormGroup>
                                        
                                        
                                        <br />
                                        
                                        <Form.Control as="select">
                                            <option>Selecione</option>
                                            <option>Briefing Diário Meteorológico.</option>
                                            <option>Cinzas Vulcânicas</option>
                                        </Form.Control> 

                                        </Form>
                                    </Card.Text>
                                
                                </Card.Body>
                            </Card>    
                        </div>
                    <div className="col-md-4 mx-auto">
                        <Card className="cls-cards-wh shadow-sm mb-5 bg-white rounded">
                            <Card.Header as="h5" id='card-head-anuario' style={ {backgroundColor: "#333", borderColor: "#333" , color:"#fff" } }>Briefing Diário Meteorológico</Card.Header>
                            <Card.Body>
                                <Card.Title id='card-title-anuario'>Informações meteorológicas que visam apoiar toda a comunidade aeronáutica
                                    na vigilância e previsões meteorológicas para auxiliar no planejamento e execução dos serviços ATM.
                                    <p style={{marginTop: "10px"}}>Confira, a seguir, as opções disponíveis:</p>
                                </Card.Title>
                                <Card.Text>
                                    <Form>
                                        <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Control as="select">
                                                <option>Selecione</option>
                                                <option>Briefing Diário Meteorológico.</option>
                                                <option>Cinzas Vulcânicas</option>
                                        </Form.Control>
                                        </Form.Group>
                                    </Form>
                                </Card.Text>
                            
                            </Card.Body>
                        </Card>        
                        </div>
                </div>
                <div class="d-flex flex-row">
                    <div className="col-md-4 mt-1">
                            <Card className="cls-cards-wh shadow-sm mb-5 bg-white rounded">
                                <Card.Header as="h5" id='card-head-anuario' style={ {backgroundColor: "#333", borderColor: "#333" , color:"#fff" } }>Eventos Especiais</Card.Header>
                                <Card.Body>
                                    <Card.Title id='card-title-anuario'>
                                        Acompanhe o planejamento para períodos de feriados, férias, CARNAVAL, NATAL e ANO NOVO.
                                        <p style={{marginTop: "10px"}}>Confira, a seguir, as opções disponíveis:</p>
                                    </Card.Title>
                                    <Card.Text>
                                        <Form>
                                            <Form.Group controlId="exampleForm.ControlSelect1">
                                                <Form.Control as="select">
                                                    <option>Selecione</option>
                                                    <option>informações de planejamento estratégico</option>
                                                    <option>informações de previsão de demanda </option> 
                                                    <option>informações de Calendário</option>
                                            </Form.Control>
                                            </Form.Group>
                                        </Form>
                                    </Card.Text>
                                
                                </Card.Body>
                            </Card>        
                    </div>

                    <div className="col-md-4 mt-1">
                            <Card className="cls-cards-wh shadow-sm mb-5 bg-white rounded">
                                <Card.Header as="h5" id='card-head-anuario' style={ {backgroundColor: "#333", borderColor: "#333" , color:"#fff" } }>Contingência</Card.Header>
                                <Card.Body>
                                    <Card.Title id='card-title-anuario'>
                                        Os procedimentos de contingência são aqueles a serem adotados em eventos específicos, 
                                        de média ou longa duração, e que podem gerar impactos na malha aérea do país.
                                        <p style={{marginTop: "10px"}}>Confira, a seguir, os anuários disponíveis:</p>
                                    </Card.Title>
                                    <Card.Text>
                                        <Form>
                                            <Form.Group controlId="exampleForm.ControlSelect1">
                                                <Form.Control as="select">
                                                    <option>Selecione</option>
                                                    <option>informações de Contingência</option> 
                                                    <option>informações de Calendário</option>
                                            </Form.Control>
                                            </Form.Group>
                                        </Form>
                                    </Card.Text>
                                
                                </Card.Body>
                            </Card>        
                    </div>
                   
                </div>
        </>
        );
    }

}
export default PreTatico;