import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-3xl my-14 font-bold">Welcome to Your Dashboard</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-12">
        <div className="card w-64 h-48 justify-start p-4 hover:shadow-green-pri hover:border-green-pri text-center flex-col flex items-center border-2 border-green-sec shadow-md hover:shadow-md hover:transition-all hover:duration-200 rounded-lg overflow-hidden">
          <div className="p-4">
            <h2 className="text-xl mb-2 font-bold text-red-pri">Orders</h2>
          </div>
          <div className="flex gap-2 p-4 bg-gray-200">
            <Link to='/orders/control' className="btn-main-lg">
              Control
            </Link>
            <Link to='/orders/status' className="btn-main-lg">
              List
            </Link>
          </div>
        </div>

        <div className="card w-64 h-48 justify-start p-4 hover:shadow-green-pri hover:border-green-pri text-center flex-col flex items-center border-2 border-green-sec shadow-md hover:shadow-md hover:transition-all hover:duration-200 rounded-lg overflow-hidden">
          <div className="p-4">
            <h2 className="text-xl mb-2 font-bold text-green-pri">Users</h2>
          </div>
          <div className="flex gap-2 p-4 bg-gray-200">
            <Link to='/users/control' className="btn-main-lg">
              Control
            </Link>
            <Link to='/users/list' className="btn-main-lg">
              List
            </Link>
          </div>
        </div>

        <div className="card w-64 h-48 justify-start p-4 hover:shadow-green-pri hover:border-green-pri text-center flex-col flex items-center border-2 border-green-sec shadow-md hover:shadow-md hover:transition-all hover:duration-200 rounded-lg overflow-hidden">
          <div className="p-4">
            <h2 className="text-xl mb-2 font-bold text-yellow-pri">Tables</h2>
          </div>
          <div className="flex gap-2 p-4 bg-gray-200">
            <Link to='/table/control' className="btn-main-lg">
              Control
            </Link>
            <Link to='/table/list' className="btn-main-lg">
              List
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
