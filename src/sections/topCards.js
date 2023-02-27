import React from "react"

export default function CardSection(){
    
    return(
        <div className="p-2">
            <div className="flex justify-between">
                <div 
                    style={{background: 'linear-gradient(95.04deg, #52449B 15.04%, #7D12AF 89.27%)'}}
                    className = "rounded-lg shadow-md flex"
                >
                    <div className="p-4">
                        <p className="text-white">Total Finance</p>
                        <p className="text-white">4334553</p>
                    </div>
                    <div className="text-white p-4">
                        Cycle
                    </div>
                        
                </div>
                <div 
                    style={{background: 'linear-gradient(279.13deg, #F362EE -9.54%, #8B28BA 151.3%)'}}
                    className = "rounded-lg shadow-md flex"
                >
                    <div className="p-4">
                        <p className="text-white">Total Finance</p>
                        <p className="text-white">4334553</p>
                    </div>
                    <div className="text-white p-4">
                        Cycle
                    </div>
                </div>
            </div>

        </div>
    )
}