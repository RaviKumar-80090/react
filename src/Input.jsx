import React, { useRef } from 'react';

const Input = (props) => {
   
    const inpRef= useRef();
    const inpHandler=()=>{
        //  console.log(inpRef);
      
        if(inpRef.current.value != ""){
            props.handler(inpRef.current.value);
            inpRef.current.value="";
        }
    }
    return (
        <div className='max-w-[800px] mx-auto'>
            <div>
                <input type="text" ref={inpRef} className='ml-3 border border-[black] my-5 md:w-[90%] w-[80%] focus:outline-none
                rounded-lg px-2 py-1'/>
                <button onClick={inpHandler} className='bg-[blue] px-3 ml-3 py-1 rounded-lg'> Add</button>
            </div>
            
        </div>
    );
}

export default Input;
