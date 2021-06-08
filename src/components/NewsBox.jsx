import React from 'react';
import Service from './Service';

const NewsBox = (props) => {
    return (
        <>
           <div  className="col-lg-3 col-md-6">
                <div  data-aos="flip-right" className="news-post">
                    <img src={props.img} alt="" />
                    <h3 ><a href="">{props.title}</a></h3>
                    <div className="post-date ">April 30, 1992</div>
                    <p >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta, distinctio.</p>
                    <a href="" className="read-more">Read More</a>
                </div>
            </div>
        </>
    );
};
export default NewsBox;