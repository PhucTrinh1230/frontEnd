import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import Content from '../../components/layout/ContentSupport/Content';
import Slidebar from '../../components/layout/Slidebar';
import Header from '../../components/layout/Header';
import React from 'react';
import ContentPage2 from './ContentSupport/ContentPage2';
import ContentPage3 from './ContentSupport/ContentPage3';
import { BrowserRouter, BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';

const LayoutSupport = () => {
    return (

        <React.Fragment>
            <BrowserRouter>
            <div className='container'>
                <div className='row'>
                    <div>
                        <Header />
                    </div>
                    <main>
                        <Col xxl={4} xl={4} lg={4} md={1} sm={1} >
                            <Slidebar />

                        </Col>
                        <Col xxl={8} xl={8} lg={8} md={11} sm={11} >
                          <Content/>

                        </Col>
                    </main>
                </div>
            </div>
            </BrowserRouter>
        </React.Fragment>

    )
}
export default LayoutSupport;