import React, {useEffect, useState} from 'react'
import {Container, Row,Col} from 'react-bootstrap';
import { PageBreadcrumb } from '../../components/breadcrumb/PageBreadcrumb.comp';
import {AddTicketForm} from "../../components/add-ticket-form/AddTicketForm.comp"

const initialFrmDt ={
  subject:'',
  issueDate: '',
  detail: '',
}; 

export const AddTicket = () => {
const [frmData,setFrmdata] =useState(initialFrmDt);
useEffect(() => {}, [frmData]) 

  const handleOnChange =(e) => {
    const {name,value} = e.target;
    setFrmdata({...frmData,[name]:value});
    console.log(name,value);
  }

  const handleOnSubmit =(e) =>{
    e.preventDefault()
    setFrmdata(initialFrmDt);
    console.log("form submit", frmData);
  }

  return (
    <Container>
        <Row>
            <Col>
            <PageBreadcrumb page="New Ticker" />
            </Col>
        </Row>
        <Row>
            <Col>
            <AddTicketForm 
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
            frmDt = {frmData}
            />
            </Col>
        </Row>
    </Container>
  )
}
