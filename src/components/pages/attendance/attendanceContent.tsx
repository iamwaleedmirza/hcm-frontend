import { Fragment } from "react/jsx-runtime";
import speed from "@assets/icons/speed test.svg";
import laptop from "@assets/icons/laptop.svg";
import notes from "@assets/icons/notes.svg";
import excellence from "@assets/icons/excellence.svg";
import { AttendanceCard } from "../../common/attendanceCard";
import DonutChart from "../../charts/donutChart";
import ColumnChart from "../../charts/columnChart";

export const AttendanceContent = () => {
  return (
    <Fragment>
      <div className="max-w-[1240px] xl:mx-auto mx-4 flex flex-col xl:flex-row gap-5 flex-wrap">
        <div className="grid grid-cols-12 gap-10 h-full">
          <div className="col-span-12 grid grid-cols-12 gap-5 h-full">
            <div className="col-span-4">
              <AttendanceCard text="Attendance Rating" img={laptop}>
                <DonutChart />
                <div className="flex gap-2 mt-3">
                  <div>
                    <img src={excellence} width={50} />
                  </div>
                  <p className="text-xs">
                    <span className="text-primary font-bold">Good Job.</span>{" "}
                    You can do better job by reducing your late check ins.
                  </p>
                </div>
              </AttendanceCard>
            </div>

            <div className="col-span-5">
              <AttendanceCard text="Attendance Overview" img={speed}>
                <ColumnChart />
              </AttendanceCard>
            </div>

            <div className="col-span-3">
              <AttendanceCard
                text="Activity Status"
                img={laptop}
              ></AttendanceCard>
            </div>

            <div className="col-span-12">
              <ul className="grid grid-cols-3 gap-4 max-w-72 mx-auto">
                <li className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-[#7152F3] rounded-full"></span>
                  On Time
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-[#f45b69] rounded-full"></span>
                  Late
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-[#feb85b] rounded-full"></span>
                  Absent
                </li>
              </ul>
            </div>
          </div>

          <div className="col-span-9">
            <AttendanceCard
              text="Attendance Details"
              img={notes}
            ></AttendanceCard>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
