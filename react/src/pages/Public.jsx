import {Link} from "react-router-dom";

function Public() {
    return (
        <>
            <div
                className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white"
            >
                <div className="sm:fixed sm:top-0 sm:right-0 p-6 text-right">
                    <Link to="/home"
                    class="mr-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                    >Dashboard</Link
                >

                    <Link to="/login"
                    class="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                    >Log in</Link
                >

                <Link to="/register"
                class="ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                >Register</Link
            >

        </div>

    <div className="max-w-7xl mx-auto p-6 lg:p-8">
        <h1>React & Vue + Laravel</h1>
    </div>
</div>

        </>
    )
}

export default Public
