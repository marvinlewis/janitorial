import React, { useState, useEffect } from "react";
import axios from 'axios';

const Quotes = () => {
    const [ quotes, setQuotes ] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/freequote')
        .then(res => {
            //console.log('ADMIN QUOTES', res);
            setQuotes(res.data.here_Kell)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    

    return (
        
        <div>
            
            {quotes.map(q => {
                console.log(quotes)
                return(
                <div key={q.name}>
                    <h3>Quote #{q.id} on {q.time_of_request}</h3>
                        <ul>
                            <li className='admin-quotes-li'>{q.company}</li>
                            <li className='admin-quotes-li'>{q.name}</li>
                            <li className='admin-quotes-li'>{q.email}</li>
                            <li className='admin-quotes-li'>{q.email}</li>
                            <li className='admin-quotes-li'>{q.location}</li>
                            <li className='admin-quotes-li'>{q.square}</li>
                            <li className='admin-quotes-li'>{q.description}</li>
                            <li className='admin-quotes-li'>{q.type}</li>
                        </ul>
                </div>
                )
        
        })}
        </div>    
    )
}
export default Quotes;