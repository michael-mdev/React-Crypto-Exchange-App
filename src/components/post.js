import React, { Component } from 'react';
import { connect } from 'react-redux'
import {BasePage} from '../elements'
import { Card, CardBody, Row, Col, ButtonGroup, Button, FormGroup, Label, Input, Badge } from 'reactstrap';
import FontAwesome from 'react-fontawesome'
import TradingViewWidget from 'react-tradingview-widget';


class Trading extends Component{

    render() {
        return(
            <BasePage
                active={[false, false, false]}
            >
                <div className='it-post'>
                    <div className="d-flex justify-content-center">
                        <div>
                            <img src='http://via.placeholder.com/140x140' className='rounded-circle mb-4'/>
                            <div>
                                <strong className='it-fs24 text-primary'>Eddie Becker</strong>
                            </div>
                            <div className='d-flex flex-row mt-2'>
                                <div>
                                    <Badge color='primary' pill className='badge-2'>
                                        <span>59</span><span>/289</span>
                                    </Badge>
                                </div>
                                <div className='profit'>
                                    <div className='d-flex flex-row'>
                                        <div>
                                            <img src={require('../assets/icons/profit/profit.png')} />
                                        </div>
                                        <div className='text-left text'>
                                            <div><strong className='text-success it-fs12'>57%</strong></div>
                                            <div><span className='it-fs12 it-half-opacity'>top profit</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Row className='justify-content-center'>
                        <Col className='col-6'>
                            <Card className='post'>
                                <CardBody>
                                    <div className='it-half-opacity it-fs12 it-medium'>
                                        28 dec 2017
                                    </div>
                                    <span className='it-fs14'>
                                        So it is critically important that you get just the right telescope for where you are and what your star gazing preferences are.
                                    </span>
                                    <div className='d-flex justify-content-between mt-4'>
                                        <div className='it-fs14 text-primary'>
                                            Hide 4 comments
                                        </div>
                                        <div className='it-fs14 it_light_opacity'>
                                            <div className='d-flex flex-row'>
                                                <div>
                                                    <FontAwesome name='thumbs-o-up' /> Like 0
                                                </div>
                                                <div className='share'>
                                                    <FontAwesome name='share-square-o' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mt-3'>
                                        <Input placeholder='Add your comment' />
                                    </div>
                                    <div className='comments'>
                                        <div className='comment'>
                                            <div className='d-flex flex-row'>
                                                <div style={{width: 55, marginRight: 15}}>
                                                    <img src='http://via.placeholder.com/40x40' className='rounded-circle'/>
                                                </div>
                                                <div>
                                                    <span className='text-primary it-medium it-fs14'>Sergey Surin</span>
                                                    <span className='it-fs12 it-half-opacity ml-1'>3 dec 2017</span>
                                                    <p className='it-fs14 mt-1'>
                                                        Hola Gonzalo. Enhorabuena para tu trabajo. Estoy copiando tu trabajo pero quiero hacerte una pregunta . He hecho una primera inversion de 250$ y despues una segunda de otro 250$. Pero despues de tre dias estoy copiando un valor de solo 212$. Tu sabe porque?
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='comment'>
                                            <div className='d-flex flex-row'>
                                                <div style={{width: 55, marginRight: 15}}>
                                                    <img src='http://via.placeholder.com/40x40' className='rounded-circle'/>
                                                </div>
                                                <div>
                                                    <span className='text-primary it-medium it-fs14'>Sergey Surin</span>
                                                    <span className='it-fs12 it-half-opacity ml-1'>3 dec 2017</span>
                                                    <p className='it-fs14 mt-1'>
                                                        Hola Gonzalo. Enhorabuena para tu trabajo. Estoy copiando tu trabajo pero quiero hacerte una pregunta . He hecho una primera inversion de 250$ y despues una segunda de otro 250$. Pero despues de tre dias estoy copiando un valor de solo 212$. Tu sabe porque?
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>


                </div>
            </BasePage>
        )
    }
}

const mapStateToProps = state => {
    return {

    }
};

const mapDispatchToProps = dispatch => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Trading);