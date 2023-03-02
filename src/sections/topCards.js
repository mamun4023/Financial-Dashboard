import React from 'react';

import SpinerChart from '../components/spinerChart';

export default function CardSection() {
    return (
        <div className="my-4">
            <div className="flex justify-between">
                <div
                    style={{
                        background:
                            'linear-gradient(95.04deg, #52449B 15.04%, #7D12AF 89.27%)'
                    }}
                    className="rounded-lg shadow-md flex items-center  w-[389px] h-[152px]"
                >
                    <div className="p-10">
                        <p className="text-white font-poppins_600 text-[14px] py-2">
                            Total Finance
                        </p>
                        <p className="text-white font-poppins_600 text-[27px] w-[100px]">
                            125422
                        </p>
                    </div>
                    <div className="text-white p-4">
                        <SpinerChart width={200} data={30} />
                    </div>
                </div>
                <div
                    style={{
                        background:
                            'linear-gradient(279.13deg, #F362EE -9.54%, #8B28BA 151.3%)'
                    }}
                    className="rounded-lg shadow-md ml-4 flex items-center w-[389px] h-[152px]"
                >
                    <div className="p-10 ">
                        <p className="text-white font-poppins_600 text-[14px] py-2">
                            Total Finance
                        </p>
                        <p className="text-white font-poppins_600 text-[27px] w-[100px]">
                            15454
                        </p>
                    </div>
                    <div className="text-white p-4">
                        <SpinerChart width={200} data={40} />
                    </div>
                </div>
            </div>
        </div>
    );
}
