import React ,{createContext} from "react";
import Compa from './Compa'

const data = createContext()
const data2 = createContext()
const data3 = createContext()


// 1 createContext 2.Provider 3. Consumer
// 1 createContext 2.Provider 3. useContext 
export default function App() {
  const name = "divyanshu"
  const title = "Pratap "
  const last_name = "Singh"
  return (
    <>
   <data.Provider value={name}>
     <data2.Provider value={title}>
     <data3.Provider value={last_name}>
   <Compa />
     </data3.Provider>
     </data2.Provider >
   </data.Provider>
   
    </>
  );
}
export {data,data2,data3}
