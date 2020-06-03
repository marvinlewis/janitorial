import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useHistory } from "react-router-dom";
import axios from 'axios';

const FreeQuote = () => {
    const [ input, setInput ] = useState({
      name: '',
      company: '',
      email: '',
      location: '',
      square: '',
      type: '',
      description: ''
    })

    const handleInput = e => {
      setInput({
        ...input,
        [e.target.name] : e.target.value
      })
      console.log(input)
    }

    const handleSubmit = e => {
      e.preventDefault();
      console.log(input);
      
      axios.post('http://localhost:5000/api/freequote', input)
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })

      setInput({
        name: '',
        company: '',
        email: '',
        location: '',
        square: '',
        type: '',
        description: ''
      })
    }

    const history = useHistory();

    const handleKeyDown = e =>{
      if(e.shiftKey && e.altKey) {
          console.log('working')
          history.push('/login')
          
      }
  }

    return (
        <div className='freequote-cont' onKeyDown={handleKeyDown}>
        <Form className='freequote-form-cont' onSubmit={handleSubmit}>
        <h2 id='quote-h2'>Free Quote Form</h2>
      <FormGroup>
        <Label for="name">Name</Label>
        <Input type="text" name="name" id="name" placeholder="type name here" onChange={handleInput} />
      </FormGroup>
      <FormGroup>
        <Label for="company">Company</Label>
        <Input type="text" name="company" id="company" placeholder="type company name here" onChange={handleInput}/>
      </FormGroup>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input type="email" name="email" id="email" placeholder="type email name" onChange={handleInput}/>
      </FormGroup>
      <FormGroup>
        <Label for="location">Location</Label>
        <Input type="text" name="location" id="location" placeholder="type location here" onChange={handleInput}/>
      </FormGroup>
      <FormGroup>
        <Label for="square">Square Footage</Label>
        <Input type="number" name="square" id="square" placeholder="type square footage here" onChange={handleInput}/>
      </FormGroup>
      <FormGroup>
        <Label for="type">Type of Service</Label>
        <Input type="select" name="type" id="type" onChange={handleInput}>
          <option></option>
          <option>Commercial</option>
          <option>Industrial</option>
          <option>Residential</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="description">Description of Services </Label>
        <Input type="textarea" name="description" id="description" onChange={handleInput}/>
      </FormGroup>
      
      <Button>Submit</Button>
    </Form>
    </div>
    )
}
export default FreeQuote;