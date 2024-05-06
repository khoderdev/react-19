import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../components/Home";
import OrdersForm from "../atom/examples/orders/OrdersForm";
import OrdersList from "../atom/examples/orders/OrdersList";
import OrdersTable from "../atom/examples/orders/OrdersTable";
import { useAtom } from "jotai";
import { userRolesAtom } from "../atom/store";
import ShieldIcon from "../../public/ShieldIcon";

const AppRoutes = () => {
  const [userRoles] = useAtom(userRolesAtom);
  console.log("User Roles:", userRoles);

  // Check if the user has the Admin role
  const isAdmin = userRoles && userRoles.includes("Admin");
  // Check if the user has the User role
  const isUser = userRoles && userRoles.includes("User");

  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* Render OrdersForm only if the user is an Admin */}
      {isAdmin && (
        <>
          <Route path="/orders/admin" element={<OrdersTable />} />
          <Route path="/orders/new" element={<OrdersForm />} />
          <Route path="/orders" element={<OrdersList />} />
        </>
      )}

      {/* Render OrdersList only if the user is an Admin or User */}
      {isUser ? (
        <>
          <Route path="/orders" element={<OrdersList />} />
          <Route path="/orders/new" element={<OrdersForm />} />
        </>
      ) : (
        <Route
          path="/orders"
          element={<Navigate to="/not-authorized" replace />}
        />
      )}

      {/* Render OrdersTable only if the user is an Admin */}
      {isAdmin ? (
        <Route path="/orders/admin" element={<OrdersTable />} />
      ) : (
        <Route
          path="/orders/admin"
          element={<Navigate to="/not-authorized" replace />}
        />
      )}

      {/* Not Authorized Route */}
      <Route
        path="/not-authorized"
        element={
          <>
            <h1 className="text-yellow-pri text-center font-semibold">
              Not Authorized
            </h1>
            <ShieldIcon className=" text-yellow-pri" />
          </>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
