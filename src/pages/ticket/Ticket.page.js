import React, { useEffect, useState } from 'react'
import {Container,Row,Col, Button} from 'react-bootstrap'
import { PageBreadcrumb } from '../../components/breadcrumb/PageBreadcrumb.comp'
import tickets from '../../assets/data/dummy-tickets.json'
import {MessageHistory} from "../../components/message-history/MessageHistory.comp"
import {UpdateTicket} from "../../components/update-ticket/UpdateTicket.comp"
import {useParams} from 'react-router-dom';
import { array } from 'prop-types'

// const ticket = tickets[0];
export const Ticket = () => {
    const {tId} =useParams()

    const [message, setMessage] = useState('')
    const [ticket, setTicket] = useState('')
    
    useEffect(() => {
            for ( let i=0; i < tickets.length; i++){
                if(tickets[i].id == tId){
                    setTicket(tickets[i])
                    continue
                }
            }
    }, [message]);

    const handleOnChange = (e) =>{
        setMessage(e.target.value);
        // console.log(e.target.value)
    }

    const handleOnSubmit =(e) =>{
        alert('form submitted')
    }
  return (
    <Container>
        <Row>
            <Col>
            <PageBreadcrumb page="Ticket" />
            </Col>
        </Row>
        <Row>
            <Col>
            
            <div className='subject'>Subject: {ticket.subject}</div>
            <div className='date'>Date: {ticket.date}</div>
            <div className='status'>Status:{ticket.status}</div>
            </Col>
            <Col className='text-right'>
                <Button variant="outline-info">Close Ticket</Button>
            </Col>
        </Row>
        <Row>
            <Col>
                {ticket.history && <MessageHistory msg={ticket.history} />}
            </Col>
        </Row>
        <hr />
        <Row>
            <Col>
                <UpdateTicket msg={message}
                handleOnChange={handleOnChange}
                handleOnSubmit={handleOnSubmit}/>
            </Col>
        </Row>
    </Container>
  )
}
