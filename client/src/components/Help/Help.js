import React from 'react';
import './help.css';
import img from './img11.jpeg';

function Help(props) {
    return (
        <div className='body'>

          
            

            <div className='container'>

            <div className='left common'>
                <h1>For Health Care <span><a className='click' href="http://16263.dghs.gov.bd/#doctor" target="blank"> <br /> click here</a></span></h1>
                
            </div>
            <div className='right '>
                <img className='img' src="https://www.bls.gov/opub/btn/volume-8/images/ncs-variable-healthcare.png" alt="" />
            </div>

            </div>
            <div className='container'>

<div className='left common'>
    <h1>For helping helpless people <span><a className='click' href="http://www.facebook.com/groups/someextra.ordinary" target="blank"> <br /> click here</a></span></h1>
    
</div>
<div className='right '>
    <img className='img' src={img}alt="" />
</div>

</div>

<div className='container'>

<div className='left common'>
    <h1>For join our blood donation group<span><a className='click'href="https://www.facebook.com/poribartonfeni.bd" target="blank"> <br /> click here</a></span></h1>
    
</div>
<div className='right '>
    <img className='img' src="https://images.unsplash.com/photo-1615461066841-6116e61058f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ymxvb2QlMjBkb25hdGlvbnxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />
</div>

</div>
            
        </div>
    );
}

export default Help;