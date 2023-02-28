import React from "react"
import Bg1 from '../assets/images/svg/bg1.svg';
import Bg2 from '../assets/images/svg/bg2.svg';


export default function HomeLayout({children}){
    return(
        <div className="flex justify-center p-8"> 
           <div className=" bg-black rounded-lg p-10 w-[1430px]">
                {children}
           </div>
        </div>
    )
}