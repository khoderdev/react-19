// Import createContext from React
import { createContext, useState } from "react";
import axios from "axios";

// Define the shape of the context value
interface AuthContextType {
  isAuthenticated: boolean;
  token: string;
  login: (credentials: any) => void;
  register: (formData: any) => void;
  logout: () => void;
}

// Create context for authentication with initial values
export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  token: "",
  login: () => {},
  register: () => {},
  logout: () => {},
});

// AuthProvider component
const AuthProvider = ({ children }) => {
  // State to manage authentication and token
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState("");

  // Login function
  const login = async (credentials: any) => {
    try {
      const response = await axios.post(
        "http://localhost:8060/api/auth/login",
        credentials
      );
      const { token } = response.data;

      // Store token in local storage
      localStorage.setItem("token", token);

      // Update state
      setToken(token);
      setIsAuthenticated(true);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  // Register function
  const register = async (formData: any) => {
    try {
      // First, attempt to authenticate the user
      await login(formData);

      // If login successful, proceed with registration
      const response = await axios.post(
        "http://localhost:8060/api/auth/register",
        formData
      );

      // Handle successful registration
      console.log("Registration successful:", response.data);
    } catch (error) {
      // Handle registration errors
      console.error("Registration failed:", error);
    }
  };

  // Logout function
  const logout = () => {
    // Clear token from local storage
    localStorage.removeItem("token");

    // Update state
    setToken("");
    setIsAuthenticated(false);
  };

  // Provide the context value to children components
  return (
    <AuthContext.Provider
      value={{ isAuthenticated, token, login, register, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
