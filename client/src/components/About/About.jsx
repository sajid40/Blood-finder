import React from 'react';
import './about.css';
import caro1 from './caro1.jpg';
import caro2 from './caro2.jpg';

import caro3 from './caro3.jpg';

import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';
import img4 from './img4.jpg';





function About(props) {
    return (
        <div >

<div id="carouselExampleInterval" class="carousel slide " data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="500">
      <img src= {caro1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src= {caro2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src= {caro3} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

<div className='maincont'>



<div className='container'>

<div className='left common'>
    <h1>Donate Blood To Save Life</h1>
    <p>Blood donation is the most important social service to humankind. By donating we can give others a life support. Blood donation at the right time can save millions of lifes all over the world every year. Blood donation is a significant way to help others. It's also an excellent opportunity for you to give back and make a difference in the lives of many people.</p>
</div>
<div className='right '>
    <img className='img' src= {img1} alt="" />
</div>

</div>


<div className='container'>

<div className='left '>
    <img className='img' src= {img2} alt="" />
</div>

<div className='right common'>
    <h1>Blood groop Camping</h1>
    <p>Is is important to know,a responsive blood bank and donor Content Management System </p>
</div>


</div>




<div className='container'>

    <div className='left common'>
        <h1>Donate Blood To Save Life</h1>
        <p>BloodBank is a responsive blood bank and donor Content Management System (CMS). Agents can register and manage donors easily</p>
    </div>
    <div className='right '>
        <img className='img' src={img3} alt="" />
    </div>

    </div>





    <div className='container'>

    <div className='left '>
        <img className='img' src= {img4} alt="" />
    </div>

    <div className='right common'>
        <h1>Why You Should Donate</h1>
        <p>Donating blood regularly is benefical to prevent and reduce heart attacks and liver ailment. The risk of heart and liver related problem is caused by the iron overload in the body.

</p>
    </div>
    

    </div>

    





</div>


            
        </div>
    );
}

export default About;