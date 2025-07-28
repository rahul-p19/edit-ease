import { type ReactNode, useState } from "react";
import { AuthContext } from "../context/AuthContext";

function AuthProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string>(localStorage.getItem("token")??"");
  const [role, setRole] = useState<string>(localStorage.getItem("role")??"");
  const [slug, setSlug] = useState<string>(localStorage.getItem("slug")??"");

  const login = (userToken: string, userRole: string, userSlug: string) => {
    setToken(userToken);
    setRole(userRole);
    setSlug(userSlug);
    localStorage.setItem("token", userToken);
    localStorage.setItem("role", userRole);
    localStorage.setItem("slug", userSlug);
  };

  const logout = () => {
    setToken("");
    setRole("");
    setSlug("");
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("slug");
    window.location.href = "/login";
  };

  const isAuthenticated = !!token;

  return (
    <AuthContext.Provider value={{ token, role, slug, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
