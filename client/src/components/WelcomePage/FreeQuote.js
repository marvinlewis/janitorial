import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const FreeQuote = () => {
    return (
        <div className='freequote-cont'>
        <Form className='freequote-form-cont'>
        <h2 id='quote-h2'>Free Quote Form</h2>
      <FormGroup>
        <Label for="name">Name</Label>
        <Input type="text" name="name" id="name" placeholder="type name here" />
      </FormGroup>
      <FormGroup>
        <Label for="company">Company</Label>
        <Input type="text" name="company" id="company" placeholder="type company name here" />
      </FormGroup>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input type="email" name="email" id="email" placeholder="type email name" />
      </FormGroup>
      <FormGroup>
        <Label for="location">Location</Label>
        <Input type="text" name="location" id="location" placeholder="type location here" />
      </FormGroup>
      <FormGroup>
        <Label for="square">Square Footage</Label>
        <Input type="number" name="square" id="square" placeholder="type square footage here" />
      </FormGroup>
      <FormGroup>
        <Label for="type">Type of Service</Label>
        <Input type="select" name="type" id="type">
          <option></option>
          <option>Commercial</option>
          <option>Industrial</option>
          <option>Residential</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="description">Description of Services </Label>
        <Input type="textarea" name="description" id="description" />
      </FormGroup>
      
      <Button>Submit</Button>
    </Form>
    </div>
    )
}
export default FreeQuote;