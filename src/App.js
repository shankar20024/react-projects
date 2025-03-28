// import { useState } from "react";
//  // App start from here 
// function App(){
//   const [name,setname]=useState(""); // store data
//   const handlechange=(e)=>{
//     setname(e.target.value);      // define data value and send to storage
//   }
//   const clearInput=()=>{
//     setname("");      // after pressing the clear button clear all data 
//   }

//   return(
//     <div style={{textAlign:"center" , marginTop:"100px"}}>
//       <h1> Welcome to React Input Box</h1>
//      <input type="text" 
//      placeholder="Enter your name"
//      value={name} 
//      onChange={handlechange} 
//      style={{ borderRadius:"10px" ,
//       width:"250px" ,
//        padding:"10px" ,
//         fontSize:"16px"}}/>

//      <p style={{fontSize:"20px"}}> Hello,{name}</p>

//      <button onClick={clearInput}
//       disabled={!name} 
//       style={{backgroundColor:name? "blueviolet":"grey",color:"white" , width:"80px", padding:"10px" , borderRadius:"8px"}} > Clear </button>

//     </div>
//   );
// }
// export default App;


// import {useState} from "react";

// function App (){
//   const [count,setCount]= useState(0);

//   const increase=()=>{
//     if(count>=10){
//       alert("number cannot go above 10")
//     }
//     setCount(count+1);
//   };
//   const decrease=()=>{
//     setCount(count-1);
//   };
//   const reset=()=>{
//     setCount(0);
//   };

//   return(
//     <div style={{ textAlign:"center", marginTop:"20px"}}>
//       <h1> Count changer </h1>
//       <h2 > Count: {count}</h2>


//       <button disabled= {count>9}style={{margin:"10px"}} onClick={increase} > Increase </button>
//       <button disabled={count===0} style={{margin:"10px"}} onClick={decrease}> Decrease </button>
//       <button style={{margin:"10px"}} onClick={reset}> Reset </button>
//     </div>
//   );

// }
// export default App;

import {useState} from "react"

const students=[{name:"Shankar", age:"21", city:"Indore"},
  {name:"Sapna", age:"21", city:"Indore"},
  {name:"syovian", age:"5", city:"Indore"}
];

function App(){
  const [student,setStudent]=useState(students);
  const [name,setName]=useState("");
  const [age,setAge]=useState("");
  const [city,setCity]=useState("");


  const delet=(index)=>{
    const updated=[...student];
    updated.splice(index,1);
    setStudent(updated);
  }

  const addStudent=()=>{
    if (name.trim() ==="" || age ==="" || city ===""){
      alert("please fill all fields")
    return;
  }
  const newstudent={
    name,
    age:Number(age),
    city
  }
  setStudent([...student , newstudent]);
  setName("");
  setAge("");
  setCity("");
}

  
  
  return(
    <div style={{textAlign:"center" , marginTop:"30px"}}>
    <input type="text" 
    placeholder="Name" 
    value={name} 
    onChange={(e)=>setName(e.target.value)}
    style={{margin:"7px" ,
    borderRadius:"20px" ,
    padding:"10px" ,
  }}
    
    /> <br/>
  <input type="text" 
    placeholder="Age" 
    value={age}
    onChange={(e)=>setAge(e.target.value)}
    style={{margin:"7px" ,
      borderRadius:"20px" ,
      padding:"10px" ,
    }}
    
    /><br/>
    <input type="text" 
    placeholder="City" 
    value={city}
    onChange={(e)=>setCity(e.target.value)}
    style={{margin:"7px" ,
      borderRadius:"20px" ,
      padding:"10px" ,
    }}
    
    /><br/>
    <button onClick={addStudent} disabled={!name || !age || !city}
    style={{borderRadius:"20px" ,
      padding:"10px" ,
      width:"100px" ,
      cursor:"pointer"
    }}> Add </button>



  {student.map((student,index)=>(
    <div key={index} style={{border: "2px solid black",
      borderRadius: "10px",
      padding: "10px",
      margin: "10px auto",
      width: "200px",
      backgroundColor: "#f2f2f2"}} >
         <h3>{student.name}</h3>
         <h3>{student.age}</h3>
         <h3>{student.city}</h3>
         <button onClick={()=>delet(index)}
          style={{borderRadius:"20px" ,
            padding:"10px" ,
            width:"100px" ,
            cursor:"pointer"
          } }> Delete </button>
       </div>
       
  ))}
  </div>)

  
}
export default App;
