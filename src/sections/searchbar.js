import React from "react"
import { faBell, faEnvelope, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


export default function SearchBar(){
    return(
        <div className=" flex items-center">
            <div className="mx-2 relative">
                <input 
                    type= "text"
                    className=" bg-blackLight rounded-2xl  w-[577px] p-5 outline-none text-white text-sm font-poppins_400 pl-10"
                />
                <FontAwesomeIcon 
                    icon={faMagnifyingGlass}
                    className = "text-white text-lg absolute left-4 top-5 opacity-40 "
                />
            </div>                 
            <div className="flex">
                <div className=" w-[93px] bg-blackLight p-4 px-8 rounded-xl relative mx-2">
                    <FontAwesomeIcon 
                        icon={faEnvelope}
                        className = "text-white text-[25px]"
                    />
                    <p className=" bg-info px-1 absolute top-2 right-7 text-[12px] text-white rounded-full ">
                        2
                    </p>
                </div>
                <div className=" w-[93px] bg-blackLight p-4 px-8 rounded-xl relative">
                    <FontAwesomeIcon 
                        icon={faBell}
                        className = "text-white text-[25px]"
                    />
                    <p className=" bg-info px-1 absolute top-2 right-9 text-white text-[12px]  rounded-full ">
                        5
                    </p>
                </div>
            </div>
        
        </div>
    )
}