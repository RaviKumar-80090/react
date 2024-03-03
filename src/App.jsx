import Input from "./Input";
import Output from "./Output";
import { useState } from "react";

function App() {
  const [item, setItem] = useState([]);
   const itemHandler=(items)=>{
    // console.log(item);
    setItem([
      ...item,
      items
    ])
   }
   const removeHandler=(remov)=>{
    // console.log(remov);
    const data= item.filter((d,i)=> i != remov )
    setItem([data])
   }
  return (
    <div className="max-w-[1000px] mx-auto shadow-lg py-3">
      <Input handler={itemHandler}/>
      <Output items={item} rem={removeHandler}/>
    </div>
  );
}

export default App;
