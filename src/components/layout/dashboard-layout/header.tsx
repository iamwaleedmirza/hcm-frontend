import { Fragment } from "react/jsx-runtime"
import { Input } from "../../common/form/input"
import { CiSearch } from "react-icons/ci"
import { FaBell } from "react-icons/fa"
import profileImg from "@assets/images/profile.png"
import { IoIosArrowDown } from "react-icons/io";

export const Header = () => {
    return (
        <Fragment>
            <div className="header-main px-16 py-6">
                <div className="grid grid-cols-12">
                    <div className="col-span-6 search-div">
                        <Input type="text" placeholder="Search" Icon={CiSearch} />
                    </div>
                    <div className="col-span-6">
                        <div className="flex w-full justify-end align-center">
                            <div className="header-notification flex justify-center items-center text-white">
                                <FaBell className="text-xl" />
                            </div>
                            <div className="profile-div flex ml-5">
                                <img className="object-cover" src={profileImg} width={40} height={40} alt="profile image" />
                                <div className="pl-3 flex items-center">
                                    <div>
                                        <h3 className="font-bold mb-0">Robert Allen</h3>
                                        <p>HR Manager</p>
                                    </div>

                                    <div className="profile-arrow p-2">
                                        <IoIosArrowDown />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}