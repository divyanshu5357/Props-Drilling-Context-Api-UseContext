import React,{useContext} from "react";
import {data,data2,data3} from './App'


export default function Compc() {
  const d = useContext(data)
  const d2 = useContext(data2)
  const d3 = useContext(data3)
 
  return (
    <h1>hello i m {d} {d2}{d3}</h1>
  // <data.Consumer>
  //   {(name)=>{
  //     return (
  //       <data2.Consumer>
  //         {
  //           (title)=>{
  //             return (
  //                 <data3.Consumer>{
  //                   (last_name) =>{
  //                     return (
  //                       <>

  //                       <h1> hello i m {name} {title} {last_name}</h1>
  //                       <h2>anup singh</h2>
  //                       </>
  //                     )
  //                   }
  //                   }
  //                 </data3.Consumer>
                
  //             )
  //           }
  //         }
  //       </data2.Consumer>
  //     )
  //   }}
  // </data.Consumer>
  

  );
}
