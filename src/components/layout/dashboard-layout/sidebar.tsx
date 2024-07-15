import logoImg from "../../../assets/logo/logo.png"
import { IoIosArrowForward } from "react-icons/io"
import { TbLayoutDashboardFilled } from "react-icons/tb"

export const Sidebar = () => {
    return (
        <div className="sidebar-main">
            <div className="logo flex items-center">
                <img src={logoImg} alt="logo img" width={123} height={50} />
            </div>
            <div className="menu-items mt-10">
                <ul>
                    <li>
                        <a href="#" className="active">
                            <span className="flex items-center">
                                <TbLayoutDashboardFilled />
                                <span className="pl-2">
                                    Dashboard
                                </span>
                            </span>
                            <span className="text-black none item-arrow">
                                <IoIosArrowForward />
                            </span>
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <span className="flex items-center">
                                <TbLayoutDashboardFilled />
                                <span className="pl-2">
                                    Dashboard
                                </span>
                            </span>
                            <span className="text-black item-arrow">
                                <IoIosArrowForward />
                            </span>
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <span className="flex items-center">
                                <TbLayoutDashboardFilled />
                                <span className="pl-2">
                                    Dashboard
                                </span>
                            </span>
                            <span className="text-black item-arrow">
                                <IoIosArrowForward />
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}