import { useEffect, useState } from "react";

export default function useFetch(url){
    const [data,setData] = useState([]);

    
    useEffect(()=>{
        console.log("useEffect");
        fetch(url)
        .then(res=>{
            return res.json();
        })
        .then(data =>{
            setData(data);
        })
    },[url]); 

    // count가 변경 될때만 작동하게 바꾼것! 
    //빈배열을 넣어두면 최초에만 들어가고 안들어가게 됩니다
    //변경 값이 발생 할떄 이게 반응해서 나온다

    
        return data;
}