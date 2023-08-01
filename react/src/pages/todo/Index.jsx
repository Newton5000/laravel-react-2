import { Link, useSearchParams} from "react-router-dom";
import AppLayout from "../../layouts/AppLayout.jsx";
import PrimaryButton from "../../components/PrimaryButton.jsx";
import SecondaryButton from "../../components/SecondaryButton.jsx";
import {useState} from "react";
function Todo() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [params , setParams] = useState({
        perpage: 5,
        search: "",
    })
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setParams((prevProps) => ({
            ...prevProps,
            [name]: value
        }))
        setSearchParams(params) // real time update & debounce
    }
    return (
        <>
            <AppLayout>


                {/*Page Heading*/}
                <header className="bg-white shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        <h2 className="font-semibold text-xl text-gray-800 leading-tight">Todo List</h2>
                    </div>
                </header>


                <div className="antialiased">
                    <div className="container mx-auto px-4 sm:px-8">
                        <div className="py-8">
                            <div>
                                <h2 className="font-semibold leading-tight">Todos</h2>
                            </div>
                            <div className="sm:flex sm:justify-between">
                                <div className="my-2 flex sm:flex-row flex-col">
                                    <div className="flex flex-row mb-1 sm:mb-0">
                                        <div className="relative">
                                            <select
                                                value={params.perpage}
                                                onChange={handleInputChange}
                                                name="perpage"
                                                className="appearance-none h-full rounded-l border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                                                <option value={5}>5</option>
                                                <option value={10}>10</option>
                                                <option value={20}>20</option>
                                            </select>
                                            <div
                                                className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                                                     viewBox="0 0 20 20">
                                                    <path
                                                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="block relative">
                                        <span className="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                                            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current text-gray-500">
                                                <path
                                                    d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z">
                                                </path>
                                            </svg>
                                        </span>
                                        <input placeholder="Search"
                                               value={params.search}
                                               name="search"
                                               onChange={handleInputChange}
                                               className="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"/>
                                    </div>
                                </div>
                                <div className="my-2 flex sm:flex-row flex-col">
                                    <div className="flex flex-row mb-1 sm:mb-0">
                                        <div className="relative">
                                            <Link to="/todo/create">
                                                <PrimaryButton>
                                                    Add New
                                                </PrimaryButton>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                                <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                                    <table className="min-w-full leading-normal">
                                        <thead>
                                        <tr>
                                            <th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Name
                                            </th>
                                            <th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Category
                                            </th>
                                            <th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Created at
                                            </th>
                                            <th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Status
                                            </th>
                                            <th
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Action
                                            </th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td className="px-5 py-5 bg-white text-sm">
                                                <p className="text-gray-900 whitespace-nowrap">Name</p>
                                            </td>
                                            <td className="px-5 py-5 bg-white text-sm">
                                                <p className="text-gray-900 whitespace-nowrap">Admin</p>
                                            </td>
                                            <td className="px-5 py-5 bg-white text-sm">
                                                <p className="text-gray-900 whitespace-nowrap">Jan 18, 2020</p>
                                            </td>

                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <span
                                                        className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                                        <span aria-hidden
                                                              className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                                        <span className="relative">Activo</span>
                                                    </span>

                                                    <span
                                                        className="relative inline-block px-3 py-1 font-semibold text-orange-900 leading-tight">
                                                        <span aria-hidden
                                                              className="absolute inset-0 bg-orange-200 opacity-50 rounded-full"></span>
                                                        <span className="relative">Suspended</span>
                                                    </span>

                                                    <span
                                                        className="relative inline-block px-3 py-1 font-semibold text-gray-900 leading-tight">
                                                        <span aria-hidden
                                                              className="absolute inset-0 bg-gray-200 opacity-50 rounded-full"></span>
                                                        <span className="relative">Inactive</span>
                                                    </span>
                                            </td>
                                            <td className="bg-white text-sm space-x-2 whitespace-nowrap">
                                                <Link to={`/todo/edit/${123}`}>
                                                    <PrimaryButton>
                                                      Edit
                                                    </PrimaryButton>
                                                </Link>
                                                <SecondaryButton>
                                                    Delete
                                                </SecondaryButton>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    <div
                                        className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                                            <span className="text-xs xs:text-sm text-gray-900">
                                                Showing 1 to 4 of 50 Entries
                                            </span>
                                        <div className="inline-flex mt-2 xs:mt-0">
                                            <button
                                                className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l">
                                                Prev
                                            </button>
                                            <button
                                                className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r">
                                                Next
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </AppLayout>
        </>
    )
}

export default Todo
