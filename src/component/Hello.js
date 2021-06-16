import World from "./World";
import styles from "./Hello.module.css";
import { useState } from "react";

// 바로 이렇게 받을수도 있음 
//const Hello = ({name}) =>{
const Hello = (props) =>{
    // /props 값은 절대 변경이 불가능합니다
    console.log(props);
    const [age,setAge] = useState(10);
    let changeAge = () =>{
        const newAge = age === 10 ? 30 : 10;
        setAge(newAge);
    };
    // 넘겨 받은 값을 name에 저장 해서 내가 자율적으로 사용하고 있다
    const [name,setName] = useState(props.name);


    return(
    <div>
     {/* <h1 style={
         {
             color : "#f00",
             borderBottom: "12px solid #000",
             marginBottom: "50px",
             opacity : 1,
         }
     }>Hello 입니다</h1> */}

     <h1>props 받아온 값{props.name}</h1><br/>
     <h3>props에서 받을 값을 내가 다시 변경하는 이름 : {name}</h3>
     <button onClick = {changeAge}>changeAge</button>
     <button onClick = {()=>{
         setName(name === "spring" ? "jo": "java");
     }}>changeName</button>

    

     <div className={styles.box}> styles (Hello.module.css 공부) </div>
    </div>
);
}
export default Hello;