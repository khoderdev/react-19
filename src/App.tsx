import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/Layout";
import Header from "./components/Header";

import UsersPage from "./components/users";
import UsersControl from "./components/users/UsersControl";
import UsersList from "./components/users/UsersList";

import JotaiOrdersTable from "./atom/examples/orders/OrdersTable";
import JotaiOrdersList from "./atom/examples/orders/OrdersList";
import JotaiOrdersForm from "./atom/examples/orders/OrdersForm";

import Tables from "./components/Table";

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
              <Route path="/" element={<Home />} />

              <Route path="/persons" element={<PersonAndCars />}></Route>

              <Route
                path="/jotai/orders/table"
                element={<JotaiOrdersTable />}
              />
              <Route path="/jotai/orders/new" element={<JotaiOrdersForm />} />
              <Route path="/jotai/orders/list" element={<JotaiOrdersList />} />

              <Route path="/users" element={<UsersPage />} />
              <Route path="/users/control" element={<UsersControl />} />
              <Route path="/users/list" element={<UsersList />} />

              <Route path="/tables" element={<Tables />} />

              <Route path="/todos/2" element={<TodoPage />} />
              <Route path="/todos/add" element={<TodoAdd />} />
              <Route path="/todos/list" element={<TodoList />} />
            </Routes>
          </Layout>
        </Suspense>
      </div>
    </>
  );
}
export default App;
