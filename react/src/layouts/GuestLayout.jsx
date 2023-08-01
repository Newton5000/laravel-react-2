import {Link} from "react-router-dom";
import ApplicationLogo from "../components/ApplicationLogo.jsx";

function GuestLaout({ children }) {
    return (
        <>
            <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
                <div>
                    <Link to="/">
                        <ApplicationLogo />
                    </Link>
                </div>

                <div
                    className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg"
                >
                    <div>{ children }</div>
                </div>
            </div>
        </>
    )
}

export default GuestLaout
