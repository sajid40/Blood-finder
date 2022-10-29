import axios from "axios";
import React, { useEffect, useState } from "react";
import "./findDoner.css";
import { useHistory } from "react-router-dom";
export default function FindDoner() {
    const [arr, setArr] = useState([]);
    const history = useHistory();
    useEffect(() => {
        const getFunc = async () => {
            const data = await axios.get("http://localhost:5000/api/auth/get");
            console.log(data.data.data)
            setArr(data.data.data)
            
        };
        getFunc()
        
    }, []);

    
    return(
        <div className="service">
        <table className="customers">
            <tr>
                <th>userName</th>
                <th>email</th>
                <th>bloodGourp</th>
                
            </tr>
            {arr.map((ele, ind) => (
                <tr>
                    <td>{ele.username}</td>
                    <td>{ele.email}</td>
                    <td>{ele.blood}</td>
                </tr>
            ))}
        </table>
    </div>
    )
}

