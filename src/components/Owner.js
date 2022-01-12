import {useEffect, useState } from 'react';
import { Row, Col, Image } from 'react-bootstrap';

function Owner({facade, setErrorMessage}) {

    const [owner,setOwner] = useState([]);

    const handleClick = (evt) => {
        evt.preventDefault();
        facade.fetchData('harbour/owners', updateOwner, setErrorMessage);
    };

    const updateOwner = (data) => {
        console.log(data)
        setOwner(data.owners);
    }


    return (     
    <div>
        <h1>Owners</h1>
        <div>
                <table>
                    <thead>
                        <tr>
                        <th scope="col">id</th>
                        <th scope="col">name</th>
                        <th scope="col">address</th>
                        <th scope="col">phone number</th>
                        </tr>
                    </thead>
                <tbody>
                    <tr> 
                    {owner.map((o =><tr class="active-row"> <td key={o.id}>{o.name}</td><td key={o.id}>{o.address}</td><td key={o.id}>{o.phone}</td></tr>))}
                        
                    </tr>
                </tbody>
                </table>
            </div>
            <button onClick={handleClick}>Get Owners</button>
        
        </div>
    );
}


export default Owner;