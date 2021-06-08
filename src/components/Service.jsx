import React from 'react';

const Service = () => {
    return (<>
    <div className="section">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h2 className="section-head">Some Heading Goes Here</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6 col-md-4">
                    <div data-aos="flip-up" className="service-box">
                        <i className="fa fa-windows" aria-hidden="true"></i>
                        <h3>Some Heading</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, totam!</p>
                    </div>
                </div>
                <div data-aos="flip-up" className="col-sm-6 col-md-4">
                    <div className="service-box">
                        <i className="fa fa-android" aria-hidden="true"></i>
                        <h3>Some Heading</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, totam!</p>
                    </div>
                </div>
                <div data-aos="flip-up" className="col-sm-6 col-md-4">
                    <div className="service-box">
                        <i className="fa fa-laptop" aria-hidden="true"></i>
                        <h3>Some Heading</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, totam!</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </>);
};

export default Service;