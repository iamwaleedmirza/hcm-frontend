import { Footer } from "./footer"
import { Header } from "./header"
import { Sidebar } from "./sidebar"

export const DashboardLayout = () => {
    return (
        <div>
            <Header />
            <Sidebar />
            <Footer />
        </div>
    )
}