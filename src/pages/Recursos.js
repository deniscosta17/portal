import React, {Component} from "react";
import { Card, Form } from 'react-bootstrap';
import '../styles/style.css'


class Recursos extends  Component{

    render() {
        return (
            <>
                <div class="d-flex flex-row">
                        <div className="col-md-4 mx-auto">
                            <Card className="cls-cards-wh shadow-sm mb-5 bg-white rounded shadow-sm mb-5 bg-white rounded">
                                <Card.Header as="h5" id='card-head-anuario' >Anuário Estatístico</Card.Header>
                                <Card.Body>
                                    <Card.Title id='card-title-anuario'>
                                        O Anuário Estatístico de Tráfego Aéreo contém um valoroso acervo de dados estatísticos que transmite ao leitor informações quantitativas
                                        confiáveis sobre o cenário atual da aviação no Sistema de Controle do Espaço Aéreo Brasileiro (SISCEAB). 
                                        Os dados disponibilizados permitem identificar padrões de comportamento, como tendência e sazonalidade, 
                                        existentes nos aeroportos e no espaço aéreo brasileiro.
                                        
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
                                <Card.Header as="h5" id='card-head-anuario' >Plano de Operações - Retomada COVID-19</Card.Header>
                                <Card.Body>
                                    <Card.Title id='card-title-anuario'>Acompanhe as informações referentes ao Plano de Operações - Retomada COVID-19.
                                        <p style={{marginTop: "10px"}}>Selecione, a seguir, os planos disponíveis:</p>
                                    </Card.Title>
                                    <Card.Text>
                                        <Form>
                                            <Form.Group controlId="exampleForm.ControlSelect1" >
                                                <Form.Control as="select" >
                                                    <option>Selecione</option>
                                                    <option>Anuário 2020</option>
                                                    <option >Anuário 2019</option>
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
                            <Card.Header as="h5" id='card-head-anuario' >PlayBook de Rotas</Card.Header>
                            <Card.Body>
                                <Card.Title id='card-title-anuario'>
                                    O Playbook de Rotas tem por objetivo apresentar as Rotas Preferenciais e Alternativas utilizadas no espaço aéreo brasileiro, 
                                    dando previsibilidade aos usuários, além de permitir um melhor planejamento dos voos, visando aumentar a fluidez e a segurança operacional do 
                                    tráfego aéreo.
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
                </div>
                <div class="d-flex flex-row">
                    <div className="col-md-4 mt-1">
                            <Card className="cls-cards-wh shadow-sm mb-5 bg-white rounded">
                                <Card.Header as="h5" id='card-head-anuario' >Previsão Anual de Demanda</Card.Header>
                                <Card.Body>
                                    <Card.Title id='card-title-anuario'>
                                    O CGNA disponibiliza para a Comunidade ATM as previsões de demanda ANUAL e QUINQUENAL, considerando os 34 principais aeródromos do país, 
                                    com o objetivo de contribuir para o planejamento ATM e a tomada de decisões gerenciais. 
                                    A previsão ANUAL poderá sofrer atualizações mensais, enquanto a previsão QUINQUENAL 
                                    (para os próximos cinco anos) deve ser atualizada uma vez por ano, em janeiro.
                                        
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

                    <div className="col-md-4 mt-1">
                            <Card className="cls-cards-wh shadow-sm mb-5 bg-white rounded">
                                <Card.Header as="h5" id='card-head-anuario' >Publicações</Card.Header>
                                <Card.Body>
                                    <Card.Title id='card-title-anuario'>
                                    Fonte de informação oficial para referenciar todas as publicações oficiais convencionais e não convencionais em vigor aprovadas pelo DECEA.
                                        
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

                    <div className="col-md-4 mt-1">
                            <Card className="cls-cards-wh shadow-sm mb-5 bg-white rounded">
                                <Card.Header as="h5" id='card-head-anuario' >Publicações</Card.Header>
                                <Card.Body>
                                    <Card.Title id='card-title-anuario'>
                                    Fonte de informação oficial para referenciar todas as publicações oficiais convencionais e não convencionais em vigor aprovadas pelo DECEA.
                                        
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
                </div>
            </>
        );
    }

}
export default Recursos;