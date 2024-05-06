// import React, { ReactNode } from "react";
// import { useAtom } from "jotai";
// import {
//   userNameAtom,
//   userRolesAtom,
//   persistedIsLoggedInAtom,
//   Users,
//   tokenAtom,
// } from "../atom/store";

// interface IsLoggedInProps {
//   children: ReactNode;
// }

// const IsLoggedIn: React.FC<IsLoggedInProps> = ({ children }) => {
//   const [isLoggedIn, setIsLoggedIn] = useAtom(persistedIsLoggedInAtom);
//   const [, setToken] = useAtom(tokenAtom);
//   const [userName, setUserName] = useAtom(userNameAtom);
//   const [userRoles, setUserRules] = useAtom(userRolesAtom);

//   const handleLogin = (username: string, password: string) => {
//     const foundUser = Users.find(
//       (user) => user.username === username && user.password === password
//     );
//     if (foundUser) {
//       setIsLoggedIn(true);
//       // Set user name and rules after login
//       setUserName(foundUser.username);
//       setUserRules(foundUser.role);
//     }
//   };

//   return isLoggedIn ? (
//     <>{children}</>
//   ) : (
//     <div className="flex flex-col gap-6 justify-center items-center">
//       <h1 className="text-red-pri font-semibold">You're Not Logged In</h1>
//       <button onClick={() => handleLogin("khoder", "admin123")}>
//         Login as Admin
//       </button>
//       <button onClick={() => handleLogin("ucef", "user123")}>
//         Login as User
//       </button>
//     </div>
//   );
// };

// export default IsLoggedIn;

// ///////////////////////////////////

// import React, { ReactNode, useContext } from "react";
// import { useAtom } from "jotai";
// import {
//   userNameAtom,
//   userRolesAtom,
//   persistedIsLoggedInAtom,
//   Users,
//   tokenAtom,
// } from "../atom/store";
// import { AuthContext } from "../contexts/authContext";

// interface IsLoggedInProps {
//   children: ReactNode;
// }

// const IsLoggedIn: React.FC<IsLoggedInProps> = ({ children }) => {
//   const { isLoggedIn, handleLogin } = useContext(AuthContext);

//   const [, setToken] = useAtom(tokenAtom);
//   const [userName, setUserName] = useAtom(userNameAtom);
//   const [userRoles, setUserRules] = useAtom(userRolesAtom);

//   const handleLoginClick = (username: string, password: string) => {
//     const foundUser = Users.find(
//       (user) => user.username === username && user.password === password
//     );
//     if (foundUser) {
//       handleLogin(username, password);
//       // Set user name and rules after login
//       setUserName(foundUser.username);
//       setUserRules(foundUser.role);
//     }
//   };

//   return isLoggedIn ? (
//     <>{children}</>
//   ) : (
//     <div className="flex flex-col gap-6 justify-center items-center">
//       <h1 className="text-red-pri font-semibold">You're Not Logged In</h1>
//       <button onClick={() => handleLoginClick("khoder", "admin123")}>
//         Login as Admin
//       </button>
//       <button onClick={() => handleLoginClick("ucef", "user123")}>
//         Login as User
//       </button>
//     </div>
//   );
// };

// export default IsLoggedIn;



import React, { ReactNode, useContext } from "react";
import { useAtom } from "jotai";
import {
  userNameAtom,
  userRolesAtom,
  Users,
} from "../atom/store";
import { AuthContext } from "../contexts/authContext";

interface IsLoggedInProps {
  children: ReactNode;
}

const IsLoggedIn: React.FC<IsLoggedInProps> = ({ children }) => {
  const { isLoggedIn, handleLogin } = useContext(AuthContext);

  const [, setUserName] = useAtom(userNameAtom);
  const [, setUserRoles] = useAtom(userRolesAtom);

  const handleLoginClick = (username: string, password: string) => {
    const foundUser = Users.find(
      (user) => user.username === username && user.password === password
    );
    if (foundUser) {
      handleLogin(username, password);
      // Set user name and roles after login
      setUserName(foundUser.username);
      setUserRoles(foundUser.role);
    }
  };

  return isLoggedIn ? (
    <>{children}</>
  ) : (
    <div className="flex flex-col gap-6 justify-center items-center">
      <h1 className="text-red-pri font-semibold">You're Not Logged In</h1>
      <button onClick={() => handleLoginClick("khoder", "admin123")}>
        Login as Admin
      </button>
      <button onClick={() => handleLoginClick("ucef", "user123")}>
        Login as User
      </button>
    </div>
  );
};

export default IsLoggedIn;
