import { Routes, Route, } from 'react-router-dom'
import { useSelector } from 'react-redux';
import Home from './components/Home'
import Layout from './components/Layout'
import Header from './components/Header'
import Features from './components/Features'
import Users from './components/Users'

import Login from './components/Login'

import OrdersPage from './components/orders';
import OrdersControl from './components/orders/OrdersControl';
import OrdersStatus from './components/orders/OrdersStatus';

import UsersPage from './components/users'
import UsersControl from './components/users/UsersControl'
import UsersList from './components/users/UsersList'

import UseReducerExample from './components/examples/UseReducerExample'
import ReduxExample from './components/examples/CounterReduxExample'

import TaskManagerComponent from './components/TaskManagerComponent'
import TaskComponent from './components/TaskComponent'
import TableControl from './components/tables/TableControl';
import TableDisplay from './components/tables/TableDisplay';
import TablePage from './components/tables';


function App() {
  const tasks = useSelector((state) => state.tasks);

  return (
    <>
      <Header />
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/orders' element={<OrdersPage />} />
          <Route path='/orders/control' element={<OrdersControl />} />
          <Route path='orders/status' element={<OrdersStatus />} />

          <Route path='/tasks/manager' element={<TaskManagerComponent />} />
          <Route path='/tasks/list' element={<TaskComponent tasks={tasks} />
          } />

          <Route path='/table' element={<TablePage />} />
          <Route path='/table/control' element={<TableControl />} />
          <Route path='/table/list' element={<TableDisplay />} />

          <Route path='/users' element={<UsersPage />} />
          <Route path='/users/control' element={<UsersControl />} />
          <Route path='/users/list' element={<UsersList />} />

          <Route path='/useReducer' element={<UseReducerExample />} />
          <Route path='/reduxCounter' element={<ReduxExample />} />


          <Route path='/features' element={<Features />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Layout>
    </>
  );
}
export default App
