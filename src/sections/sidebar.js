import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
    faBackward,
    faCalendar,
    faGear,
    faHome,
    faList,
    faLock,
    faMoneyBill,
    faRightFromBracket,
    faToggleOn,
    faUser
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// const MenuList= [
//     'Dashboard',
//     'Documents',
//     'Calendar',
//     'Profile',
// ]

export default function Sidebar() {
    const [open, setOpen] = useState(false);
    return (
        <div className="bg-blackLight pt-10  w-[207px] h-[603px] rounded-xl overflow-clip">
            <ul>
                <li className="flex group items-center p-2 relative hover:cursor-pointer">
                    <FontAwesomeIcon
                        icon={faHome}
                        className="text-white p-2 pl-4 text-[14px] opacity-40 group-hover:opacity-100"
                    />
                    <p className="text-white pl-2 text-[14px] font-poppins_500 hover:font-poppins_600 opacity-40 group-hover:opacity-100">
                        {' '}
                        Dashboard{' '}
                    </p>
                    <div className="h-8 w-10 bg-info absolute rounded-full -left-8 hidden group-hover:block "></div>
                </li>
                <li
                    className="flex group items-center p-2 relative hover:cursor-pointer"
                    onClick={() => setOpen((prev) => !prev)}
                >
                    <FontAwesomeIcon
                        icon={faList}
                        className="text-white p-2 pl-4 text-[14px] opacity-40 group-hover:opacity-100"
                    />
                    <p className="text-white pl-2 text-[14px] font-poppins_500 hover:font-poppins_600 opacity-40 group-hover:opacity-100">
                        {' '}
                        Documents{' '}
                    </p>
                    <div className="h-8 w-10 bg-info absolute rounded-full -left-8 hidden group-hover:block "></div>
                </li>
                {/* <AnimatePresence>
                    {open && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            exit={{ opacity: 0 }}
                            className="text-white text-xs ml-10"
                        >
                            <ul>
                                <li>Document 1</li>
                                <li>Document 1</li>
                                <li>Document 1</li>
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence> */}
                <li className="flex group items-center p-2 relative hover:cursor-pointer">
                    <FontAwesomeIcon
                        icon={faMoneyBill}
                        className="text-white p-2 pl-4 text-[14px] opacity-40 group-hover:opacity-100"
                    />
                    <p className="text-white pl-2 text-[14px] font-poppins_500 hover:font-poppins_600 opacity-40 group-hover:opacity-100">
                        {' '}
                        Payments{' '}
                    </p>
                    <div className="h-8 w-10 bg-info absolute rounded-full -left-8 hidden group-hover:block "></div>
                </li>
                <li className="flex group items-center p-2 relative hover:cursor-pointer">
                    <FontAwesomeIcon
                        icon={faCalendar}
                        className="text-white p-2 pl-4 text-[14px] opacity-40 group-hover:opacity-100"
                    />
                    <p className="text-white pl-2 text-[14px] font-poppins_500 hover:font-poppins_600 opacity-40 group-hover:opacity-100">
                        {' '}
                        Calander{' '}
                    </p>
                    <div className="h-8 w-10 bg-info absolute rounded-full -left-8 hidden group-hover:block "></div>
                </li>
                <li className="flex group items-center p-2 relative hover:cursor-pointer">
                    <FontAwesomeIcon
                        icon={faUser}
                        className="text-white p-2 pl-4 text-[14px] opacity-40 group-hover:opacity-100"
                    />
                    <p className="text-white pl-2 text-[14px]  font-poppins_500 hover:font-poppins_600 opacity-40 group-hover:opacity-100">
                        {' '}
                        Profile{' '}
                    </p>
                    <div className="h-8 w-10 bg-info absolute rounded-full -left-8 hidden group-hover:block "></div>
                </li>
            </ul>

            <div className="h-[1px] w-[80%] bg-white m-4 my-20 opacity-40 "></div>

            <ul>
                <li className="flex items-center p-2 relative group hover:cursor-pointer ">
                    <FontAwesomeIcon
                        icon={faToggleOn}
                        className="text-white p-2 pl-4 text-[14px] opacity-40 group-hover:opacity-100"
                    />
                    <p className="text-white pl-2 text-[14px] font-poppins_500 hover:font-poppins_600 opacity-40 group-hover:opacity-100">
                        {' '}
                        Dark Mode{' '}
                    </p>
                    <div className="h-8 w-10 bg-info absolute rounded-full -left-8 hidden group-hover:block transition-all duration-500"></div>
                </li>
                <li className="flex group items-center p-2 relative hover:cursor-pointer">
                    <FontAwesomeIcon
                        icon={faGear}
                        className="text-white p-2 pl-4 text-[14px] opacity-40 group-hover:opacity-100"
                    />
                    <p className="text-white pl-2 text-[14px] font-poppins_500 hover:font-poppins_600 opacity-40 group-hover:opacity-100">
                        {' '}
                        Settings{' '}
                    </p>
                    <div className="h-8 w-10 bg-info absolute rounded-full -left-8 hidden group-hover:block "></div>
                </li>
                <li className="flex group items-center p-2 relative hover:cursor-pointer">
                    <FontAwesomeIcon
                        icon={faRightFromBracket}
                        className="text-error p-2 pl-4 text-[14px] opacity-40 group-hover:opacity-100"
                    />
                    <p className="text-error pl-2 text-[14px] font-poppins_500 hover:font-poppins_600 opacity-40 group-hover:opacity-100">
                        {' '}
                        Logout{' '}
                    </p>
                    <div className="h-8 w-10 bg-info absolute rounded-full -left-8 hidden group-hover:block "></div>
                </li>
            </ul>
        </div>
    );
}
