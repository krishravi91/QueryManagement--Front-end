import React from 'react'
import {form, Button, Form} from 'react-bootstrap'

export const UpdateTicket = ({msg, handleOnChange,handleOnSubmit}) => {
  return (
   <Form onSubmit={handleOnSubmit}>
       <Form.Label> Reply </Form.Label>
       <Form.Text> Please reply your message here</Form.Text>
           <Form.Control
           value={msg}
           onChange={handleOnChange} 
           as="textarea"
           row="5"
           name="detail"
            />
        <div className='text-right mt-4 mb-3'>
       <Button variant="info" type="submit">
           Submit</Button>    
        </div>
       
   </Form>
  )
}
