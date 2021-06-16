
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../hook/useFetch";




export default function DayList(){

   const days =  useFetch("http://localhost:3001/days");

    // const [days,setDays] = useState([]);

    // useEffect(()=>{
    //     console.log("useEffect");
    //     fetch('http://localhost:3001/days')
    //     .then(res=>{
    //         return res.json();
    //     })
    //     .then(data =>{
    //         setDays(data);
    //     })
    // },[]); 
    // // count가 변경 될때만 작동하게 바꾼것! 
    // //빈배열을 넣어두면 최초에만 들어가고 안들어가게 됩니다
    // //변경 값이 발생 할떄 이게 반응해서 나온다
    
   
    return (<><ul className = "list_day">
        {days.map(day =>(
             <li key ={day.id}>
                 <Link to ={`/day/${day.day}`}>Day {day.day}</Link>
            </li>
        ))}
       </ul>

            </>
    );
}