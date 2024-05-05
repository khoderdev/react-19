import { Link } from 'react-router-dom'

function Tables() {

  return (
    <div className="flex flex-col justify-center items-center">
      <h3 className="!text-3xl md:!text-4xl mb-14 font-bold leading-normal">Tables</h3>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-12 md:gap-96">
        <div className="card w-96 h-48 justify-start p-4 hover:shadow-green-pri hover:border-green-pri text-center flex-col flex items-center border-2 border-green-sec shadow-md hover:shadow-md hover:transition-all hover:duration-200 rounded-lg overflow-hidden">
          <div className="p-4">
            <h2 className="text-xl mb-2 font-bold text-red-pri">Jotai</h2>
          </div>
          <div className="flex gap-2 p-4 bg-gray-200">
            <Link to='/jotai/orders/table' className="btn-main-lg">
              Control
            </Link>
            <Link to='/jotai/orders/new' className="btn-main-lg">
              Add New
            </Link>
            <Link to='/jotai/orders/list' className="btn-main-lg">
              List
            </Link>
          </div>
        </div>

        <div className="card w-64 h-48 justify-start p-4 hover:shadow-green-pri hover:border-green-pri text-center flex-col flex items-center border-2 border-green-sec shadow-md hover:shadow-md hover:transition-all hover:duration-200 rounded-lg overflow-hidden">
          <div className="p-4">
            <h2 className="text-xl mb-2 font-bold text-green-pri">Redux</h2>
          </div>
          <div className="flex gap-2 p-4 bg-gray-200">
            <Link to='/orders/control' className="btn-main-lg">
              Control
            </Link>
            <Link to='/orders/list' className="btn-main-lg">
              List
            </Link>
          </div>
        </div>

        {/* <div className="card w-64 h-48 justify-start p-4 hover:shadow-green-pri hover:border-green-pri text-center flex-col flex items-center border-2 border-green-sec shadow-md hover:shadow-md hover:transition-all hover:duration-200 rounded-lg overflow-hidden">
          <div className="p-4">
            <h2 className="text-xl mb-2 font-bold text-yellow-pri">Todos</h2>
          </div>
          <div className="flex gap-2 p-4 bg-gray-200">
            <Link to='/todos' className="btn-main-lg">
              Todos
            </Link>
            <Link to='/todos/list' className="btn-main-lg">
              List
            </Link>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Tables
