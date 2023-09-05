import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import RightSideNav from '../Pages/SharedPages/RightSideNav/RightSideNav';
import LeftSideNav from '../Pages/SharedPages/LeftSideNav/LeftSideNav';
import Header from '../Pages/SharedPages/Header/Header';
import Footer from '../Pages/SharedPages/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg='2'>
                        <LeftSideNav></LeftSideNav>
                    </Col>
                    <Col lg='7' >
                        <Outlet></Outlet>
                    </Col>
                    <Col lg='3'>
                        <RightSideNav></RightSideNav>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;