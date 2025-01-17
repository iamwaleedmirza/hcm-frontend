import { Fragment } from "react/jsx-runtime"
// import { Footer } from "./footer"
import { Header } from "./header"
import { Sidebar } from "./sidebar"
import "../../../styles/dashboardLayout.scss"
import { Outlet } from "react-router-dom"

export const DashboardLayout = () => {
    return (
        <Fragment>
            <div className="flex h-screen">
                <Sidebar />
                <div className="flex flex-col flex-grow">
                    <Header />
                    <main className="flex-grow px-16 py-6 overflow-y-auto">
                        <Outlet />
                    </main>
                    {/* <Footer /> */}
                </div>
            </div>
        </Fragment>
    )
}