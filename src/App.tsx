import { Routes, Route, } from 'react-router-dom'
import { useSelector } from 'react-redux';
import Home from './components/Home'
import Layout from './components/Layout'
import Header from './components/Header'

import OrdersPage from './components/orders';

import UsersPage from './components/users'
import UsersControl from './components/users/UsersControl'
import UsersList from './components/users/UsersList'

import TodosList from './components/todos/TodosList';
import Todo from './components/todos/Todos';
import OrdersTable from './components/orders/OrdersTable';
import OrdersList from './components/orders/OrdersList';


function App() {
  const todos = useSelector(state => state.todos);

  return (
    <>
      <Header />
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/orders' element={<OrdersPage />} />
          <Route path='/orders/control' element={<OrdersTable />} />
          <Route path='orders/list' element={<OrdersList />} />

          <Route path='/users' element={<UsersPage />} />
          <Route path='/users/control' element={<UsersControl />} />
          <Route path='/users/list' element={<UsersList />} />

          <Route path='/todos' element={<Todo />} />
          <Route path='/todos/list' element={<TodosList />} />

      
        </Routes>
      </Layout>
    </>
  );
}
export default App
