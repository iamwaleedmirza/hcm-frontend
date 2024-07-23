import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import logoImg from "@assets/logo/logo.png";
import arrowSvg from "@assets/icons/left-arrow.svg";

export const Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleSidebar = () => {
        setIsSidebarOpen(prevState => !prevState);
    };

    const handleResize = () => {
        setIsSidebarOpen(window.innerWidth < 992);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className={`sidebar-main relative ${isSidebarOpen ? 'close-sidebar' : ''}`}>
            <div className="logo flex items-center">
                <img src={logoImg} alt="logo img" width={123} height={50} />
            </div>
            <div className="menu-items mt-10">
                <button onClick={handleSidebar} className="sidebar-arrow absolute bg-primaryTransparent py-4 px-2">
                    <img src={arrowSvg} width={6} height={11} alt="arrow svg" />
                </button>
                <ul>
                    <li>
                        <Link to="/dashboard" className="active">
                            <span className="flex items-center">
                                <TbLayoutDashboardFilled />
                                <span className="pl-2">Dashboard</span>
                            </span>
                            <span className="text-black none item-arrow">
                                <IoIosArrowForward />
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <span className="flex items-center">
                                <TbLayoutDashboardFilled />
                                <span className="pl-2">Dashboard</span>
                            </span>
                            <span className="text-black item-arrow">
                                <IoIosArrowForward />
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <span className="flex items-center">
                                <TbLayoutDashboardFilled />
                                <span className="pl-2">Dashboard</span>
                            </span>
                            <span className="text-black item-arrow">
                                <IoIosArrowForward />
                            </span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};