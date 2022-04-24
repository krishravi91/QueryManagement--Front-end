import React from 'react'
import {Table} from 'react-bootstrap';

export const TicketTable = ({tickets}) => {
  return (
    <Table striped bordered hover>
        <thead>

            <tr>
                <th>#</th>
                <th>Subjects</th>
                <th> Status</th>
                <th>Opened Date</th>
            </tr>
        </thead>
        <tbody>
            {tickets.length ? (
            tickets.map((row) => (
            <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.subject}</td>
                <td>{row.status}</td>
                <td>{row.date}</td>
            </tr>
        ))
        ) : (
            <tr>
                <td colspan ='4' className='text-center'>No Ticket Show</td>
            </tr>
        )}    
        </tbody>
    </Table>
  )
}
