import { Fragment } from "react/jsx-runtime";
import speed from "../../assets/icons/speed test.svg";
import stopwatch from "../../assets/icons/stopwatch.svg";
import calendar from "../../assets/icons/calendar.svg";
import notepad from "../../assets/icons/notepad.svg";
import arrow from "../../assets/icons/Arrow.svg";
import calendarWhite from "../../assets/icons/calendar-white.svg";
import alarm from "../../assets/icons/alarm.svg";
import SemiCircleChart from "../charts/semiCircleChart";
import Calendar from "./calendar";
import PieChart from "../charts/pieChart";

export const DasboardCards = () => {
  interface ButtonData {
    id: number;
    text: string;
  }

  const buttonsData: ButtonData[] = [
    { id: 1, text: "Apply for leave" },
    { id: 2, text: "View Payslip" },
    { id: 3, text: "Update Profile" },
    { id: 4, text: "Events" },
  ];

  return (
    <Fragment>
      <div className="max-w-[1240px] xl:mx-auto mx-4 flex flex-col xl:flex-row gap-5 flex-wrap">
        <div className="flex flex-col md:flex-row gap-5">
          <div className="border border-borderColor rounded-xl p-6 xl:w-[358px] w-full">
            <h3 className="flex items-center gap-3 mb-4 text-textColor text-base font-semibold">
              <img src={speed} className="inline-block" alt="speed icon" />{" "}
              Quick Actions
            </h3>
            <hr className="border-[#D9E1E1CC] mb-6" />
            {buttonsData.map((button) => (
              <button
                key={button.id}
                className="bg-primary rounded-[10px] w-full my-4 text-white font-light text-base text-left p-4 flex items-center justify-between"
              >
                <div className="flex items-center">
                  <img
                    src={notepad}
                    className="inline-block mr-3"
                    alt="notepad icon"
                  />
                  {button.text}
                </div>
                <img src={arrow} className="inline-block" alt="arrow icon" />
              </button>
            ))}
          </div>

          <div className="border border-borderColor rounded-xl p-6 xl:w-[358px] w-full">
            <div className="flex items-center justify-between mb-4">
              <h3 className="flex items-center gap-3 text-textColor text-base font-semibold">
                <img
                  src={stopwatch}
                  className="inline-block"
                  alt="stopwatch icon"
                />{" "}
                Time Off
              </h3>
              <button className="bg-primary rounded-[10px] text-white font-light text-xs text-left p-3 flex items-center">
                See All
                <img
                  src={arrow}
                  className="inline-block ml-2 w-4"
                  alt="arrow icon"
                />
              </button>
            </div>
            <hr className="border-[#D9E1E1CC]" />
            <SemiCircleChart />

            <div className="w-full my-2 text-textColor text-left p-4 flex items-center justify-between text-sm font-light">
              <div className="flex items-center">
                <img src={alarm} className="inline-block mr-3" alt="icon" />
                April 15, 2024{" "}
                <span className="ml-2 text-[#A2A1A8CC]">(sick)</span>
              </div>
              <span className="bg-[#FEB85B] rounded-full py-1 px-3 text-sm font-light">
                Pending
              </span>
            </div>
            <hr className="border-[#D9E1E1CC]" />
            <div className="w-full my-2 text-textColor text-left p-4 flex items-center justify-between text-sm font-light">
              <div className="flex items-center">
                <img src={alarm} className="inline-block mr-3" alt="icon" />
                April 15, 2024{" "}
                <span className="ml-2 text-[#A2A1A8CC]">(sick)</span>
              </div>
              <span className="bg-[#FEB85B] rounded-full py-1 px-3 ">
                Pending
              </span>
            </div>
            <hr className="border-[#D9E1E1CC]" />
            <div className="w-full my-2 text-textColor text-left p-4 flex items-center justify-between text-sm font-light">
              <div className="flex items-center">
                <img src={alarm} className="inline-block mr-3" alt="icon" />
                April 15, 2024{" "}
                <span className="ml-2 text-[#A2A1A8CC]">(sick)</span>
              </div>
              <span className="bg-[#FEB85B] rounded-full py-1 px-3 text-sm font-light">
                Pending
              </span>
            </div>
            <hr className="border-[#D9E1E1CC]" />
          </div>
        </div>

        <div className="border border-borderColor rounded-xl p-6 flex-1 w-full">
          <div className="flex items-center justify-between mb-4">
            <h3 className="flex items-center gap-3 text-textColor text-base font-semibold">
              <img src={calendar} className="inline-block" alt="stopwatch" /> My
              Schedule
            </h3>
            <button className="bg-primary rounded-[10px] text-white font-light text-xs text-left p-3 flex items-center">
              <img
                src={calendarWhite}
                className="inline-block w-4"
                alt="arrow"
              />
            </button>
          </div>
          <hr className="border-[#D9E1E1CC]" />
          <Calendar />
        </div>

        <div className="border border-borderColor rounded-xl p-6 xl:w-[358px] w-full mb-10">
          <h3 className="flex items-center gap-3 mb-4 text-textColor text-base font-semibold">
            <img src={speed} className="inline-block" alt="speed icon" />{" "}
            Attention Overview
          </h3>
          <hr className="border-[#D9E1E1CC] mb-6" />
          <PieChart />
        </div>
      </div>
    </Fragment>
  );
};
