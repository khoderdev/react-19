import { Routes, Route, } from 'react-router-dom'
import { useSelector } from 'react-redux';
import Home from './components/Home'
import Layout from './components/Layout'
import Header from './components/Header'
import Features from './components/Features'

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
import TablePage from './components/tables';
import TableForm from './components/tables/TableForm';
import OrdersTableReadOnly from './components/tables/OrdersTableReadOnly';
import PostsManager from './components/posts/PostsManager';
import TodosList from './components/todos/TodosList';
import Todo from './components/todos/Todos';


function App() {
  const todos = useSelector(state => state.todos);

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
          {/* <Route path='/tasks/list' element={<TaskComponent tasks={tasks} /> */}
          } />

          <Route path='/table' element={<TablePage />} />
          <Route path='/table/control' element={<TableControl />} />
          <Route path='/table/form' element={<TableForm />} />
          <Route path='/table/list' element={<OrdersTableReadOnly />} />

          <Route path='/users' element={<UsersPage />} />
          <Route path='/users/control' element={<UsersControl />} />
          <Route path='/users/list' element={<UsersList />} />

          <Route path='/posts/manager' element={<PostsManager />} />

          <Route path='/todos' element={<Todo />} />
          <Route path='/todos/list' element={<TodosList  />} />

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
