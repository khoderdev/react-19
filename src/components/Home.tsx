import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="flex flex-col justify-start items-center px-4 py-8  bg-gray-50 dark:bg-gray-900">
      <h4 className="mb-6 md:mb-12 text-center text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight text-gray-800 dark:text-gray-200">
        Welcome to the Dashboard
      </h4>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8 lg:gap-10">
        {/* Orders Card */}
        <div className="card transform hover:scale-105 transition-transform duration-300 ease-in-out bg-white dark:bg-gray-800 border-2 border-green-sec rounded-xl shadow-lg overflow-hidden">
          <div className="p-4">
            <h2 className="text-xl md:text-2xl font-semibold text-red-600 dark:text-red-400 mb-2">
              Orders
            </h2>
          </div>
          <div className="flex gap-2 p-4 bg-gray-100 dark:bg-gray-700 w-full justify-center">
            <Link
              to="/orders/admin"
              className="btn-main-lg bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300 ease-in-out px-4 py-2 rounded-lg hover:bg-green-100 dark:hover:bg-green-800"
            >
              Control
            </Link>
            <Link
              to="/orders/new"
              className="btn-main-lg bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300 ease-in-out px-4 py-2 rounded-lg hover:bg-green-100 dark:hover:bg-green-800"
            >
              Add New
            </Link>
            <Link
              to="/orders"
              className="btn-main-lg bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300 ease-in-out px-4 py-2 rounded-lg hover:bg-green-100 dark:hover:bg-green-800"
            >
              List
            </Link>
          </div>
        </div>

        {/* Users Card */}
        <div className="card transform hover:scale-105 transition-transform duration-300 ease-in-out bg-white dark:bg-gray-800 border-2 border-green-sec rounded-xl shadow-lg overflow-hidden">
          <div className="p-4">
            <h2 className="text-xl md:text-2xl font-semibold text-green-600 dark:text-green-400 mb-2">
              Users
            </h2>
          </div>
          <div className="flex gap-2 p-4 bg-gray-100 dark:bg-gray-700 w-full justify-center">
            <Link
              to="/users/control"
              className="btn-main-lg bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300 ease-in-out px-4 py-2 rounded-lg hover:bg-green-100 dark:hover:bg-green-800"
            >
              Control
            </Link>
            <Link
              to="/users/list"
              className="btn-main-lg bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300 ease-in-out px-4 py-2 rounded-lg hover:bg-green-100 dark:hover:bg-green-800"
            >
              List
            </Link>
          </div>
        </div>

        {/* Todos Card */}
        <div className="card transform hover:scale-105 transition-transform duration-300 ease-in-out bg-white dark:bg-gray-800 border-2 border-green-sec rounded-xl shadow-lg overflow-hidden">
          <div className="p-4">
            <h2 className="text-xl md:text-2xl font-semibold text-yellow-600 dark:text-yellow-400 mb-2">
              Todos
            </h2>
          </div>
          <div className="flex gap-2 p-4 bg-gray-100 dark:bg-gray-700 w-full justify-center">
            <Link
              to="/todos"
              className="btn-main-lg bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300 ease-in-out px-4 py-2 rounded-lg hover:bg-green-100 dark:hover:bg-green-800"
            >
              Todos
            </Link>
            <Link
              to="/todos/list"
              className="btn-main-lg bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300 ease-in-out px-4 py-2 rounded-lg hover:bg-green-100 dark:hover:bg-green-800"
            >
              List
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
