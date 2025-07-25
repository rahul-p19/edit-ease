import React from 'react'
import { useAuth } from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom';

function Login() {
  const auth = useAuth();
  const navigate = useNavigate();

  if(auth && auth.isAuthenticated && (auth.role === "ADMIN" || auth.slug)){
    if(auth.role === "ADMIN") navigate("/admin");
    else navigate(`/manage/${auth.slug}`);
  }

  return (
    <div>Login</div>
  )
}

export default Login