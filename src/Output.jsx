import React, { useState } from 'react';
import { IoMdCheckmark } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
const Output = (props) => {
    const [toggle,setToggle]  = useState();
    return (
        <div className='max-w-[800px] mx-auto'>
            <ul>
                {
                    props.items.map(
                        (data,i) =>{
                            return(
                                <li onClick={()=> setToggle(i)} className={`
                                ${toggle != i ? "text-sm" : "texl-lg line-through text-slate-500 " }
                                shadow-lg cursor-pointer p-2 capitalize font-bold rounded-lg mt-2 relative`} key={i}>
                                    {data}
                                    {
                                        toggle != i ?  <IoMdCheckmark className='absolute top-[10px] text-xl right-[15px] text-green-400' />
                                        :<IoCloseSharp onClick={()=> props.rem(i) } className='absolute top-[10px] right-[15px] text-xl text-red-400' />
                                    }
                                   
                                    
                                    
                                   
                                </li>

                            )
                        }
                    )
                }
                
                {/* <li className='shadow-lg text-xl p-2 capitalize font-bold rounded-lg mt-2'>heloo</li>
                <li className='shadow-lg text-xl p-2 capitalize font-bold rounded-lg mt-2'>heloo</li> */}
            </ul>
        </div>
    );
}

export default Output;
