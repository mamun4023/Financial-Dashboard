import React from 'react';
import {
    faListAlt,
    faMessage,
    faUsers
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProfileImage from '../assets/images/jpg/profilePic.jpeg';

export default function Profile() {
    return (
        <div className="bg-blackLight w-[326px] p-10 rounded-xl overflow-clip ">
            <div className=" flex justify-center">
                <img src={ProfileImage} className="w-20 h-20 rounded-full" />
            </div>

            <div className="m-4">
                <h4 className="text-white text-[16px] font-poppins_600 text-center">
                    Emmy Dansom
                </h4>
                <p className="text-[12px] text-center text-white opacity-40 font-poppins_400">
                    {' '}
                    CEO{' '}
                </p>
            </div>

            <div className="flex justify-center">
                <div className=" bg-info rounded-xl px-10 w-[70px] h-[59px] relative">
                    <FontAwesomeIcon
                        icon={faUsers}
                        className="text-white text-xl absolute top-5 left-7"
                    />
                </div>
                <div className=" bg-info rounded-xl px-10 w-[70px] h-[59px] relative mx-2">
                    <FontAwesomeIcon
                        icon={faMessage}
                        className="text-white text-xl absolute top-5 left-7"
                    />
                </div>
                <div className=" bg-info rounded-xl px-10 w-[70px] h-[59px] relative">
                    <FontAwesomeIcon
                        icon={faListAlt}
                        className="text-white text-xl absolute top-5 left-7"
                    />
                </div>
            </div>
            {/* bar */}
            <div className="text-white h-[1px] w-full bg-white my-10 opacity-40"></div>

            <div>
                <h6 className="text-white my-2 font-poppins_600 text-[14px]">
                    About
                </h6>
                <p className="text-white text-[12px] font-poppins_500 opacity-40 leading-6">
                    Organized activites to make money and sell goods and
                    services for a profit
                </p>
            </div>

            {Data.map((data) => (
                <div className="flex my-8 items-center">
                    <div className=" ">
                        <img
                            src={data.profilePic}
                            className="w-[54px] h-[54px] rounded-full"
                        />
                    </div>
                    <div className="pl-4">
                        <h5 className="text-white font-poppins_600 text-[14px]">
                            {data.name}
                        </h5>
                        <p className="text-[12px] font-poppins_400 text-white opacity-40">
                            {' '}
                            {data.title}{' '}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}

const Data = [
    {
        id: 1,
        name: 'Jonie Juger',
        title: 'Project Manager',
        profilePic:
            'data:image/jpeg;base64,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'
    },
    {
        id: 2,
        name: 'Sarah Hosten',
        title: 'Graphics Designer',
        profilePic:
            'data:image/jpeg;base64,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'
    },
    {
        id: 3,
        name: 'Dockrad Anne',
        title: 'Financial Treasurer',
        profilePic:
            'data:image/jpeg;base64,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'
    }
];
