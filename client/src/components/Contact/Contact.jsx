import React from 'react';
import './contact.css';
import img1 from './imgcontact/sajid.jpg';
import img2 from './imgcontact/suvo.jpeg';
import img3 from './imgcontact/sykot.jpg';

function Contact(props) {
    return (
        <div>
            <div className='maincont'>



<div className='container'>

<div className='left common'>
    <h1>Md. Sajid Khan</h1>
    <p>Blood group : O+ <br />Call: 01622190220 <br />
    <a target="blank" href="https://www.facebook.com/jaspreet.jash.3"> Facebook</a></p>
</div>
<div className='right '>
    <img className='img' src={img1} alt="" />
</div>

</div>


<div className='container'>

<div className='left '>
    <img className='img' src={img2}alt="" />
</div>

<div className='right common'>
    <h1>Jahangir alom shuvo</h1>
    <p>Blood group : AB+ <br />Call: 01624859860 <br />
    <a target="blank" href="https://www.facebook.com/jamshuvo.00"> Facebook</a></p>
</div>


</div>




<div className='container'>

    <div className='left common'>
        <h1>Ear Uddin Shykat</h1>
        <p>Blood group : O+ <br />Call: 01771774301 <br />
    <a target="blank" href="https://www.facebook.com/roarhimu"> Facebook</a></p>

    </div>
    <div className='right '>
        <img className='img' src= {img3} alt="" />
    </div>

    </div>





    

    





</div>
            
        </div>
    );
}

export default Contact;