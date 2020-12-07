import React from 'react'
import {Form , Col} from 'react-bootstrap'

export default function SearchForm({params , onParamChange}) {
    return (
       
           <Form className='mb-4'>
               <Form.Row>
                   <Form.Group as={Col}>
                   <Form.Label>
                       Description
                   </Form.Label>
                   <Form.Control  value={params.description} onChange={onParamChange} name='description' type='text'></Form.Control>
                   </Form.Group>
                   <Form.Group as={Col}>
                   <Form.Label>
                       Location
                   </Form.Label>
                   <Form.Control  value={params.location}  onChange={onParamChange} name='location' type='text'></Form.Control>
                   </Form.Group>
                   <Form.Group as={Col} xs='auto' className='ml-2 mt-2'>
                   <Form.Check onChange={onParamChange} value={params.full_time} name='full_time' id='full_time' label='Only full Time' type='checkbox' className='mt
                   -4' />
                   </Form.Group>
               </Form.Row>

           </Form>
    )
}
