import React from 'react';
import image from '../images/stevejobs.JPG';
import image2 from '../images/billgate.jpg'
const Testimonial=()=>{
    return(<>
     
     <div id="testimonials" className="section">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2 className="section-head text-white">Testimonials</h2>
                </div>
                <div className="col-md-6">
                    <div data-aos="zoom-in-down" className="testimonial">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non nihil sequi, eius ipsa
                            laboriosam incidunt!</p>
                        <img src={image2} alt="" />
                        <div className="author">Bill Gates</div>
                        <div className="author-company">Microsoft</div>
                    </div>
                </div>
                <div data-aos="zoom-in-down" className="col-md-6">
                    <div className="testimonial">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non nihil sequi, eius ipsa
                            laboriosam incidunt!</p>
                        <img src={image} alt="" />
                        <div className="author">Steve Jobs</div>
                        <div className="author-company">Apple</div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  
   
    </>);
};

export default Testimonial;