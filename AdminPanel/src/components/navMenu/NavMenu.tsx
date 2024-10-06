import { useState } from 'react';
import { MantineProvider } from '@mantine/core';
import './NavMenu.css';
import { SiStatista } from "react-icons/si";
import { FaCalendar, FaFileInvoice } from "react-icons/fa";
import { PiFinnTheHuman } from "react-icons/pi";
import { IoMenu } from "react-icons/io5";


const menuItems = [
    {
        title: "Dashboard",
        href: "",
        icon: <SiStatista />,
    },
    {
        title: "Calendar",
        href: "",
        icon: <FaCalendar />,
    },
    {
        title: "Invoices",
        href: "",
        icon: <FaFileInvoice />,
    },
    {
        title: "Reviews",
        href: "",
        icon: <PiFinnTheHuman />,
    }
];


function NavMenu() {

    const [isVisible, setIsVisible] = useState(true);

    function openMenu() {
        setIsVisible(!isVisible);
    }

    return (
        <MantineProvider>
            <IoMenu size={32} onClick={openMenu} cursor='pointer' />
            <nav className={`navHolder ${isVisible ? 'visibleStyle' : 'hiddenStyle'}`}>
                {menuItems.map((item, index) => (
                    <div key={index} className="menu">
                        <div className='icons'>{item.icon}</div>
                        <div className='links'><a href={item.href}>{item.title}</a></div>
                    </div>
                ))}
            </nav>
        </MantineProvider>
    )
}

export default NavMenu;
