import React, { useState } from 'react'
import {Form,Button} from "react-bootstrap";

export const AddTicketForm = ({handleOnSubmit, handleOnChange, frmDt}) => {
    

  return (
    <div className="jumbotron">
        <h1> Add New Ticket</h1>
        <Form autoComplete="off" onSubmit={handleOnSubmit}>
                    <Form.Group>
                        <Form.Label>Subject</Form.Label>
                        <Form.Control 
                        name="subject"
                        value={frmDt.subject}
                        onChange={handleOnChange}
                        placeholder="Subject"
                        required
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Date</Form.Label>
                        <Form.Control 
                        type="date"
                        name="issueDate"
                        value={frmDt.issueDate}
                        onChange={handleOnChange}
                        required
                        />
                    </Form.Group>
                    
                    <Form.Group>
                        <Form.Label>Issue found</Form.Label>                
                        <Form.Control 
                        as="textarea"
                        name="detail"
                        value={frmDt.detail}
                        onChange={handleOnChange}
                        required
                        />
                    </Form.Group>
                    <Button type="submit" variant="info" >Login</Button>
                </Form>
    </div>
  )
}
