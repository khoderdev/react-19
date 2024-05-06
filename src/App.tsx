import { Suspense } from "react";
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Layout from './components/Layout'
import Header from './components/Header'

import OrdersPage from './components/orders';

import UsersPage from './components/users'
import UsersControl from './components/users/UsersControl'
import UsersList from './components/users/UsersList'

import JotaiOrdersTable from './atom/examples/orders/OrdersTable';
import JotaiOrdersList from './atom/examples/orders/OrdersList';
import JotaiOrdersForm from './atom/examples/orders/OrdersForm';

import OrdersTable from './components/orders/OrdersTable';
import OrdersList from './components/orders/OrdersList';
import Tables from "./components/Table";
import Action from "./components/examples/Actions";
import Optimistic from "./components/examples/Optimistic";
import FormState from "./components/examples/FormState";
import FormStatus from "./components/examples/FormStatus";
import User from "./components/examples/Users";
import Orders from "./components/examples/Orders";
import TodoPage from "./components/todos/test2/";
import TodoAdd from "./components/todos/test2/TodoAdd";
import TodoList from "./components/todos/test2/TodoList";
import PersonAndCars from "./atom/examples/orders/persons/";

function App() {
  return (
    <>
      <div>
        <Suspense
          fallback={
            <h1 className="text-2xl text-center font-bold mt-5">Loading...</h1>
          }
        >
          <Header />
          <Layout>
            <Routes>
              <Route path='/' element={<Home />} />

              <Route path='/persons' element={
                <PersonAndCars />
              }>
              </Route>


              <Route path='/jotai/orders/table' element={<JotaiOrdersTable />} />
              <Route path='/jotai/orders/new' element={<JotaiOrdersForm />} />
              <Route path='/jotai/orders/list' element={<JotaiOrdersList />} />

              <Route path='/action' element={<Action />} />
              <Route path='/optimistic' element={<Optimistic />} />
              <Route path='/FormStatus' element={<FormStatus />} />
              <Route path='/FormState' element={<FormState />} />
              <Route path='/user' element={<User />} />

              <Route path='/orders' element={<OrdersPage />} />
              <Route path='/orders/control' element={<OrdersTable />} />
              <Route path='/orders/list' element={<OrdersList />} />

              <Route path='/order' element={<Orders />} />

              <Route path='/users' element={<UsersPage />} />
              <Route path='/users/control' element={<UsersControl />} />
              <Route path='/users/list' element={<UsersList />} />

              <Route path='/tables' element={<Tables />} />

              <Route path='/todos/2' element={<TodoPage />} />
              <Route path='/todos/add' element={<TodoAdd />} />
              <Route path='/todos/list' element={<TodoList />} />
              {/* <Route path='/todos' element={<Todos />} />
                <Route path='/todos/add' element={<Todo />} />
                <Route path='/todos/list' element={<TodosList />} /> */}
            </Routes>
          </Layout>
        </Suspense>
      </div>
    </>
  );
}
export default App;
