import React from 'react';
import news from '../images/n1.jpg';
import news2 from '../images/n2.jpg';
import news3 from '../images/n3.jpg';
import news4 from '../images/n4.jpg';
import NewsBox from './NewsBox';
const News=()=>{
    return(<>
    <div className="section">
    <div id="news" className="container">
        <div className="row">
            <div className="col-md-12">
                <h2 className="section-head">News Heading Here</h2>
            </div>
           
           </div>
           <div className="row">
            <NewsBox img={news} title="News Heading Here" />
            <NewsBox img={news2} title="News Heading Here" />
            <NewsBox img={news3} title="News Heading Here" />
            <NewsBox img={news4} title="News Heading Here" />
            </div>
    </div>
    </div>  
    </>);
};

export default News;