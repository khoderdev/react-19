import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="flex flex-col justify-center items-center pb-8">
      <h4 className="mb-8 md:mb-16 text-center font-bold leading-normal">Welcome to Dashboard</h4>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-12">

        <div className="card justify-start p-4 hover:shadow-green-pri hover:border-green-pri text-center flex-col flex items-center border-2 border-green-sec shadow-md hover:shadow-md hover:transition-all hover:duration-200 rounded-lg overflow-hidden">
          <div className="p-4">
            <h2 className="text-xl mb-2 font-bold text-red-pri">Jotai</h2>
          </div>
          <div className="flex gap-2 p-4 bg-gray-200">
            <Link to='/jotai/orders/table' className="btn-main-lg !bg-white-contents dark:!bg-black-contents">
              Control
            </Link>
            <Link to='/jotai/orders/new' className="btn-main-lg !bg-white-contents dark:!bg-black-contents">
              Add New
            </Link>
            <Link to='/jotai/orders/list' className="btn-main-lg !bg-white-contents dark:!bg-black-contents">
              List
            </Link>
          </div>
        </div>

        <div className="card justify-start p-4 hover:shadow-green-pri hover:border-green-pri text-center flex-col flex items-center border-2 border-green-sec shadow-md hover:shadow-md hover:transition-all hover:duration-200 rounded-lg overflow-hidden">
          <div className="p-4">
            <h2 className="text-xl mb-2 font-bold text-green-pri">Users</h2>
          </div>
          <div className="flex gap-2 p-4 bg-gray-200">
            <Link to='/users/control' className="btn-main-lg !bg-white-contents dark:!bg-black-contents">
              Control
            </Link>
            <Link to='/users/list' className="btn-main-lg !bg-white-contents dark:!bg-black-contents">
              List
            </Link>
          </div>
        </div>

        <div className="card justify-start p-4 hover:shadow-green-pri hover:border-green-pri text-center flex-col flex items-center border-2 border-green-sec shadow-md hover:shadow-md hover:transition-all hover:duration-200 rounded-lg overflow-hidden">
          <div className="p-4">
            <h2 className="text-xl mb-2 font-bold text-yellow-pri">Todos</h2>
          </div>
          <div className="flex gap-2 p-4 bg-gray-200">
            <Link to='/todos' className="btn-main-lg !bg-white-contents dark:!bg-black-contents">
              Todos
            </Link>
            <Link to='/todos/list' className="btn-main-lg !bg-white-contents dark:!bg-black-contents">
              List
            </Link>
          </div>
        </div>



        <div className="card justify-start p-4 hover:shadow-green-pri hover:border-green-pri text-center flex-col flex items-center border-2 border-green-sec shadow-md hover:shadow-md hover:transition-all hover:duration-200 rounded-lg overflow-hidden">
          <div className="p-4">
            <h2 className="text-xl mb-2 font-bold text-green-pri">Redux</h2>
          </div>
          <div className="flex gap-2 p-4 bg-gray-200">
            <Link to='/orders/control' className="btn-main-lg !bg-white-contents dark:!bg-black-contents">
              Control
            </Link>
            <Link to='/orders/list' className="btn-main-lg !bg-white-contents dark:!bg-black-contents">
              List
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
