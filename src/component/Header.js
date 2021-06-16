import React from "react";

import { Link } from "react-router-dom";

export default function Header(){
    return <div className = "header"> 
            <h1>
                <a href = "/">토익 영단어🚘</a>
            </h1>
            <div className = "menu">
                <Link to="/create_word" className = "link">
                    단어 추가
                </Link>  
                <Link to="/create_day" className = "link">
                    DAY 추가
                </Link>     
                
                
            </div>





            </div>;
}