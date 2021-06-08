import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer=()=>{
    return(<>
         <div id="footer-sidebar">
        <div className="container">
            <div className="row">
                <div className="col-sm-6 col-md-4">
                    <div data-aos="fade-up"
                    data-aos-duration="1000" className="footer-widget">
                        <h4>About Company</h4>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus error, accusamus nemo rem
                            fugiat mollitia!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, libero?</p>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4">
                    <div data-aos="fade-up"
                    data-aos-duration="1000" className="footer-widget">
                        <h4>Latest News</h4>
                         <ul id="latest-news">
                             <li><NavLink to="">Lorem ipsum dolor sit amet consectetur.</NavLink></li>
                             <li><NavLink to="">Lorem ipsum dolor sit amet consectetur.</NavLink></li>
                             <li><NavLink to="">Lorem ipsum dolor sit amet consectetur.</NavLink></li>
                             <li><NavLink to="">Lorem ipsum dolor sit amet consectetur.</NavLink></li>
                             <li><NavLink to="">Lorem ipsum dolor sit amet consectetur.</NavLink></li>
                             <li><NavLink to="">Lorem ipsum dolor sit amet consectetur.</NavLink></li>
                         </ul>
                    </div>
                </div>
                <div data-aos="fade-up"
                data-aos-duration="1000" className="col-sm-6 col-md-4">
                    <div className="footer-widget">
                        <h4>Company Address</h4>
                        <address>
                            <b>UF DEVELOPERS</b> <br/>
                            Office # 12, XYZ <br/>
                            Pakistan <br/>
                            P : (123) 456-7891
                        </address>
                     
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="footer" className="overflow-hidden">
        <div className="container overflow-hidden">
            <div className="row">
                <div className="col-md-6">copyright@2021 uf developers</div>
                <div className="col-md-6">
                    <ul className="social-icons float-md-right my-auto">
                        <li><i className="fa fa-twitter-square" aria-hidden="true"></i></li>
                        <li><i className="fa fa-facebook-square" aria-hidden="true"></i></li>
                        <li><i className="fa fa-google-plus-square" aria-hidden="true"></i></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    </>);
};

export default Footer;