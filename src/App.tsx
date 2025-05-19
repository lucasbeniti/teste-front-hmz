import { useEffect, useState } from "react";
import LoginPage from "./pages/Login";
import UsersPage from "./pages/Users";

function App() {
  const [isAuthenticated, setisAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setisAuthenticated(!!token);
  }, [])

 
  return isAuthenticated ? <UsersPage /> : <LoginPage />;
}

export default App
