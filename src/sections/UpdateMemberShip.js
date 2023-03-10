import { faFloppyDisk, faLockOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export default function UpgradeMembership() {
    return (
        <div className="bg-blackLight w-[207px] h-[312px] p-4 pt-20 rounded-xl my-4 ">
            <div className="flex justify-center">
                <div
                    style={{
                        background:
                            'linear-gradient(102.27deg, #915D3F 0%, #633F91 100%)'
                    }}
                    className="h-12 w-12 rounded-full flex justify-center"
                >
                    <FontAwesomeIcon
                        icon={faLockOpen}
                        className="text-white p-4"
                    />
                </div>
            </div>
            <p
                href="#"
                className="text-white font-poppins_600 text-[14px] text-center my-2"
            >
                <a href="#"> Upgrade to Pro</a>
            </p>
            <p className="text-white font-poppins_500 text-[10px] text-center opacity-40 my-2">
                Check your magic on this pro Dashboard
            </p>
        </div>
    );
}
