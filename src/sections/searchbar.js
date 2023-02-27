import { faBell, faEnvelope, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"


export default function SearchBar(){
    return(
        <div className=" flex items-center">
            <div className="mx-2 relative">
                <input 
                    type= "text"
                    className=" bg-blackLight rounded-2xl  p-2 px-10 outline-none text-white text-sm font-poppins_400"
                />
                <FontAwesomeIcon 
                    icon={faMagnifyingGlass}
                    className = " text-white text-bg absolute left-4 top-3 text-sm "
                />
            </div>
            <div className="flex">
                <div className=" bg-blackLight p-2 px-4 rounded-xl relative mx-2">
                    <FontAwesomeIcon 
                        icon={faEnvelope}
                        className = "text-white"
                    />
                    <p className=" bg-info px-1 absolute top-1 left-6 text-[9px]  rounded-full ">
                        2
                    </p>
                </div>
                <div className=" bg-blackLight p-2 px-4 rounded-xl relative">
                    <FontAwesomeIcon 
                        icon={faBell}
                        className = "text-white"
                    />
                    <p className=" bg-info px-1 absolute top-1 left-6 text-[9px]  rounded-full ">
                        5
                    </p>
                </div>
            </div>
              
        
        </div>
    )
}