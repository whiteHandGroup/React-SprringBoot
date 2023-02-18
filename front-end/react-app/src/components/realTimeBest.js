import React, { useState, useEffect } from 'react';
import axios from 'axios';

function RealTimeBest(){
        const [bestSellers, setBestSellers] = useState([]);

         useEffect(() => {
            bringBestSellers();
          }, []);

         function bringBestSellers(){
            //alert("click,,,");
            axios.get('/realTimeBest/crawl')
              .then(response => { setBestSellers(response.data); })
              .catch(error => { console.log(error) })
         }

       return (
           <div className="week">
             <div className="author-title">
               <a href="#">베스트 셀러</a>
             </div>
             {/*
             {bestSellers.map((item, index) => (
               <div className="author">
                 <div className="best_number">{index + 1}.&nbsp;</div>
                 <div className="author-name">{item}</div>
               </div>
             ))}
             */}
             {Array(5).fill().map((_, index) => (
               <div className="author">
                 <div className="best_number">{index + 1}.&nbsp;</div>
                 <div className="author-name">{bestSellers[index]}</div>
               </div>
             ))}
           </div>
         );
}

export default RealTimeBest