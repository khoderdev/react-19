
import { Link } from 'react-router-dom';

function Tables() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h3 className="text-3xl md:text-4xl mb-14 font-bold leading-normal">Tables</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-12">
        <div className="card w-full md:w-96 h-48 justify-start p-4 hover:shadow-green-pri hover:border-green-pri text-center flex-col flex items-center border-2 border-green-sec shadow-md hover:shadow-md hover:transition-all hover:duration-200 rounded-lg overflow-hidden">
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

       
      </div>
    </div>
  );
}

export default Tables;
