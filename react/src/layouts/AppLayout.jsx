import {Link} from "react-router-dom";
import {useState} from "react";
import ApplicationLogo from "../components/ApplicationLogo.jsx";
function AppLayout({ children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false)
    return (
        <>
            <div>
                <div className="min-h-screen bg-gray-100">
                    <nav className="bg-white border-b border-gray-100">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="flex justify-between h-16">
                                <div className="flex">

                                    <div className="shrink-0 flex items-center">
                                        <Link to="/">
                                            <ApplicationLogo/>
                                        </Link>
                                    </div>

                                    <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                        <Link to={"/home"}>
                                            Dashboard
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="hidden sm:flex sm:items-center sm:ml-6">
                                <div className="ml-3 relative">
                                </div>
                            </div>
                        </div>
                    </nav>

                    {/*Page Content*/}
                    <main>
                        <div>{ children }</div>
                    </main>
                </div>
            </div>
        </>
    )
}

export default AppLayout
