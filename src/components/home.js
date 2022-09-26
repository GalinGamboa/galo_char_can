import React from 'react';
//import 'boxicons'
import Footer from '../layouts/footer';
 



const Home = () =>{

  return (
    <>
    <div className='header'>
      <div className='header_home'>
        <h1 class="title fw-bold">CHARLES CANTIN</h1>
        <h2 class="copy fw-bolder">J'écris la vie avec un appareil photo</h2>
      </div>
    </div>
    
    <Footer></Footer>

    {/*  
    <footer id="contact">
        <div class="container footer_content">

            <div class="contact_us">
                <h2 class="brand">Charles Cantin</h2>
               
            </div>

            <div class="social_media">
                <a href="./" class="social_media_icon">
                <i class='bx bxl-facebook'> </i>
                </a>

                <a href="./" class="social_media_icon">
                    <i class='bx bxl-twitter' ></i>
                </a>

                <a href="./" class="social_media_icon">
                    <i class='bx bxl-instagram-alt'></i>
                </a>
            </div>
        </div>

        <div class="line"></div>
    </footer>
    */}
    </>


   
  )
}

export default Home;