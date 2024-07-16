import { Fragment } from "react/jsx-runtime";
import Profile from "../../../assets/profile-pic/avatar.png";
import svg from "../../../assets/icons/edit.svg";

export const DashboardProfile = () => {
  return (
    <Fragment>
      <div className="bg-gradient rounded-2xl max-w-[1240px] xl:mx-auto mx-4 md:h-[200px] flex sm:flex-row flex-col justify-between items-center px-10 py-5 mb-10">
        <div className="flex gap-4 items-center md:mb-0 mb-5">
          <img src={Profile} alt="Profile Pic" className="w-28 h-28" />
          <div>
            <h2 className="text-white font-semibold md:text-[40px] text-2xl md:mb-3 mb-2">
              Robert Allen
            </h2>
            <h5 className="text-white font-light lg:text-2xl text-lg">
              UX/UI Designer
            </h5>
          </div>
        </div>
        <div>
          <button className="bg-white rounded-[10px] text-primary px-4 py-3 font-light text-base">
            <img src={svg} alt="Edit Icon" className="inline-block" /> Edit
            Profile
          </button>
        </div>
      </div>
    </Fragment>
  );
};
