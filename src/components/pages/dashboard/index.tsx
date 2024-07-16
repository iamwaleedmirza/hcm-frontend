import { Fragment } from "react/jsx-runtime"
import { DashboardContent } from "./dashboardContent"
import { DashboardProfile } from "./dashboardProfile"

export const DashboardMain = () => {
    return (
        <Fragment>
            <DashboardProfile />
            <DashboardContent />
        </Fragment>
    )
}