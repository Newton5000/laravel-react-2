import {Link, useLocation} from "react-router-dom";
import {useState} from "react";
import ApplicationLogo from "../components/ApplicationLogo.jsx";
import NavLink from "../components/NavLink.jsx";
import {padStart} from "lodash/string.js";
function AppLayout({ children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false)

    const location = useLocation()

    const { pathname } = location

    const splitLocation = pathname.split("/")

    return (
        <>
            <div>
                <div className="min-h-screen bg-gray-100">
                    <nav className="bg-white border-b border-gray-100">
                         {/*Primary Navigation Menu*/}
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="flex justify-between h-16">
                                <div className="flex">
                                    {/*Logo*/}
                                    <div className="shrink-0 flex items-center">
                                        <Link to='/'>
                                        <ApplicationLogo
                                            class="block h-9 w-auto fill-current text-gray-800"
                                        />
                                    </Link>
                                </div>


                                    {/*Navigation Links*/}
                                    <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                        <NavLink text="Home" to="/home" active={ splitLocation[1] === "home" ? "active" : "" } />
                                    </div>
                                    <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                        <NavLink text="Home2" to="/home2" active={ splitLocation[1] === "home2" ? "active" : "" } />
                                    </div>
                                    <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                        <NavLink text="Admin" to="/admin" active={ splitLocation[1] === "admin" ? "active" : "" } />
                                    </div>
                                </div>


                                <div className="hidden sm:flex sm:items-center sm:ml-6">
                                    {/*Settings Dropdown */}
                                    <div className="ml-3 relative">
                                        <div className="text-right" width="48">
                                            <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                            >
                                              Levinl

                                                <svg
                                                    className="ml-2 -mr-0.5 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                        </div>
                                    </div>
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
