import React from 'react';

export default function SendMoney() {
    return (
        <div className="bg-blackLight w-[326px] p-10 rounded-xl my-4">
            <p className="text-white text-[14px] font-poppins_600">
                Send Money{' '}
            </p>
            <p className="text-white text-right text-[24px] font-poppins_600 p-2">
                $125455
            </p>
            <div className="flex items-center">
                <div className="h-4 w-4 bg-info rounded-full"></div>
                <p className="text-white font-poppins_500 text-[12px] pl-2">
                    Your Card
                </p>
            </div>
        </div>
    );
}
