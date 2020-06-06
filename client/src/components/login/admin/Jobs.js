import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Jobs = () => {


    const [ formInput, setFormInput ] = useState({
        name: '',
        company: '',
        start: ''
    });

    const [ data, setData ] = useState([])

    const handleInput = e => {
        setFormInput({
            ... formInput,
            [e.target.name] : e.target.value
        })
        console.log(formInput)
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log('SUBMIT',formInput)
        axios.post('http://localhost:5000/api/auth/jobs', formInput)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
        
    }

   //

    return (
        <div className='admin-jobs-parent-cont'>
            <div className='admin-jobs-form-cont'>
                <form onSubmit={handleSubmit}>
                   <label htmlFor='name'/> Name: {''}
                    <input
                    name='name'
                    id='name'
                    type='text'
                    value={formInput.name}
                    onChange={handleInput}
                    />
                    <label htmlFor='company'/> Company: {''}
                    <input
                    name='company'
                    id='company'
                    type='text'
                    value={formInput.company}
                    onChange={handleInput}
                    />
                    <label htmlFor='start'/> Start Date: {''}
                    <input
                    name='start'
                    id='start'
                    type='date'
                    value={formInput.start}
                    onChange={handleInput}
                    />
                    <button>Submit</button>
                </form>
            </div>
            <div className='admin-jobs-display-cont'>
                <div className='admin-jobs-display-list'>
                    {data ? data.map(item => {
                        return(
                        <div>
                        <p>{item}</p>
                        <button type='checkbox'/>
                        </div>
                        )
                    }) : 
                    <div>
                    <p>'NO DATA'</p>
                    </div>}
                </div>
            </div>
        </div>
    )
}
export default Jobs;