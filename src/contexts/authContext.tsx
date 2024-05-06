// import { createContext, useContext } from "react";
// import { useAtom } from "jotai";
// import {
//   persistedIsLoggedInAtom,
//   Users,
//   userNameAtom,
//   userRolesAtom,
//   tokenAtom,
// } from "../atom/store";

// // Create a context for authentication
// export const AuthContext = createContext();

// // Provider component to wrap your application with
// export const AuthProvider = ({ children }) => {
//   const [isLoggedIn, setIsLoggedIn] = useAtom(persistedIsLoggedInAtom);
//   const [, setToken] = useAtom(tokenAtom);
//   const [userName, setUserName] = useAtom(userNameAtom);
//   const [userRoles, setUserRules] = useAtom(userRolesAtom);

//   // Function to handle login
//   const handleLogin = (username, password) => {
//     const foundUser = Users.find(
//       (user) => user.username === username && user.password === password
//     );
//     if (foundUser) {
//       setIsLoggedIn(true);
//       setUserName(foundUser.username);
//       setUserRules(foundUser.role);
//     }
//   };

//   return (
//     <AuthContext.Provider value={{ isLoggedIn, handleLogin }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// // Custom hook to access authentication state and methods
// export const useAuth = () => {
//   const auth = useContext(AuthContext);
//   if (!auth) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }
//   return auth;
// };




import { createContext, useContext } from "react";
import { useAtom } from "jotai";
import {
  persistedIsLoggedInAtom,
  Users,
  userNameAtom,
  userRolesAtom,
} from "../atom/store";

// Create a context for authentication
export const AuthContext = createContext<any>(null);

// Provider component to wrap your application with
export const AuthProvider: React.FC = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useAtom(persistedIsLoggedInAtom);
  const [, setUserName] = useAtom(userNameAtom);
  const [, setUserRoles] = useAtom(userRolesAtom);

  // Function to handle login
  const handleLogin = (username: string, password: string) => {
    const foundUser = Users.find(
      (user) => user.username === username && user.password === password
    );
    if (foundUser) {
      setIsLoggedIn(true);
      setUserName(foundUser.username);
      setUserRoles(foundUser.role);
    }
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, handleLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to access authentication state and methods
export const useAuth = () => {
  const auth = useContext(AuthContext);
  if (!auth) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return auth;
};
