import React from 'react';
import { useHistory, Route, NavLink } from 'react-router-dom';

const Admin = () => {


    const history = useHistory();

    const handleClick01 = e => {
        history.push('/admin/quotes')
    }

    const handleClick02 = e => {
        history.push('/admin/jobs')
    }

    return (
        <div className='admin_cont'>
            <div className='quotes-admin-cont' onClick={handleClick01}>
                <h2>Quotes</h2>
            </div>
            <div className='completed-admin-cont' onClick={handleClick02}>
                <h2>Jobs List</h2>
            </div>
            <div className='blank1-admin-cont'>
                <h2>Blank</h2>
            </div>
            <div className='blank2-admin-cont'>
                <h2>Blank</h2>
            </div>
        </div>
    )
}
export default Admin