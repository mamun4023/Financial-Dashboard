import React from 'react';
import LineChart from '../components/lineChart';
import SpinnerChart from '../components/spinerChart';

export default function Chart() {
    return (
        <div className="flex">
            <div className=" w-[389px] h-[331px] bg-blackLight rounded-lg p-4 pt-12 ">
                <LineChart width={360} height={270} />
            </div>
            <div className=" w-[389px] h-[331px] bg-blackLight ml-4 rounded-lg">
                <SpinnerChart width={400} data={10} />
            </div>
        </div>
    );
}
