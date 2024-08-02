import { Fragment } from "react/jsx-runtime";
import speed from "@assets/icons/speed test.svg";
import stopwatch from "@assets/icons/stopwatch.svg";
import calendar from "@assets/icons/calendar.svg";
import notepad from "@assets/icons/notepad.svg";
import arrow from "@assets/icons/Arrow.svg";
import calendarWhite from "@assets/icons/calendar-white.svg";
import alarm from "@assets/icons/alarm.svg";
import SemiCircleChart from "../../charts/semiCircleChart";
import Calendar from "./calendar";
import { DashboardCard } from "../../common/dashboardCard";
import PieChart from "../../charts/pieChart";

export const DashboardContent = () => {
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
        <div className="grid grid-cols-12 gap-5 h-full">
          <div className="col-span-7 h-full">
            <div className="grid grid-cols-12 gap-5 h-full">
              <div className="col-span-6 h-full">
                <DashboardCard text="test" img={speed}>
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
                      <img
                        src={arrow}
                        className="inline-block"
                        alt="arrow icon"
                      />
                    </button>
                  ))}
                </DashboardCard>
              </div>
              <div className="col-span-6 h-full">
                <DashboardCard
                  text="Time Off"
                  img={stopwatch}
                  buttonText="See all"
                  buttonIcon={arrow}
                >
                  <SemiCircleChart />
                  <div className="w-full my-2 text-textColor text-left p-4 flex items-center justify-between text-sm font-light">
                    <div className="flex items-center">
                      <img
                        src={alarm}
                        className="inline-block mr-3"
                        alt="icon"
                      />
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
                      <img
                        src={alarm}
                        className="inline-block mr-3"
                        alt="icon"
                      />
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
                      <img
                        src={alarm}
                        className="inline-block mr-3"
                        alt="icon"
                      />
                      April 15, 2024{" "}
                      <span className="ml-2 text-[#A2A1A8CC]">(sick)</span>
                    </div>
                    <span className="bg-[#FEB85B] rounded-full py-1 px-3 text-sm font-light">
                      Pending
                    </span>
                  </div>
                  <hr className="border-[#D9E1E1CC]" />
                </DashboardCard>
              </div>
            </div>
          </div>

          <div className="col-span-5">
            <DashboardCard
              text="My Schedule"
              img={calendar}
              buttonIcon={calendarWhite}
            >
              <Calendar />
            </DashboardCard>
          </div>

          <div className="col-span-4">
            <DashboardCard text="Attention Overview" img={speed}>
              <PieChart />
            </DashboardCard>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
