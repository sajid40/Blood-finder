import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Posts from "../../components/posts/Posts";
import Sidebar from '../../components/sidebar/Sidebar';
import "./Bloodrqst.css";

function Bloodrqst(props) {

    const [posts, setposts] = useState([]);
    const {search} = useLocation();
    // console.log(search);
    useEffect(() => {
      const fetchPost = async () => {
        const res = await axios.get("http://localhost:5000/api/post"+search);
        setposts(res.data);
      };
      fetchPost();
    }, [search]);

    return (

        <div className='rqst'>
          <Link className='button' to='/write'>Request +</Link>
            
            <div className='container'>

                <div className='post'>
                <Posts post={posts} />

                </div>

                <div className='sidebar'>
                <Sidebar />
                </div>


            </div>

        </div>
        
    );
}

export default Bloodrqst;